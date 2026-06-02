// src/limits.ts
// Source: pattern follows Phase 2 http.ts — private as-const source → namespace → flat exports
// Numeric values verified by Node.js execution (2026-05-07)
// MAX_EMAIL_LENGTH: RFC 5321 §4.5.3.1.3 (path max 256 incl angle brackets → 254)
// MAX_URL_LENGTH: 2048 is a widely-used practical convention (no RFC defines this)

// ===== NUMERIC LIMIT VALUES (private) =====
// CRITICAL: hardcoded literals only — property references widen the type to 'number'
const LIMIT_VALUES = {
  MAX_SAFE_INT: 9007199254740991,   // 2^53 - 1
  MIN_SAFE_INT: -9007199254740991,  // -(2^53 - 1)
  MAX_INT_32: 2147483647,           // 2^31 - 1
  MIN_INT_32: -2147483648,          // -(2^31)
  ZERO: 0,
} as const;

// ===== BYTE SIZE VALUES (private) =====
const BYTE_VALUES = {
  ONE_KB: 1024,
  ONE_MB: 1048576,    // 1024 * 1024
  ONE_GB: 1073741824, // 1024 * 1024 * 1024
} as const;

// ===== PAGINATION AND STRING LENGTH VALUES (private) =====
const PAGINATION_VALUES = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MAX_EMAIL_LENGTH: 254,
  MAX_URL_LENGTH: 2048,
} as const;

// ===== BYTE FORMATTERS / CONVERTERS (public) =====
// Pure functions, exported flat and attached to the Bytes namespace (mirrors math.ts).
/** Kilobytes → bytes. */
export function kbToBytes(kb: number): number {
  return kb * 1024;
}
/** Megabytes → bytes. */
export function mbToBytes(mb: number): number {
  return mb * 1048576;
}
/** Gigabytes → bytes. */
export function gbToBytes(gb: number): number {
  return gb * 1073741824;
}
/** Format a byte count as a human-readable string, e.g. `1572864` → `"1.5 MB"`. */
export function formatBytes(n: number, decimals = 1): string {
  if (n === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const exp = Math.min(Math.floor(Math.log(Math.abs(n)) / Math.log(1024)), units.length - 1);
  const value = n / Math.pow(1024, exp);
  return `${parseFloat(value.toFixed(decimals))} ${units[exp]}`;
}

// ===== NAMESPACES (public) =====
/** Integer limits (safe-int and 32-bit signed bounds, zero). */
export const Limits = { ...LIMIT_VALUES } as const;
/** Byte-size constants (KB/MB/GB) plus `kbToBytes`/`mbToBytes`/`gbToBytes`/`formatBytes` helpers. */
export const Bytes = { ...BYTE_VALUES, kbToBytes, mbToBytes, gbToBytes, formatBytes } as const;
/** Pagination defaults and string-length limits. */
export const Pagination = { ...PAGINATION_VALUES } as const;

// ===== FLAT EXPORTS — numeric limits (public) =====
/** `Number.MAX_SAFE_INTEGER` (2^53 − 1). */
export const MAX_SAFE_INT = LIMIT_VALUES.MAX_SAFE_INT;  // type: 9007199254740991
/** `Number.MIN_SAFE_INTEGER` (−(2^53 − 1)). */
export const MIN_SAFE_INT = LIMIT_VALUES.MIN_SAFE_INT;  // type: -9007199254740991
/** Max signed 32-bit integer (2^31 − 1). */
export const MAX_INT_32 = LIMIT_VALUES.MAX_INT_32;      // type: 2147483647
/** Min signed 32-bit integer (−2^31). */
export const MIN_INT_32 = LIMIT_VALUES.MIN_INT_32;      // type: -2147483648
/** Zero. Value: 0. */
export const ZERO = LIMIT_VALUES.ZERO;                  // type: 0

// ===== FLAT EXPORTS — byte sizes (public) =====
/** One kilobyte, in bytes. Value: 1024. */
export const ONE_KB = BYTE_VALUES.ONE_KB;  // type: 1024
/** One megabyte, in bytes. Value: 1048576. */
export const ONE_MB = BYTE_VALUES.ONE_MB;  // type: 1048576
/** One gigabyte, in bytes. Value: 1073741824. */
export const ONE_GB = BYTE_VALUES.ONE_GB;  // type: 1073741824

// ===== FLAT EXPORTS — pagination and string lengths (public) =====
/** Common default page size. Value: 20. */
export const DEFAULT_PAGE_SIZE = PAGINATION_VALUES.DEFAULT_PAGE_SIZE;  // type: 20
/** Common max page size. Value: 100. */
export const MAX_PAGE_SIZE = PAGINATION_VALUES.MAX_PAGE_SIZE;           // type: 100
/** Max email length (RFC 5321). Value: 254. */
export const MAX_EMAIL_LENGTH = PAGINATION_VALUES.MAX_EMAIL_LENGTH;     // type: 254
/** Practical max URL length convention. Value: 2048. */
export const MAX_URL_LENGTH = PAGINATION_VALUES.MAX_URL_LENGTH;         // type: 2048
