/**
 * A tiny, fast, seedable pseudo-random number generator (mulberry32).
 *
 * The simulation takes an RNG as a dependency instead of calling `Math.random`
 * directly. In the browser we seed it from `Math.random`, but tests can pass a
 * fixed seed to get fully deterministic ripples, trails, and fireworks.
 *
 * @param {number} seed - 32-bit unsigned integer seed.
 * @returns {() => number} a function returning floats in the half-open range [0, 1).
 */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Convenience RNG seeded from `Math.random` for non-deterministic runtime use.
 * @returns {() => number}
 */
export function randomRng() {
  return mulberry32((Math.random() * 0xffffffff) >>> 0);
}
