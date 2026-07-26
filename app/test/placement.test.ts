import { describe, it, expect } from 'vitest';
import {
  gradePlacement,
  nextCefr,
  SKILLS,
  type PlacementItem,
  type PlacementAnswer,
} from '@/domain/placement/placement';

const items: PlacementItem[] = [
  { id: 'a', skill: 'vocab', cefr: 'A1', answerIndex: 1 },
  { id: 'b', skill: 'vocab', cefr: 'A2', answerIndex: 0 },
  { id: 'c', skill: 'grammar', cefr: 'B1', answerIndex: 2 },
  { id: 'd', skill: 'speaking', cefr: 'A1', answerIndex: null },
];

describe('gradePlacement', () => {
  it('scores a perfect run as C1-ish and covers all skills', () => {
    const answers: PlacementAnswer[] = [
      { itemId: 'a', value: 1 },
      { itemId: 'b', value: 0 },
      { itemId: 'c', value: 2 },
      { itemId: 'd', value: 1 },
    ];
    const result = gradePlacement(items, answers);
    expect(result.overallScore).toBe(100);
    expect(result.overall).toBe('C1');
    expect(result.skills).toHaveLength(SKILLS.length);
  });

  it('scores an all-wrong run as A1 with zero', () => {
    const answers: PlacementAnswer[] = [
      { itemId: 'a', value: 0 },
      { itemId: 'b', value: 3 },
      { itemId: 'c', value: 0 },
      { itemId: 'd', value: 0 },
    ];
    const result = gradePlacement(items, answers);
    expect(result.overallScore).toBe(0);
    expect(result.overall).toBe('A1');
  });

  it('weights harder (higher-CEFR) items more', () => {
    // Only the B1 grammar item correct.
    const onlyHard = gradePlacement(items, [{ itemId: 'c', value: 2 }]);
    // Only the A1 vocab item correct.
    const onlyEasy = gradePlacement(items, [{ itemId: 'a', value: 1 }]);
    expect(onlyHard.overallScore).toBeGreaterThan(onlyEasy.overallScore);
  });

  it('treats self-assessed items with a 0..1 confidence', () => {
    const half = gradePlacement(items, [{ itemId: 'd', value: 0.5 }]);
    const speaking = half.skills.find((s) => s.skill === 'speaking')!;
    expect(speaking.score).toBe(50);
  });

  it('ignores unanswered items (no credit)', () => {
    const result = gradePlacement(items, []);
    expect(result.overallScore).toBe(0);
  });
});

describe('nextCefr', () => {
  it('advances one level, capping at C1', () => {
    expect(nextCefr('A1')).toBe('A2');
    expect(nextCefr('B2')).toBe('C1');
    expect(nextCefr('C1')).toBe('C1');
  });
});
