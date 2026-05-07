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
export const TimeMs = { ...TIME_MS_VALUES } as const;
export const TimeS = { ...TIME_S_VALUES } as const;

// ===== FLAT EXPORTS — milliseconds (public) =====
export const ONE_SECOND_MS = TIME_MS_VALUES.ONE_SECOND;  // type: 1000
export const ONE_MINUTE_MS = TIME_MS_VALUES.ONE_MINUTE;  // type: 60000
export const ONE_HOUR_MS   = TIME_MS_VALUES.ONE_HOUR;    // type: 3600000
export const ONE_DAY_MS    = TIME_MS_VALUES.ONE_DAY;     // type: 86400000
export const ONE_WEEK_MS   = TIME_MS_VALUES.ONE_WEEK;    // type: 604800000

// ===== FLAT EXPORTS — seconds (public) =====
export const ONE_MINUTE_S = TIME_S_VALUES.ONE_MINUTE;    // type: 60
export const ONE_HOUR_S   = TIME_S_VALUES.ONE_HOUR;      // type: 3600
export const ONE_DAY_S    = TIME_S_VALUES.ONE_DAY;       // type: 86400
export const ONE_WEEK_S   = TIME_S_VALUES.ONE_WEEK;      // type: 604800
