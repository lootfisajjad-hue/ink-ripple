import { describe, it, expect } from 'vitest';
import { validate } from '@/content/pipeline/validate';
import { getContentBundle, contentCounts } from '@/content/seed';

describe('seed content', () => {
  it('passes full schema + integrity validation', () => {
    const { ok, problems } = validate();
    if (!ok) console.error(problems);
    expect(ok).toBe(true);
  });

  it('parses through the Zod bundle schema without throwing', () => {
    expect(() => getContentBundle()).not.toThrow();
  });

  it('contains a meaningful amount of real content', () => {
    expect(contentCounts.vocab).toBeGreaterThanOrEqual(150);
    expect(contentCounts.phrases).toBeGreaterThanOrEqual(150);
    expect(contentCounts.interviewQuestions).toBeGreaterThanOrEqual(20);
    expect(contentCounts.lessons).toBeGreaterThanOrEqual(5);
    expect(contentCounts.cities).toBeGreaterThanOrEqual(5);
    expect(contentCounts.courseLessons).toBeGreaterThanOrEqual(5);
  });

  it('every course lesson has a title, sections, and a source note', () => {
    const bundle = getContentBundle();
    for (const l of bundle.courseLessons) {
      expect(l.titleFa.length).toBeGreaterThan(0);
      expect(l.titlePt.length).toBeGreaterThan(0);
      expect(l.sections.length).toBeGreaterThanOrEqual(1);
      expect(l.sourceNoteFa.length).toBeGreaterThan(0);
    }
  });

  it('every citizenship topic carries a source and a disclaimer', () => {
    const bundle = getContentBundle();
    for (const topic of bundle.citizenshipTopics) {
      expect(topic.sourceId).toBeTruthy();
      expect(topic.disclaimer).toBe(true);
    }
  });

  it('all interview questions have at least one sample answer', () => {
    const bundle = getContentBundle();
    for (const q of bundle.interviewQuestions) {
      expect(q.sampleAnswers.length).toBeGreaterThanOrEqual(1);
    }
  });
});
