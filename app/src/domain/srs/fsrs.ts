/**
 * A compact implementation of the FSRS (Free Spaced Repetition Scheduler)
 * algorithm — the modern, open successor to SM-2 used by Anki.
 *
 * We chose FSRS over SM-2 because it models memory with separate *stability*
 * and *difficulty* variables and predicts recall probability, which schedules
 * reviews far more accurately for a language-learning workload. See
 * ARCHITECTURE.md and the FSRS-4.5 reference weights.
 *
 * This module is pure: it takes a card's memory state + a rating and returns
 * the next state. No storage, no clock beyond the `now` you pass in.
 */

export type Rating = 'again' | 'hard' | 'good' | 'easy';
export const RATINGS: Rating[] = ['again', 'hard', 'good', 'easy'];
const ratingValue: Record<Rating, number> = {
  again: 1,
  hard: 2,
  good: 3,
  easy: 4,
};

export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface MemoryState {
  /** memory stability in days */
  stability: number;
  /** difficulty in [1, 10] */
  difficulty: number;
  state: CardState;
  /** ISO datetime of the last review, or null if never reviewed */
  lastReview: string | null;
  /** ISO datetime the card is next due */
  due: string;
  reps: number;
  lapses: number;
}

/** FSRS-4.5 default weights. */
export const DEFAULT_WEIGHTS: readonly number[] = [
  0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234, 1.616,
  0.1544, 1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407, 2.9466, 0.5034,
  0.6567,
];

const DECAY = -0.5;
const FACTOR = 19 / 81; // 0.9^(1/DECAY) - 1

export interface SchedulerOptions {
  /** desired probability of recall at review time (0..1) */
  requestRetention: number;
  /** cap on interval length in days */
  maximumInterval: number;
  weights: readonly number[];
}

export const DEFAULT_OPTIONS: SchedulerOptions = {
  requestRetention: 0.9,
  maximumInterval: 36500,
  weights: DEFAULT_WEIGHTS,
};

const clampDifficulty = (d: number): number => Math.min(Math.max(d, 1), 10);
const daysBetween = (a: string, b: string): number =>
  (new Date(b).getTime() - new Date(a).getTime()) / 86_400_000;
const addDays = (iso: string, days: number): string =>
  new Date(new Date(iso).getTime() + days * 86_400_000).toISOString();

/** Retrievability: probability of recall after `elapsedDays` at `stability`. */
export function retrievability(elapsedDays: number, stability: number): number {
  if (stability <= 0) return 0;
  return Math.pow(1 + (FACTOR * elapsedDays) / stability, DECAY);
}

/** Convert a target stability into an interval (days) for the desired retention. */
function nextInterval(stability: number, opts: SchedulerOptions): number {
  const interval =
    (stability / FACTOR) * (Math.pow(opts.requestRetention, 1 / DECAY) - 1);
  return Math.min(Math.max(Math.round(interval), 1), opts.maximumInterval);
}

function initDifficulty(w: readonly number[], rating: Rating): number {
  return clampDifficulty(
    w[4]! - Math.exp(w[5]! * (ratingValue[rating] - 1)) + 1,
  );
}
function initStability(w: readonly number[], rating: Rating): number {
  return Math.max(w[ratingValue[rating] - 1]!, 0.1);
}

function nextDifficulty(
  w: readonly number[],
  difficulty: number,
  rating: Rating,
): number {
  const delta = -w[6]! * (ratingValue[rating] - 3);
  const damped = difficulty + delta * ((10 - difficulty) / 9);
  // mean reversion toward the "easy" init difficulty
  const target = initDifficulty(w, 'easy');
  return clampDifficulty(w[7]! * target + (1 - w[7]!) * damped);
}

function nextRecallStability(
  w: readonly number[],
  difficulty: number,
  stability: number,
  retr: number,
  rating: Rating,
): number {
  const hardPenalty = rating === 'hard' ? w[15]! : 1;
  const easyBonus = rating === 'easy' ? w[16]! : 1;
  return (
    stability *
    (1 +
      Math.exp(w[8]!) *
        (11 - difficulty) *
        Math.pow(stability, -w[9]!) *
        (Math.exp((1 - retr) * w[10]!) - 1) *
        hardPenalty *
        easyBonus)
  );
}

function nextForgetStability(
  w: readonly number[],
  difficulty: number,
  stability: number,
  retr: number,
): number {
  return (
    w[11]! *
    Math.pow(difficulty, -w[12]!) *
    (Math.pow(stability + 1, w[13]!) - 1) *
    Math.exp((1 - retr) * w[14]!)
  );
}

/** A brand-new card, never reviewed. Due immediately. */
export function newCard(now: string): MemoryState {
  return {
    stability: 0,
    difficulty: 0,
    state: 'new',
    lastReview: null,
    due: now,
    reps: 0,
    lapses: 0,
  };
}

/**
 * Apply a review rating to a card and return its next memory state.
 *
 * @param card - current state
 * @param rating - the user's self-assessment
 * @param now - ISO datetime of this review
 * @param options - scheduler tuning
 */
export function review(
  card: MemoryState,
  rating: Rating,
  now: string,
  options: SchedulerOptions = DEFAULT_OPTIONS,
): MemoryState {
  const w = options.weights;

  // First-ever exposure.
  if (card.state === 'new') {
    const difficulty = initDifficulty(w, rating);
    const stability = initStability(w, rating);
    const interval = rating === 'again' ? 0 : nextInterval(stability, options);
    return {
      stability,
      difficulty,
      state: rating === 'again' ? 'learning' : 'review',
      lastReview: now,
      due: rating === 'again' ? addDays(now, 0) : addDays(now, interval),
      reps: 1,
      lapses: 0,
    };
  }

  const elapsed = card.lastReview
    ? Math.max(daysBetween(card.lastReview, now), 0)
    : 0;
  const retr = retrievability(elapsed, card.stability);
  const difficulty = nextDifficulty(w, card.difficulty, rating);

  if (rating === 'again') {
    const stability = nextForgetStability(
      w,
      card.difficulty,
      card.stability,
      retr,
    );
    return {
      stability,
      difficulty,
      state: 'relearning',
      lastReview: now,
      due: addDays(now, 0),
      reps: card.reps + 1,
      lapses: card.lapses + 1,
    };
  }

  const stability = nextRecallStability(
    w,
    card.difficulty,
    card.stability,
    retr,
    rating,
  );
  const interval = nextInterval(stability, options);
  return {
    stability,
    difficulty,
    state: 'review',
    lastReview: now,
    due: addDays(now, interval),
    reps: card.reps + 1,
    lapses: card.lapses,
  };
}

/** Days until the card is due (negative = overdue). */
export function daysUntilDue(card: MemoryState, now: string): number {
  return daysBetween(now, card.due);
}

/** Is the card due for review at `now`? */
export function isDue(card: MemoryState, now: string): boolean {
  return new Date(card.due).getTime() <= new Date(now).getTime();
}
