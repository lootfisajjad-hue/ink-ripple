/**
 * CanvasRenderer — the only module that talks to a 2D canvas context. It reads
 * simulation state and paints it; it never mutates the simulation.
 *
 * The context is passed in, so tests can supply a lightweight mock to assert
 * that the right drawing calls happen.
 */

import { BACKGROUND, FADE_RGBA, RIPPLE } from './config.js';
import { hsla } from './color.js';
import { particleRadius } from './particles.js';

export class CanvasRenderer {
  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 0;
    this.height = 0;
  }

  /**
   * Record the logical (CSS-pixel) size of the drawing surface.
   * @param {number} width
   * @param {number} height
   */
  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  /** Paint the opaque background, wiping everything. */
  fillBackground() {
    this.ctx.fillStyle = BACKGROUND;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  /** Paint a translucent overlay so previous frames fade out over time. */
  fade() {
    this.ctx.fillStyle = FADE_RGBA;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  /**
   * @param {import('./ripples.js').Ripple[]} ripples
   */
  drawRipples(ripples) {
    const { ctx } = this;
    for (const r of ripples) {
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.strokeStyle = hsla(
        r.hue,
        RIPPLE.saturation,
        RIPPLE.lightness,
        r.alpha,
      );
      ctx.lineWidth = RIPPLE.lineWidth;
      ctx.stroke();
    }
  }

  /**
   * @param {import('./particles.js').Particle[]} particles
   */
  drawParticles(particles) {
    const { ctx } = this;
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, particleRadius(p), 0, Math.PI * 2);
      ctx.fillStyle = hsla(p.hue, 95, 65, p.life);
      ctx.fill();
    }
  }

  /**
   * Render one frame of the given simulation: fade, then draw the active mode.
   * @param {import('./simulation.js').Simulation} sim
   */
  render(sim) {
    this.fade();
    if (sim.mode === 'ripple') {
      this.drawRipples(sim.ripples);
    } else {
      this.drawParticles(sim.particles);
    }
  }
}
