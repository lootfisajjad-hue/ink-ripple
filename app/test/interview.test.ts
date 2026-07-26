import { describe, it, expect } from 'vitest';
import {
  planSession,
  scoreAnswer,
  buildReport,
  LENGTH_COUNT,
} from '@/domain/interview/simulator';
import type { InterviewQuestion } from '@/domain/content/schema';

const pool: InterviewQuestion[] = Array.from({ length: 15 }, (_, i) => ({
  id: `q${i}`,
  topic: i % 2 === 0 ? 'personal' : 'residence',
  pt: `Pergunta número ${i} sobre residência?`,
  fa: 'سؤال',
  sampleAnswers: [{ cefr: 'A1', pt: 'Sim.', fa: 'بله.' }],
  tips: [],
}));

describe('planSession', () => {
  it('returns the configured number of questions', () => {
    expect(
      planSession(pool, { mode: 'friendly', length: 'short' }, 1),
    ).toHaveLength(LENGTH_COUNT.short);
    expect(
      planSession(pool, { mode: 'friendly', length: 'medium' }, 1),
    ).toHaveLength(LENGTH_COUNT.medium);
  });

  it('filters by topic when provided', () => {
    const s = planSession(
      pool,
      { mode: 'formal', length: 'full', topics: ['personal'] },
      3,
    );
    expect(s.every((q) => q.topic === 'personal')).toBe(true);
  });

  it('is deterministic for the same seed', () => {
    const a = planSession(pool, { mode: 'hard', length: 'short' }, 7);
    const b = planSession(pool, { mode: 'hard', length: 'short' }, 7);
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id));
  });
});

describe('scoreAnswer', () => {
  const q = pool[1]!;

  it('scores an empty answer as 0', () => {
    expect(scoreAnswer(q, '   ').score).toBe(0);
  });

  it('rewards a relevant Portuguese answer over gibberish', () => {
    const good = scoreAnswer(
      q,
      'Sim, eu moro no Brasil e não tenho problemas com a residência.',
    );
    const bad = scoreAnswer(q, 'asdf');
    expect(good.score).toBeGreaterThan(bad.score);
  });

  it('flags a very short answer', () => {
    const r = scoreAnswer(q, 'sim');
    expect(r.notes.join(' ')).toMatch(/کوتاه/);
  });
});

describe('buildReport', () => {
  it('averages scores and never claims a pass/fail', () => {
    const report = buildReport([
      { score: 80, notes: [] },
      { score: 60, notes: [] },
    ]);
    expect(report.overallScore).toBe(70);
    // The disclaimer must state this is practice and explicitly deny a real result.
    expect(report.disclaimer).toMatch(/تمرین/);
    expect(report.disclaimer).toMatch(/نشان نمی‌دهد/);
  });

  it('handles an empty session', () => {
    const report = buildReport([]);
    expect(report.overallScore).toBe(0);
  });
});
