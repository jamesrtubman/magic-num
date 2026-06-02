// src/angles.ts
// Angle / geometry magic numbers (degrees) + degree<->radian converters.
// Pattern: private `as const` source → Angles namespace (with helpers) → flat exports.
// CRITICAL: constant VALUES are hardcoded literals. Math.PI is used only inside
// helper function bodies, which is safe (does not widen any literal type).

// ===== ANGLE VALUES (private, degrees) =====
const ANGLE_VALUES = {
  FULL_CIRCLE_DEG: 360,
  HALF_CIRCLE_DEG: 180,
  QUARTER_CIRCLE_DEG: 90,
  THREE_QUARTER_CIRCLE_DEG: 270,
  RIGHT_ANGLE_DEG: 90,
} as const;

// ===== HELPERS (public) =====
// Exposed both as flat top-level functions and as members of Angles.
/** Convert degrees to radians. */
export function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** Convert radians to degrees. */
export function toDegrees(rad: number): number {
  return (rad * 180) / Math.PI;
}

// ===== NAMESPACE (public) =====
/** Angle constants (degrees) plus `toRadians` / `toDegrees` helpers. */
export const Angles = { ...ANGLE_VALUES, toRadians, toDegrees } as const;

// ===== FLAT EXPORTS — constants (public) =====
/** Degrees in a full circle. Value: 360. */
export const FULL_CIRCLE_DEG = ANGLE_VALUES.FULL_CIRCLE_DEG; // type: 360
/** Degrees in a half circle (straight angle). Value: 180. */
export const HALF_CIRCLE_DEG = ANGLE_VALUES.HALF_CIRCLE_DEG; // type: 180
/** Degrees in a quarter circle. Value: 90. */
export const QUARTER_CIRCLE_DEG = ANGLE_VALUES.QUARTER_CIRCLE_DEG; // type: 90
/** Degrees in three-quarters of a circle. Value: 270. */
export const THREE_QUARTER_CIRCLE_DEG = ANGLE_VALUES.THREE_QUARTER_CIRCLE_DEG; // type: 270
/** A right angle, in degrees. Value: 90. */
export const RIGHT_ANGLE_DEG = ANGLE_VALUES.RIGHT_ANGLE_DEG; // type: 90
