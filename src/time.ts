// src/time.ts
// Source: pattern follows Phase 2 http.ts — private as-const source → namespace → flat exports
// Numeric values verified by Node.js execution (2026-05-07)

// ===== MILLISECOND TIME VALUES (private) =====
const TIME_MS_VALUES = {
  ONE_SECOND: 1000,
  ONE_MINUTE: 60000,      // 60 * 1000
  ONE_HOUR: 3600000,      // 60 * 60 * 1000
  ONE_DAY: 86400000,      // 24 * 60 * 60 * 1000
  ONE_WEEK: 604800000,    // 7 * 24 * 60 * 60 * 1000
} as const;

// ===== SECOND TIME VALUES (private) =====
const TIME_S_VALUES = {
  ONE_MINUTE: 60,
  ONE_HOUR: 3600,         // 60 * 60
  ONE_DAY: 86400,         // 24 * 60 * 60
  ONE_WEEK: 604800,       // 7 * 24 * 60 * 60
} as const;

// ===== NAMESPACES (public) =====
/** Common durations expressed in milliseconds. */
export const TimeMs = { ...TIME_MS_VALUES } as const;
/** Common durations expressed in seconds. */
export const TimeS = { ...TIME_S_VALUES } as const;

// ===== FLAT EXPORTS — milliseconds (public) =====
/** One second, in ms. Value: 1000. */
export const ONE_SECOND_MS = TIME_MS_VALUES.ONE_SECOND;  // type: 1000
/** One minute, in ms. Value: 60000. */
export const ONE_MINUTE_MS = TIME_MS_VALUES.ONE_MINUTE;  // type: 60000
/** One hour, in ms. Value: 3600000. */
export const ONE_HOUR_MS   = TIME_MS_VALUES.ONE_HOUR;    // type: 3600000
/** One day, in ms. Value: 86400000. */
export const ONE_DAY_MS    = TIME_MS_VALUES.ONE_DAY;     // type: 86400000
/** One week, in ms. Value: 604800000. */
export const ONE_WEEK_MS   = TIME_MS_VALUES.ONE_WEEK;    // type: 604800000

// ===== FLAT EXPORTS — seconds (public) =====
/** One minute, in seconds. Value: 60. */
export const ONE_MINUTE_S = TIME_S_VALUES.ONE_MINUTE;    // type: 60
/** One hour, in seconds. Value: 3600. */
export const ONE_HOUR_S   = TIME_S_VALUES.ONE_HOUR;      // type: 3600
/** One day, in seconds. Value: 86400. */
export const ONE_DAY_S    = TIME_S_VALUES.ONE_DAY;       // type: 86400
/** One week, in seconds. Value: 604800. */
export const ONE_WEEK_S   = TIME_S_VALUES.ONE_WEEK;      // type: 604800

// ===== TIME CONVERTERS (public) =====
// Pure functions, exported flat and collected in the TimeConvert namespace.
// Kept separate from TimeMs/TimeS so those stay value-only (stable key counts).
/** Seconds → milliseconds. */
export function secondsToMs(s: number): number {
  return s * 1000;
}
/** Milliseconds → seconds. */
export function msToSeconds(ms: number): number {
  return ms / 1000;
}
/** Minutes → milliseconds. */
export function minutesToMs(min: number): number {
  return min * 60000;
}
/** Hours → milliseconds. */
export function hoursToMs(h: number): number {
  return h * 3600000;
}
/** Milliseconds → minutes. */
export function msToMinutes(ms: number): number {
  return ms / 60000;
}

// ===== NAMESPACE — converters (public) =====
/** Time-unit conversion helpers. */
export const TimeConvert = {
  secondsToMs,
  msToSeconds,
  minutesToMs,
  hoursToMs,
  msToMinutes,
} as const;
