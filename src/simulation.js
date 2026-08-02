/**
 * Simulation — the mutable state container that the renderer draws and the
 * input layer feeds. It owns the ripple and particle arrays and knows how to
 * emit new strokes based on the current mode, hue, and brush size.
 *
 * It has no dependency on the DOM or canvas, so it can be driven entirely from
 * tests.
 */

import { DEFAULTS, MODES } from './config.js';
import { createRipple, stepRipples } from './ripples.js';
import {
  createTrailParticles,
  createFirework,
  stepParticles,
} from './particles.js';
import { randomRng } from './rng.js';

export class Simulation {
  /**
   * @param {Object} [options]
   * @param {() => number} [options.rng] - random source; defaults to a runtime RNG.
   * @param {string} [options.mode]
   * @param {number} [options.hue]
   * @param {number} [options.brushSize]
   */
  constructor(options = {}) {
    this.rng = options.rng ?? randomRng();
    this.mode = options.mode ?? DEFAULTS.mode;
    this.hue = options.hue ?? DEFAULTS.hue;
    this.brushSize = options.brushSize ?? DEFAULTS.brushSize;

    /** @type {import('./ripples.js').Ripple[]} */
    this.ripples = [];
    /** @type {import('./particles.js').Particle[]} */
    this.particles = [];
  }

  /**
   * @param {string} mode - one of {@link MODES}.
   */
  setMode(mode) {
    if (!MODES.includes(mode)) {
      throw new Error(`Unknown mode: ${mode}`);
    }
    this.mode = mode;
  }

  /** @param {number} hue */
  setHue(hue) {
    this.hue = hue;
  }

  /** @param {number} brushSize */
  setBrushSize(brushSize) {
    this.brushSize = brushSize;
  }

  /**
   * Emit a stroke at (x, y) with the given pointer velocity, according to the
   * current mode.
   *
   * @param {number} x
   * @param {number} y
   * @param {number} [vx=0]
   * @param {number} [vy=0]
   */
  emit(x, y, vx = 0, vy = 0) {
    if (this.mode === 'ripple') {
      this.ripples.push(createRipple(x, y, this.hue, this.brushSize, this.rng));
    } else if (this.mode === 'trail') {
      this.particles.push(
        ...createTrailParticles(
          x,
          y,
          vx,
          vy,
          this.hue,
          this.brushSize,
          this.rng,
        ),
      );
    } else if (this.mode === 'fireworks') {
      this.particles.push(
        ...createFirework(x, y, this.hue, this.brushSize, this.rng),
      );
    }
  }

  /** Advance the whole simulation by one frame. */
  step() {
    this.ripples = stepRipples(this.ripples);
    this.particles = stepParticles(this.particles);
  }

  /** Remove all live ripples and particles. */
  clear() {
    this.ripples = [];
    this.particles = [];
  }

  /** Total number of live objects — handy for tests and debugging. */
  get count() {
    return this.ripples.length + this.particles.length;
  }
}
