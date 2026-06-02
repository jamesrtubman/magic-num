// src/color.ts
// Color magic numbers for RGB/RGBA/HSL work and hex parsing.
// Pattern: private `as const` source → Color namespace → flat exports.
// CRITICAL: hardcoded literals only — preserves literal-type narrowing.
// Flat names use RGB_MIN / MAX_PERCENT (not ZERO / HUNDRED_PERCENT) to avoid
// barrel name collisions with limits.ts and math.ts.

// ===== COLOR VALUES (private) =====
const COLOR_VALUES = {
  RGB_MIN: 0,
  RGB_MAX: 255,
  RGB_CHANNELS: 3,
  RGBA_CHANNELS: 4,
  ALPHA_TRANSPARENT: 0,
  ALPHA_OPAQUE: 1,
  HEX_RADIX: 16,
  MAX_HUE: 360,
  MAX_SATURATION: 100,
  MAX_LIGHTNESS: 100,
  MAX_PERCENT: 100,
} as const;

// ===== NAMESPACE (public) =====
/** Color constants for RGB/RGBA/HSL ranges and hex parsing. */
export const Color = { ...COLOR_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Minimum value of an 8-bit RGB channel. Value: 0. */
export const RGB_MIN = COLOR_VALUES.RGB_MIN; // type: 0
// NOTE: RGB_MAX (255) is exported flat by numeric-max.ts. To avoid a barrel
// name collision it is NOT re-exported here — use `Color.RGB_MAX` or the flat
// `RGB_MAX` from numeric-max (same value).
/** Number of channels in an RGB color. Value: 3. */
export const RGB_CHANNELS = COLOR_VALUES.RGB_CHANNELS; // type: 3
/** Number of channels in an RGBA color. Value: 4. */
export const RGBA_CHANNELS = COLOR_VALUES.RGBA_CHANNELS; // type: 4
/** Fully transparent alpha. Value: 0. */
export const ALPHA_TRANSPARENT = COLOR_VALUES.ALPHA_TRANSPARENT; // type: 0
/** Fully opaque alpha. Value: 1. */
export const ALPHA_OPAQUE = COLOR_VALUES.ALPHA_OPAQUE; // type: 1
/** Radix for parsing/formatting hex color strings. Value: 16. */
export const HEX_RADIX = COLOR_VALUES.HEX_RADIX; // type: 16
/** Maximum HSL hue, in degrees. Value: 360. */
export const MAX_HUE = COLOR_VALUES.MAX_HUE; // type: 360
/** Maximum HSL saturation, in percent. Value: 100. */
export const MAX_SATURATION = COLOR_VALUES.MAX_SATURATION; // type: 100
/** Maximum HSL lightness, in percent. Value: 100. */
export const MAX_LIGHTNESS = COLOR_VALUES.MAX_LIGHTNESS; // type: 100
/** Maximum percent value. Value: 100. */
export const MAX_PERCENT = COLOR_VALUES.MAX_PERCENT; // type: 100
