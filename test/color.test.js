import { describe, it, expect } from 'vitest';
import { wrapHue, jitterHue, hsla } from '../src/color.js';

describe('wrapHue', () => {
  it('leaves in-range hues untouched', () => {
    expect(wrapHue(0)).toBe(0);
    expect(wrapHue(200)).toBe(200);
    expect(wrapHue(359)).toBe(359);
  });

  it('wraps values above 360', () => {
    expect(wrapHue(370)).toBe(10);
    expect(wrapHue(720)).toBe(0);
  });

  it('wraps negative values into [0, 360)', () => {
    expect(wrapHue(-10)).toBe(350);
    expect(wrapHue(-370)).toBe(350);
  });
});

describe('jitterHue', () => {
  it('centres on the base hue when rng returns 0.5', () => {
    const rng = () => 0.5;
    expect(jitterHue(200, 60, rng)).toBe(200);
  });

  it('shifts to the low edge when rng returns 0', () => {
    const rng = () => 0;
    // 200 + 0 - 30 = 170
    expect(jitterHue(200, 60, rng)).toBe(170);
  });

  it('shifts toward the high edge when rng returns ~1', () => {
    const rng = () => 0.999999;
    // 200 + ~60 - 30 ≈ 230
    expect(jitterHue(200, 60, rng)).toBeCloseTo(230, 3);
  });

  it('always returns a wrapped hue in [0, 360)', () => {
    const rng = () => 0;
    const result = jitterHue(10, 60, rng); // 10 - 30 = -20 -> 340
    expect(result).toBe(340);
  });
});

describe('hsla', () => {
  it('formats an hsla string', () => {
    expect(hsla(200, 90, 65, 0.5)).toBe('hsla(200, 90%, 65%, 0.5)');
  });

  it('clamps alpha below 0 to 0', () => {
    expect(hsla(200, 90, 65, -1)).toBe('hsla(200, 90%, 65%, 0)');
  });

  it('clamps alpha above 1 to 1', () => {
    expect(hsla(200, 90, 65, 5)).toBe('hsla(200, 90%, 65%, 1)');
  });
});
