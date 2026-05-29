// src/math.ts
// Mathematical constants and small helper functions.
// Pattern: private `as const` source → MathConst namespace → flat exports.
// CRITICAL: values are HARDCODED literals (not Math.PI etc.) — referencing the
// global Math object widens the type to `number` and breaks literal-type narrowing.
// Namespace is named `MathConst` (not `Math`) to avoid shadowing the JS global.
// Digits verified against Node.js Math.* (2026-05-29).

// ===== MATH CONSTANT VALUES (private) =====
const MATH_VALUES = {
  PI: 3.141592653589793,
  TAU: 6.283185307179586,
  E: 2.718281828459045,
  GOLDEN_RATIO: 1.618033988749895,
  SQRT_2: 1.4142135623730951,
  SQRT_1_2: 0.7071067811865476,
  LN_2: 0.6931471805599453,
  LN_10: 2.302585092994046,
  HALF: 0.5,
  QUARTER: 0.25,
  THIRD: 0.3333333333333333,
  TWO_THIRDS: 0.6666666666666666,
  THREE_QUARTERS: 0.75,
  HUNDRED_PERCENT: 100,
} as const;

// ===== MATH HELPERS (public) =====
// Exposed both as flat top-level functions and as members of MathConst.
export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

export function isBetween(n: number, min: number, max: number): boolean {
  return n >= min && n <= max; // inclusive
}

export function percentOf(n: number, pct: number): number {
  return (n * pct) / 100;
}

// ===== NAMESPACE (public) =====
export const MathConst = { ...MATH_VALUES, clamp, isBetween, percentOf } as const;

// ===== FLAT EXPORTS — constants (public) =====
export const PI = MATH_VALUES.PI; // type: 3.141592653589793
export const TAU = MATH_VALUES.TAU; // type: 6.283185307179586
export const E = MATH_VALUES.E; // type: 2.718281828459045
export const GOLDEN_RATIO = MATH_VALUES.GOLDEN_RATIO; // type: 1.618033988749895
export const SQRT_2 = MATH_VALUES.SQRT_2; // type: 1.4142135623730951
export const SQRT_1_2 = MATH_VALUES.SQRT_1_2; // type: 0.7071067811865476
export const LN_2 = MATH_VALUES.LN_2; // type: 0.6931471805599453
export const LN_10 = MATH_VALUES.LN_10; // type: 2.302585092994046
export const HALF = MATH_VALUES.HALF; // type: 0.5
export const QUARTER = MATH_VALUES.QUARTER; // type: 0.25
export const THIRD = MATH_VALUES.THIRD; // type: 0.3333333333333333
export const TWO_THIRDS = MATH_VALUES.TWO_THIRDS; // type: 0.6666666666666666
export const THREE_QUARTERS = MATH_VALUES.THREE_QUARTERS; // type: 0.75
export const HUNDRED_PERCENT = MATH_VALUES.HUNDRED_PERCENT; // type: 100
