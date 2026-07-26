/**
 * Colour helpers. Hues live on a 0..360 wheel and jitter is applied
 * symmetrically around a base hue, wrapping cleanly across the 0/360 seam.
 */

/**
 * Wrap any hue into the canonical [0, 360) range.
 * @param {number} hue
 * @returns {number}
 */
export function wrapHue(hue) {
  return ((hue % 360) + 360) % 360;
}

/**
 * Jitter a base hue by up to `±jitter/2`, using the supplied RNG.
 *
 * @param {number} baseHue - centre of the jitter window.
 * @param {number} jitter - full width of the jitter window in degrees.
 * @param {() => number} rng - random source returning [0, 1).
 * @returns {number} a wrapped hue in [0, 360).
 */
export function jitterHue(baseHue, jitter, rng) {
  return wrapHue(baseHue + rng() * jitter - jitter / 2);
}

/**
 * Build an `hsla(...)` colour string, clamping alpha to [0, 1].
 * @param {number} hue
 * @param {number} saturation - percentage 0..100.
 * @param {number} lightness - percentage 0..100.
 * @param {number} alpha - 0..1 (clamped).
 * @returns {string}
 */
export function hsla(hue, saturation, lightness, alpha) {
  const a = Math.min(Math.max(alpha, 0), 1);
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${a})`;
}
