// src/numeric-max.ts
// Unsigned integer maxima and colour-channel maxima.
// Pattern: private `as const` source → NumericMax namespace → flat exports.
// No collision with src/limits.ts — MAX_INT_32 there is the SIGNED max (2147483647);
// MAX_UINT32 here is the UNSIGNED max (4294967295).
// Values verified by Node.js execution (2026-05-29).

// ===== NUMERIC MAX VALUES (private) =====
// CRITICAL: hardcoded literals only — property references widen the type to 'number'.
const NUMERIC_MAX_VALUES = {
  MAX_UINT8: 255, // 2^8 - 1
  MAX_UINT16: 65535, // 2^16 - 1
  MAX_UINT32: 4294967295, // 2^32 - 1
  RGB_MAX: 255, // max value of an 8-bit RGB channel
  ALPHA_MAX: 255, // max value of an 8-bit alpha channel
} as const;

// ===== NAMESPACE (public) =====
/** Unsigned integer and colour-channel maxima. */
export const NumericMax = { ...NUMERIC_MAX_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Max value of an unsigned 8-bit integer (2^8 − 1). Value: 255. */
export const MAX_UINT8 = NUMERIC_MAX_VALUES.MAX_UINT8; // type: 255
/** Max value of an unsigned 16-bit integer (2^16 − 1). Value: 65535. */
export const MAX_UINT16 = NUMERIC_MAX_VALUES.MAX_UINT16; // type: 65535
/** Max value of an unsigned 32-bit integer (2^32 − 1). Value: 4294967295. */
export const MAX_UINT32 = NUMERIC_MAX_VALUES.MAX_UINT32; // type: 4294967295
/** Max value of an 8-bit RGB channel. Value: 255. */
export const RGB_MAX = NUMERIC_MAX_VALUES.RGB_MAX; // type: 255
/** Max value of an 8-bit alpha channel. Value: 255. */
export const ALPHA_MAX = NUMERIC_MAX_VALUES.ALPHA_MAX; // type: 255
