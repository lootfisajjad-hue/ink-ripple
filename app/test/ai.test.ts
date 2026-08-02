import { describe, it, expect } from 'vitest';
import { mockAIProvider } from '@/infra/ai/mock';
import { resolveProvider } from '@/infra/ai/registry';

describe('mockAIProvider', () => {
  it('is always available and greets with a persona opener', async () => {
    expect(mockAIProvider.available()).toBe(true);
    const res = await mockAIProvider.chat([], { persona: 'officer' });
    expect(res.reply.length).toBeGreaterThan(0);
    expect(res.providerId).toBe('mock');
  });

  it('offers a correction for ser/estar confusion', async () => {
    const res = await mockAIProvider.chat(
      [{ role: 'user', content: 'eu sou cansado' }],
      { persona: 'teacher' },
    );
    expect(res.corrections?.length).toBeGreaterThan(0);
    expect(res.corrections![0].corrected).toMatch(/estou/);
  });

  it('suggests the accented spelling of "você"', async () => {
    const res = await mockAIProvider.chat([
      { role: 'user', content: 'como voce esta' },
    ]);
    expect(res.corrections?.some((c) => c.corrected.includes('você'))).toBe(
      true,
    );
  });
});

describe('resolveProvider', () => {
  it('falls back to mock for an unknown or unavailable provider', () => {
    expect(resolveProvider('does-not-exist').id).toBe('mock');
    // openai has no key configured in tests → unavailable → mock
    expect(resolveProvider('openai').id).toBe('mock');
  });
});
