// @vitest-environment jsdom
import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach } from 'vitest';
import { db } from '@/infra/db/db';
import {
  addCard,
  getDueCards,
  gradeCard,
  countDue,
  recordMistake,
  getDeckSummaries,
  setCardImportance,
} from '@/infra/db/flashcards';

const PROFILE = 'p1';

async function resetDb() {
  await db.delete();
  await db.open();
}

describe('flashcard service (IndexedDB)', () => {
  beforeEach(resetDb);

  it('creates a due card and does not duplicate it', async () => {
    const c1 = await addCard(PROFILE, {
      itemId: 'v1',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'olá',
      back: 'سلام',
    });
    const c2 = await addCard(PROFILE, {
      itemId: 'v1',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'olá',
      back: 'سلام',
    });
    expect(c1.id).toBe(c2.id);
    expect(await countDue(PROFILE)).toBe(1);
  });

  it('grading with a good rating schedules the card into the future', async () => {
    const card = await addCard(PROFILE, {
      itemId: 'v2',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'água',
      back: 'آب',
    });
    await gradeCard(card, 'good');
    expect(await countDue(PROFILE)).toBe(0); // no longer due today
    const logs = await db.reviewLogs.where('profileId').equals(PROFILE).count();
    expect(logs).toBe(1);
  });

  it('keeps an "again" card due', async () => {
    const card = await addCard(PROFILE, {
      itemId: 'v3',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'pão',
      back: 'نان',
    });
    await gradeCard(card, 'again');
    const due = await getDueCards(PROFILE);
    expect(due.map((c) => c.itemId)).toContain('v3');
  });

  it('turns a mistake into a card in the mistakes deck', async () => {
    await recordMistake({
      profileId: PROFILE,
      context: 'lesson',
      pt: 'eu sou bem',
      correctionPt: 'eu estou bem',
      noteFa: 'برای حال از estar استفاده کنید',
    });
    const summaries = await getDeckSummaries(PROFILE);
    const mistakes = summaries.find((s) => s.deck === 'mistakes');
    expect(mistakes?.total).toBe(1);
  });

  it('lets the user set importance and clamps it to 0..5', async () => {
    const card = await addCard(PROFILE, {
      itemId: 'imp',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'importante',
      back: 'مهم',
    });
    await setCardImportance(card.id, 5);
    expect((await db.flashcards.get(card.id))!.importance).toBe(5);
    await setCardImportance(card.id, 9); // clamps to 5
    expect((await db.flashcards.get(card.id))!.importance).toBe(5);
    await setCardImportance(card.id, 0); // clear
    expect((await db.flashcards.get(card.id))!.importance).toBe(0);
  });

  it('orders due cards most-important first', async () => {
    const low = await addCard(PROFILE, {
      itemId: 'low',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'a',
      back: 'a',
    });
    const high = await addCard(PROFILE, {
      itemId: 'high',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'b',
      back: 'b',
    });
    await setCardImportance(low.id, 1);
    await setCardImportance(high.id, 5);
    const due = await getDueCards(PROFILE);
    const iLow = due.findIndex((c) => c.itemId === 'low');
    const iHigh = due.findIndex((c) => c.itemId === 'high');
    expect(iHigh).toBeLessThan(iLow); // 5★ before 1★
  });

  it('isolates cards between profiles', async () => {
    await addCard('p1', {
      itemId: 'x',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'a',
      back: 'b',
    });
    await addCard('p2', {
      itemId: 'y',
      itemType: 'vocab',
      deck: 'vocab',
      front: 'c',
      back: 'd',
    });
    expect(await countDue('p1')).toBe(1);
    expect(await countDue('p2')).toBe(1);
    const p1cards = await getDueCards('p1');
    expect(p1cards.every((c) => c.profileId === 'p1')).toBe(true);
  });
});
