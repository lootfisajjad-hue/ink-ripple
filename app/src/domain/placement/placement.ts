/**
 * Placement engine — turns answers to a short adaptive quiz into a CEFR
 * estimate plus per-skill scores, which seed the learner's personalised plan.
 *
 * Pure and deterministic: given the same items + answers it always returns the
 * same result, so it is straightforward to unit-test.
 */
import type { Cefr } from '../content/schema';

export type Skill =
  'vocab' | 'grammar' | 'listening' | 'reading' | 'writing' | 'speaking';

export const SKILLS: Skill[] = [
  'vocab',
  'grammar',
  'listening',
  'reading',
  'writing',
  'speaking',
];

const CEFR_ORDER: Cefr[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
const cefrWeight: Record<Cefr, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };

export interface PlacementItem {
  id: string;
  skill: Skill;
  cefr: Cefr;
  /** correct option index, or null for self-assessed (speaking/writing) items */
  answerIndex: number | null;
}

export interface PlacementAnswer {
  itemId: string;
  /** chosen option index, or a 0..1 self-rating for self-assessed items */
  value: number;
}

export interface SkillScore {
  skill: Skill;
  /** 0..100 */
  score: number;
  cefr: Cefr;
}

export interface PlacementResult {
  overall: Cefr;
  /** 0..100 overall confidence-weighted score */
  overallScore: number;
  skills: SkillScore[];
}

function scoreToCefr(score: number): Cefr {
  // Map a 0..100 score to a CEFR band.
  if (score >= 85) return 'C1';
  if (score >= 68) return 'B2';
  if (score >= 50) return 'B1';
  if (score >= 30) return 'A2';
  return 'A1';
}

/**
 * Grade a placement session.
 *
 * For objective items (answerIndex set) an answer is correct when it matches.
 * For self-assessed items (answerIndex null) the answer `value` is treated as a
 * 0..1 confidence. Each item contributes weight proportional to its CEFR level,
 * so getting harder items right counts for more.
 */
export function gradePlacement(
  items: PlacementItem[],
  answers: PlacementAnswer[],
): PlacementResult {
  const byId = new Map(answers.map((a) => [a.itemId, a] as const));

  const bySkill = new Map<Skill, { earned: number; possible: number }>();
  for (const skill of SKILLS) bySkill.set(skill, { earned: 0, possible: 0 });

  for (const item of items) {
    const bucket = bySkill.get(item.skill)!;
    const weight = cefrWeight[item.cefr];
    bucket.possible += weight;

    const answer = byId.get(item.id);
    if (!answer) continue;

    if (item.answerIndex === null) {
      // self-assessed: value is 0..1
      bucket.earned += weight * Math.min(Math.max(answer.value, 0), 1);
    } else if (answer.value === item.answerIndex) {
      bucket.earned += weight;
    }
  }

  const skills: SkillScore[] = SKILLS.map((skill) => {
    const { earned, possible } = bySkill.get(skill)!;
    const score = possible > 0 ? Math.round((earned / possible) * 100) : 0;
    return { skill, score, cefr: scoreToCefr(score) };
  });

  const totalPossible = SKILLS.reduce(
    (s, k) => s + bySkill.get(k)!.possible,
    0,
  );
  const totalEarned = SKILLS.reduce((s, k) => s + bySkill.get(k)!.earned, 0);
  const overallScore =
    totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  return {
    overall: scoreToCefr(overallScore),
    overallScore,
    skills,
  };
}

/** The next CEFR level up from `level`, capped at C1. */
export function nextCefr(level: Cefr): Cefr {
  const i = CEFR_ORDER.indexOf(level);
  return CEFR_ORDER[Math.min(i + 1, CEFR_ORDER.length - 1)]!;
}

export { CEFR_ORDER };
