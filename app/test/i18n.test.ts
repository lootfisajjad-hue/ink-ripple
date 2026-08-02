import { describe, it, expect } from 'vitest';
import { fa } from '@/app/i18n/locales/fa';
import { en } from '@/app/i18n/locales/en';
import { pt } from '@/app/i18n/locales/pt';
import { isRtl, LANGUAGES } from '@/app/i18n';

/** Recursively collect dotted key paths from a nested object. */
function keyPaths(obj: unknown, prefix = ''): string[] {
  if (typeof obj !== 'object' || obj === null) return [prefix];
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    keyPaths(v, prefix ? `${prefix}.${k}` : k),
  );
}

describe('i18n locales', () => {
  const faKeys = keyPaths(fa).sort();

  it('en has exactly the same keys as fa', () => {
    expect(keyPaths(en).sort()).toEqual(faKeys);
  });

  it('pt has exactly the same keys as fa', () => {
    expect(keyPaths(pt).sort()).toEqual(faKeys);
  });

  it('preserves interpolation placeholders across locales', () => {
    // dashboard.greeting uses {{name}}
    expect(fa.dashboard.greeting).toContain('{{name}}');
    expect(en.dashboard.greeting).toContain('{{name}}');
    expect(pt.dashboard.greeting).toContain('{{name}}');
  });
});

describe('direction', () => {
  it('marks Persian as RTL and others as LTR', () => {
    expect(isRtl('fa')).toBe(true);
    expect(isRtl('en')).toBe(false);
    expect(isRtl('pt')).toBe(false);
  });

  it('exposes the three supported languages', () => {
    expect(LANGUAGES).toEqual(['fa', 'pt', 'en']);
  });
});
