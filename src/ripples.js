/**
 * Ripple mode: expanding rings that grow and fade out.
 *
 * All functions here are pure — they take state and an RNG and return new
 * state — so the physics can be tested without a canvas or a browser.
 */

import { RIPPLE } from './config.js';
import { jitterHue } from './color.js';

/**
 * @typedef {Object} Ripple
 * @property {number} x
 * @property {number} y
 * @property {number} r - current radius.
 * @property {number} maxR - radius at which the ring is considered spent.
 * @property {number} hue
 * @property {number} alpha
 */

/**
 * Create a new ripple at (x, y).
 *
 * @param {number} x
 * @param {number} y
 * @param {number} baseHue
 * @param {number} brushSize
 * @param {() => number} rng
 * @returns {Ripple}
 */
export function createRipple(x, y, baseHue, brushSize, rng) {
  return {
    x,
    y,
    r: RIPPLE.startRadius,
    maxR: brushSize * RIPPLE.radiusFactor + rng() * RIPPLE.radiusJitter,
    hue: jitterHue(baseHue, RIPPLE.hueJitter, rng),
    alpha: RIPPLE.startAlpha,
  };
}

/**
 * Advance a single ripple by one frame (mutates and returns it).
 * @param {Ripple} ripple
 * @returns {Ripple}
 */
export function stepRipple(ripple) {
  ripple.r += RIPPLE.growthPerFrame;
  ripple.alpha -= RIPPLE.fadePerFrame;
  return ripple;
}

/**
 * True while a ripple should still be drawn.
 * @param {Ripple} ripple
 * @returns {boolean}
 */
export function isRippleAlive(ripple) {
  return ripple.alpha > 0 && ripple.r < ripple.maxR + RIPPLE.overshoot;
}

/**
 * Advance every ripple one frame and drop the dead ones.
 * @param {Ripple[]} ripples
 * @returns {Ripple[]} the surviving ripples.
 */
export function stepRipples(ripples) {
  return ripples.map(stepRipple).filter(isRippleAlive);
}
