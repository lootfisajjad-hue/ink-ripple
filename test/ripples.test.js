import { describe, it, expect } from 'vitest';
import {
  createRipple,
  stepRipple,
  isRippleAlive,
  stepRipples,
} from '../src/ripples.js';
import { RIPPLE } from '../src/config.js';

const rng = () => 0.5;

describe('createRipple', () => {
  it('starts at the configured radius and alpha', () => {
    const r = createRipple(10, 20, 200, 18, rng);
    expect(r.x).toBe(10);
    expect(r.y).toBe(20);
    expect(r.r).toBe(RIPPLE.startRadius);
    expect(r.alpha).toBe(RIPPLE.startAlpha);
  });

  it('computes maxR from brush size and jitter', () => {
    const r = createRipple(0, 0, 200, 18, () => 0);
    expect(r.maxR).toBe(18 * RIPPLE.radiusFactor); // jitter contributes 0
  });

  it('jitters the hue around the base', () => {
    const r = createRipple(0, 0, 200, 18, () => 0.5);
    expect(r.hue).toBe(200);
  });
});

describe('stepRipple', () => {
  it('grows the radius and reduces alpha each frame', () => {
    const r = createRipple(0, 0, 200, 18, rng);
    const before = { r: r.r, alpha: r.alpha };
    stepRipple(r);
    expect(r.r).toBeCloseTo(before.r + RIPPLE.growthPerFrame);
    expect(r.alpha).toBeCloseTo(before.alpha - RIPPLE.fadePerFrame);
  });
});

describe('isRippleAlive', () => {
  it('is alive while alpha positive and radius below the overshoot bound', () => {
    expect(isRippleAlive({ alpha: 0.5, r: 10, maxR: 50 })).toBe(true);
  });

  it('is dead once alpha reaches zero', () => {
    expect(isRippleAlive({ alpha: 0, r: 10, maxR: 50 })).toBe(false);
  });

  it('is dead once radius exceeds maxR + overshoot', () => {
    expect(
      isRippleAlive({ alpha: 0.5, r: 50 + RIPPLE.overshoot + 1, maxR: 50 }),
    ).toBe(false);
  });
});

describe('stepRipples', () => {
  it('advances all ripples and removes the dead ones', () => {
    const alive = createRipple(0, 0, 200, 60, rng);
    const dead = { x: 0, y: 0, r: 5, maxR: 50, hue: 0, alpha: 0.005 };
    const result = stepRipples([alive, dead]);
    expect(result).toContain(alive);
    expect(result).not.toContain(dead);
  });

  it('eventually empties as ripples fade out', () => {
    let ripples = [createRipple(0, 0, 200, 4, rng)];
    for (let i = 0; i < 500; i++) {
      ripples = stepRipples(ripples);
    }
    expect(ripples).toHaveLength(0);
  });
});
