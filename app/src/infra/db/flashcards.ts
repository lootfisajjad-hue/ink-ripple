/**
 * Flashcard service — bridges the pure FSRS scheduler (src/domain/srs) with the
 * local database. Handles creating cards from content, fetching what is due,
 * grading reviews, and turning mistakes into cards.
 */
import { db, type Flashcard, type MistakeRecord } from './db';
import { newCard, review, isDue, type Rating } from '@/domain/srs/fsrs';

function now(): string {
  return new Date().toISOString();
}

function cardId(profileId: string, itemId: string): string {
  return `${profileId}:${itemId}`;
}

export interface NewCardInput {
  itemId: string;
  itemType: Flashcard['itemType'];
  deck: string;
  front: string;
  back: string;
  pronunciation?: string;
}

/** Create a card if it does not already exist for this profile. */
export async function addCard(
  profileId: string,
  input: NewCardInput,
): Promise<Flashcard> {
  const id = cardId(profileId, input.itemId);
  const existing = await db.flashcards.get(id);
  if (existing) return existing;
  const ts = now();
  const card: Flashcard = {
    id,
    profileId,
    itemId: input.itemId,
    itemType: input.itemType,
    deck: input.deck,
    front: input.front,
    back: input.back,
    pronunciation: input.pronunciation,
    memory: newCard(ts),
    createdAt: ts,
    updatedAt: ts,
  };
  await db.flashcards.put(card);
  return card;
}

/** All cards currently due for a profile, optionally limited to one deck. */
export async function getDueCards(
  profileId: string,
  deck?: string,
  limit = 50,
): Promise<Flashcard[]> {
  const ts = now();
  const all = deck
    ? await db.flashcards.where({ profileId, deck }).toArray()
    : await db.flashcards.where('profileId').equals(profileId).toArray();
  return all
    .filter((c) => isDue(c.memory, ts))
    .sort((a, b) => a.memory.due.localeCompare(b.memory.due))
    .slice(0, limit);
}

export async function countDue(profileId: string): Promise<number> {
  const ts = now();
  const all = await db.flashcards
    .where('profileId')
    .equals(profileId)
    .toArray();
  return all.filter((c) => isDue(c.memory, ts)).length;
}

/** Apply a rating to a card, persist the new memory state, and log the review. */
export async function gradeCard(
  card: Flashcard,
  rating: Rating,
): Promise<Flashcard> {
  const ts = now();
  const memory = review(card.memory, rating, ts);
  const updated: Flashcard = { ...card, memory, updatedAt: ts };
  await db.flashcards.put(updated);
  await db.reviewLogs.add({
    profileId: card.profileId,
    cardId: card.id,
    rating,
    reviewedAt: ts,
    scheduledDays: Math.round(
      (new Date(memory.due).getTime() - new Date(ts).getTime()) / 86_400_000,
    ),
  });
  return updated;
}

/** Record a mistake and optionally turn it into a flashcard immediately. */
export async function recordMistake(
  mistake: Omit<MistakeRecord, 'id' | 'createdAt' | 'turnedIntoCard'>,
  makeCard = true,
): Promise<void> {
  const created = now();
  const id = await db.mistakes.add({
    ...mistake,
    createdAt: created,
    turnedIntoCard: makeCard,
  });
  if (makeCard) {
    await addCard(mistake.profileId, {
      itemId: `mistake-${id}`,
      itemType: 'mistake',
      deck: 'mistakes',
      front: mistake.pt,
      back: mistake.correctionPt,
      pronunciation: mistake.noteFa,
    });
  }
}

export async function getDeckSummaries(
  profileId: string,
): Promise<Array<{ deck: string; total: number; due: number }>> {
  const ts = now();
  const all = await db.flashcards
    .where('profileId')
    .equals(profileId)
    .toArray();
  const map = new Map<string, { total: number; due: number }>();
  for (const c of all) {
    const entry = map.get(c.deck) ?? { total: 0, due: 0 };
    entry.total += 1;
    if (isDue(c.memory, ts)) entry.due += 1;
    map.set(c.deck, entry);
  }
  return [...map.entries()].map(([deck, v]) => ({ deck, ...v }));
}
