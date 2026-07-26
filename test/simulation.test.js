import { describe, it, expect } from 'vitest';
import { Simulation } from '../src/simulation.js';
import { mulberry32 } from '../src/rng.js';
import { FIREWORK, TRAIL } from '../src/config.js';

function makeSim(overrides = {}) {
  return new Simulation({ rng: mulberry32(1), ...overrides });
}

describe('Simulation', () => {
  it('applies sensible defaults', () => {
    const sim = makeSim();
    expect(sim.mode).toBe('ripple');
    expect(sim.hue).toBe(200);
    expect(sim.brushSize).toBe(18);
    expect(sim.count).toBe(0);
  });

  it('emits ripples in ripple mode', () => {
    const sim = makeSim({ mode: 'ripple' });
    sim.emit(10, 10);
    expect(sim.ripples).toHaveLength(1);
    expect(sim.particles).toHaveLength(0);
  });

  it('emits a trail burst in trail mode', () => {
    const sim = makeSim({ mode: 'trail' });
    sim.emit(10, 10, 5, 5);
    expect(sim.particles).toHaveLength(TRAIL.countPerEmit);
    expect(sim.ripples).toHaveLength(0);
  });

  it('emits a firework burst in fireworks mode', () => {
    const sim = makeSim({ mode: 'fireworks' });
    sim.emit(10, 10);
    expect(sim.particles).toHaveLength(FIREWORK.count);
  });

  it('rejects unknown modes', () => {
    const sim = makeSim();
    expect(() => sim.setMode('bogus')).toThrow(/Unknown mode/);
  });

  it('emits nothing when the mode is unrecognised', () => {
    const sim = makeSim();
    // Bypass the setMode guard to exercise the defensive fall-through in emit().
    sim.mode = 'nonsense';
    sim.emit(0, 0);
    expect(sim.count).toBe(0);
  });

  it('updates hue and brush size through setters', () => {
    const sim = makeSim();
    sim.setHue(123);
    sim.setBrushSize(42);
    expect(sim.hue).toBe(123);
    expect(sim.brushSize).toBe(42);
  });

  it('advances state on step and eventually settles to empty', () => {
    const sim = makeSim({ mode: 'fireworks' });
    sim.emit(0, 0);
    expect(sim.count).toBeGreaterThan(0);
    for (let i = 0; i < 500; i++) sim.step();
    expect(sim.count).toBe(0);
  });

  it('clears all live objects', () => {
    const sim = makeSim({ mode: 'fireworks' });
    sim.emit(0, 0);
    sim.clear();
    expect(sim.count).toBe(0);
  });

  it('is deterministic given a seeded RNG', () => {
    const a = new Simulation({ rng: mulberry32(7), mode: 'fireworks' });
    const b = new Simulation({ rng: mulberry32(7), mode: 'fireworks' });
    a.emit(3, 4);
    b.emit(3, 4);
    expect(a.particles).toEqual(b.particles);
  });
});
