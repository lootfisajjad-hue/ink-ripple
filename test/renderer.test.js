import { describe, it, expect, vi } from 'vitest';
import { CanvasRenderer } from '../src/renderer.js';
import { Simulation } from '../src/simulation.js';
import { mulberry32 } from '../src/rng.js';
import { BACKGROUND, FADE_RGBA } from '../src/config.js';

/** A minimal stand-in for CanvasRenderingContext2D that records calls. */
function mockCtx() {
  return {
    fillStyle: '',
    strokeStyle: '',
    lineWidth: 0,
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    stroke: vi.fn(),
    fill: vi.fn(),
  };
}

describe('CanvasRenderer', () => {
  it('fills the background with the opaque colour', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    r.setSize(100, 50);
    r.fillBackground();
    expect(ctx.fillStyle).toBe(BACKGROUND);
    expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 100, 50);
  });

  it('fades with the translucent overlay', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    r.setSize(10, 10);
    r.fade();
    expect(ctx.fillStyle).toBe(FADE_RGBA);
  });

  it('draws one stroke per ripple', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    const ripples = [
      { x: 0, y: 0, r: 5, maxR: 50, hue: 200, alpha: 0.8 },
      { x: 1, y: 1, r: 6, maxR: 50, hue: 210, alpha: 0.7 },
    ];
    r.drawRipples(ripples);
    expect(ctx.arc).toHaveBeenCalledTimes(2);
    expect(ctx.stroke).toHaveBeenCalledTimes(2);
  });

  it('draws one fill per particle', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    const particles = [
      { x: 0, y: 0, size: 5, life: 1, hue: 200 },
      { x: 1, y: 1, size: 5, life: 0.5, hue: 210 },
    ];
    r.drawParticles(particles);
    expect(ctx.arc).toHaveBeenCalledTimes(2);
    expect(ctx.fill).toHaveBeenCalledTimes(2);
  });

  it('render() draws ripples in ripple mode and fades first', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    const sim = new Simulation({ rng: mulberry32(1), mode: 'ripple' });
    sim.emit(5, 5);
    r.render(sim);
    expect(ctx.fillStyle).toBe(FADE_RGBA);
    expect(ctx.stroke).toHaveBeenCalledTimes(1);
    expect(ctx.fill).not.toHaveBeenCalled();
  });

  it('render() draws particles in particle modes', () => {
    const ctx = mockCtx();
    const r = new CanvasRenderer(ctx);
    const sim = new Simulation({ rng: mulberry32(1), mode: 'fireworks' });
    sim.emit(5, 5);
    r.render(sim);
    expect(ctx.fill).toHaveBeenCalled();
    expect(ctx.stroke).not.toHaveBeenCalled();
  });
});
