/**
 * Central tuning constants for the Ink Ripple simulation.
 *
 * Keeping these in one place makes the physics easy to reason about and lets
 * tests assert against named values instead of magic numbers scattered around.
 */

export const BACKGROUND = '#0b0c10';

/** Per-frame overlay used to fade old strokes into the background. */
export const FADE_RGBA = 'rgba(11, 12, 16, 0.12)';

export const DEFAULTS = {
  mode: 'ripple',
  hue: 200,
  brushSize: 18,
};

export const MODES = ['ripple', 'trail', 'fireworks'];

export const RIPPLE = {
  startRadius: 2,
  growthPerFrame: 2.4,
  fadePerFrame: 0.012,
  startAlpha: 0.9,
  /** maxR = brushSize * radiusFactor + random(0..radiusJitter) */
  radiusFactor: 4,
  radiusJitter: 40,
  /** a ripple is kept until its radius exceeds maxR + overshoot */
  overshoot: 60,
  hueJitter: 60,
  lineWidth: 2,
  saturation: 90,
  lightness: 65,
};

export const TRAIL = {
  countPerEmit: 3,
  velocityInherit: 0.2,
  velocityJitter: 1.5,
  drag: 0.94,
  fadePerFrame: 0.02,
  sizeMinFactor: 0.3,
  sizeJitterFactor: 0.7,
  hueJitter: 50,
  saturation: 95,
  lightness: 65,
};

export const FIREWORK = {
  count: 40,
  speedBase: 2,
  speedJitter: 3,
  speedMinFactor: 0.5,
  speedJitterFactor: 0.7,
  angleJitter: 0.2,
  drag: 0.99,
  gravity: 0.03,
  fadePerFrame: 0.014,
  sizeBaseFactor: 0.3,
  sizeJitter: 3,
  hueJitter: 80,
  saturation: 95,
  lightness: 65,
};
