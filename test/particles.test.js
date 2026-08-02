import { describe, it, expect } from 'vitest';
import {
  createTrailParticles,
  createFirework,
  stepParticle,
  particleRadius,
  isParticleAlive,
  stepParticles,
} from '../src/particles.js';
import { TRAIL, FIREWORK } from '../src/config.js';

const rng = () => 0.5;

describe('createTrailParticles', () => {
  it('emits the configured number of trail particles', () => {
    const ps = createTrailParticles(0, 0, 0, 0, 200, 18, rng);
    expect(ps).toHaveLength(TRAIL.countPerEmit);
    expect(ps.every((p) => p.kind === 'trail')).toBe(true);
  });

  it('starts each particle at full life', () => {
    const ps = createTrailParticles(5, 6, 0, 0, 200, 18, rng);
    expect(ps.every((p) => p.life === 1)).toBe(true);
    expect(ps.every((p) => p.x === 5 && p.y === 6)).toBe(true);
  });

  it('inherits a fraction of the pointer velocity', () => {
    // rng 0.5 => jitter term is exactly 0, so velocity is pure inheritance.
    const ps = createTrailParticles(0, 0, 10, 20, 200, 18, () => 0.5);
    expect(ps[0].vx).toBeCloseTo(10 * TRAIL.velocityInherit);
    expect(ps[0].vy).toBeCloseTo(20 * TRAIL.velocityInherit);
  });
});

describe('createFirework', () => {
  it('emits a full radial burst', () => {
    const ps = createFirework(0, 0, 200, 18, rng);
    expect(ps).toHaveLength(FIREWORK.count);
    expect(ps.every((p) => p.kind === 'firework')).toBe(true);
    expect(ps.every((p) => p.gravity === FIREWORK.gravity)).toBe(true);
  });

  it('spreads particles around a full circle', () => {
    const ps = createFirework(0, 0, 200, 18, () => 0);
    const angles = ps.map((p) => Math.atan2(p.vy, p.vx));
    // With zero jitter the first particle points along +x.
    expect(angles[0]).toBeCloseTo(0);
    // Some particle should point roughly opposite.
    const hasOpposite = angles.some(
      (a) => Math.abs(Math.abs(a) - Math.PI) < 0.2,
    );
    expect(hasOpposite).toBe(true);
  });
});

describe('stepParticle', () => {
  it('applies gravity to fireworks', () => {
    const p = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 1,
      size: 5,
      hue: 0,
      kind: 'firework',
      gravity: FIREWORK.gravity,
    };
    stepParticle(p);
    expect(p.vy).toBeGreaterThan(0); // pulled downward
    expect(p.life).toBeCloseTo(1 - FIREWORK.fadePerFrame);
  });

  it('applies drag to trails without gravity', () => {
    const p = {
      x: 0,
      y: 0,
      vx: 10,
      vy: 0,
      life: 1,
      size: 5,
      hue: 0,
      kind: 'trail',
    };
    stepParticle(p);
    expect(p.vx).toBeCloseTo(10 * TRAIL.drag);
    expect(p.x).toBeCloseTo(10 * TRAIL.drag);
    expect(p.life).toBeCloseTo(1 - TRAIL.fadePerFrame);
  });
});

describe('particleRadius', () => {
  it('scales with life but never below a floor', () => {
    expect(particleRadius({ size: 10, life: 1 })).toBe(10);
    expect(particleRadius({ size: 10, life: 0.5 })).toBe(5);
    expect(particleRadius({ size: 10, life: 0 })).toBe(0.5);
  });
});

describe('isParticleAlive', () => {
  it('tracks the life property', () => {
    expect(isParticleAlive({ life: 0.1 })).toBe(true);
    expect(isParticleAlive({ life: 0 })).toBe(false);
    expect(isParticleAlive({ life: -1 })).toBe(false);
  });
});

describe('stepParticles', () => {
  it('drops particles once their life runs out', () => {
    let ps = createFirework(0, 0, 200, 18, rng);
    for (let i = 0; i < 200; i++) {
      ps = stepParticles(ps);
    }
    expect(ps).toHaveLength(0);
  });
});
