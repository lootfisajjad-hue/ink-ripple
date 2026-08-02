/**
 * Interview simulator logic — pure and testable. It sequences questions for a
 * chosen mode/length and scores answers with transparent heuristics.
 *
 * HONESTY: the score is a rough language-practice signal (length, keyword
 * coverage, Portuguese-ness). It is NOT an assessment of truthfulness and does
 * NOT predict any real interview outcome. The UI states this clearly.
 */
import type { InterviewQuestion } from '@/domain/content/schema';

export type SimulatorMode = 'friendly' | 'formal' | 'hard';
export type SimulatorLength = 'short' | 'medium' | 'full';

export interface SimulatorConfig {
  mode: SimulatorMode;
  length: SimulatorLength;
  /** restrict to these topics, or all if empty */
  topics?: string[];
}

const LENGTH_COUNT: Record<SimulatorLength, number> = {
  short: 4,
  medium: 7,
  full: 12,
};

/** Deterministic-ish shuffle driven by a seed so tests are stable. */
function seededOrder<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  let s = seed >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

/** Choose the ordered question set for a session. */
export function planSession(
  pool: InterviewQuestion[],
  config: SimulatorConfig,
  seed = 1,
): InterviewQuestion[] {
  const filtered =
    config.topics && config.topics.length
      ? pool.filter((q) => config.topics!.includes(q.topic))
      : pool;
  const ordered = seededOrder(filtered, seed);
  return ordered.slice(
    0,
    Math.min(LENGTH_COUNT[config.length], ordered.length),
  );
}

export interface AnswerScore {
  score: number; // 0..100
  notes: string[]; // Persian feedback
}

const PT_HINT_WORDS = [
  'eu',
  'sou',
  'moro',
  'brasil',
  'meu',
  'minha',
  'porque',
  'anos',
  'não',
  'sim',
  'tenho',
  'quero',
  'desde',
];

/**
 * Heuristically score a single answer. Rewards: non-trivial length, presence of
 * Portuguese function words, and coverage of the question's key terms.
 */
export function scoreAnswer(
  question: InterviewQuestion,
  answer: string,
): AnswerScore {
  const notes: string[] = [];
  const text = answer.trim().toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return { score: 0, notes: ['پاسخی داده نشد.'] };
  }

  let score = 0;

  // length component (up to 40)
  const lengthScore = Math.min(words.length, 12) / 12;
  score += lengthScore * 40;
  if (words.length < 3)
    notes.push('پاسخ خیلی کوتاه است؛ یک جملهٔ کامل بگویید.');

  // Portuguese-ness component (up to 35)
  const ptHits = PT_HINT_WORDS.filter((w) => text.includes(w)).length;
  score += Math.min(ptHits / 4, 1) * 35;
  if (ptHits === 0)
    notes.push(
      'به نظر می‌رسد پاسخ به پرتغالی نیست؛ سعی کنید به پرتغالی جواب دهید.',
    );

  // key-term coverage from the question (up to 25)
  const keyTerms = question.pt
    .toLowerCase()
    .replace(/[?.,!]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 4);
  const covered = keyTerms.filter((k) => text.includes(k)).length;
  score += keyTerms.length ? (covered / keyTerms.length) * 25 : 12;

  const rounded = Math.round(Math.min(score, 100));
  if (rounded >= 70) notes.push('خوب بود! پاسخ روشن و مرتبط است.');
  else if (rounded >= 45) notes.push('قابل قبول؛ با جزئیات بیشتر بهتر می‌شود.');
  return { score: rounded, notes };
}

export interface SessionReport {
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  /** never a pass/fail claim */
  disclaimer: string;
}

export function buildReport(scores: AnswerScore[]): SessionReport {
  if (scores.length === 0) {
    return {
      overallScore: 0,
      strengths: [],
      weaknesses: [],
      disclaimer: 'این تمرین است و نتیجهٔ واقعی را نشان نمی‌دهد.',
    };
  }
  const overall = Math.round(
    scores.reduce((s, a) => s + a.score, 0) / scores.length,
  );
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  if (overall >= 65) strengths.push('توانایی پاسخ‌دهی مرتبط و قابل‌فهم.');
  if (scores.some((s) => s.score < 45))
    weaknesses.push('برخی پاسخ‌ها کوتاه یا نامرتبط بودند.');
  if (overall < 50)
    weaknesses.push('تمرین بیشتر روی جمله‌سازی کامل توصیه می‌شود.');
  return {
    overallScore: overall,
    strengths,
    weaknesses,
    disclaimer: 'این تمرین است و نتیجهٔ واقعی قبولی یا رد را نشان نمی‌دهد.',
  };
}

export { LENGTH_COUNT };
