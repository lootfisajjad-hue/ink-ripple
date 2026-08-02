import { describe, it, expect } from 'vitest';
import {
  newCard,
  review,
  isDue,
  retrievability,
  RATINGS,
  type MemoryState,
} from '@/domain/srs/fsrs';

const T0 = '2026-01-01T00:00:00.000Z';
const later = (days: number) =>
  new Date(new Date(T0).getTime() + days * 86_400_000).toISOString();

describe('newCard', () => {
  it('is due immediately and unreviewed', () => {
    const c = newCard(T0);
    expect(c.state).toBe('new');
    expect(c.reps).toBe(0);
    expect(isDue(c, T0)).toBe(true);
    expect(c.lastReview).toBeNull();
  });
});

describe('review — first exposure', () => {
  it('"again" keeps the card in learning and due now', () => {
    const c = review(newCard(T0), 'again', T0);
    expect(c.state).toBe('learning');
    expect(c.reps).toBe(1);
    expect(isDue(c, T0)).toBe(true);
  });

  it('better ratings produce longer first intervals', () => {
    const good = review(newCard(T0), 'good', T0);
    const easy = review(newCard(T0), 'easy', T0);
    expect(new Date(easy.due).getTime()).toBeGreaterThanOrEqual(
      new Date(good.due).getTime(),
    );
    expect(good.state).toBe('review');
  });
});

describe('review — subsequent reviews', () => {
  it('increases stability when recalled successfully', () => {
    let card: MemoryState = review(newCard(T0), 'good', T0);
    const firstStability = card.stability;
    card = review(card, 'good', later(3));
    expect(card.stability).toBeGreaterThan(firstStability);
  });

  it('"again" causes a lapse and relearning', () => {
    let card = review(newCard(T0), 'good', T0);
    card = review(card, 'again', later(2));
    expect(card.state).toBe('relearning');
    expect(card.lapses).toBe(1);
  });

  it('difficulty stays within [1, 10]', () => {
    let card = review(newCard(T0), 'again', T0);
    for (let i = 0; i < 20; i++) {
      const rating = RATINGS[i % RATINGS.length]!;
      card = review(card, rating, later(i + 1));
      expect(card.difficulty).toBeGreaterThanOrEqual(1);
      expect(card.difficulty).toBeLessThanOrEqual(10);
    }
  });
});

describe('retrievability', () => {
  it('is 1 right after review and decays over time', () => {
    expect(retrievability(0, 5)).toBeCloseTo(1, 5);
    const oneDay = retrievability(1, 5);
    const tenDays = retrievability(10, 5);
    expect(oneDay).toBeLessThan(1);
    expect(tenDays).toBeLessThan(oneDay);
  });

  it('returns 0 for non-positive stability', () => {
    expect(retrievability(3, 0)).toBe(0);
  });
});
