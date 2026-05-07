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

// ===== NAMESPACES (public) =====
export const Limits = { ...LIMIT_VALUES } as const;
export const Bytes = { ...BYTE_VALUES } as const;
export const Pagination = { ...PAGINATION_VALUES } as const;

// ===== FLAT EXPORTS — numeric limits (public) =====
export const MAX_SAFE_INT = LIMIT_VALUES.MAX_SAFE_INT;  // type: 9007199254740991
export const MIN_SAFE_INT = LIMIT_VALUES.MIN_SAFE_INT;  // type: -9007199254740991
export const MAX_INT_32 = LIMIT_VALUES.MAX_INT_32;      // type: 2147483647
export const MIN_INT_32 = LIMIT_VALUES.MIN_INT_32;      // type: -2147483648
export const ZERO = LIMIT_VALUES.ZERO;                  // type: 0

// ===== FLAT EXPORTS — byte sizes (public) =====
export const ONE_KB = BYTE_VALUES.ONE_KB;  // type: 1024
export const ONE_MB = BYTE_VALUES.ONE_MB;  // type: 1048576
export const ONE_GB = BYTE_VALUES.ONE_GB;  // type: 1073741824

// ===== FLAT EXPORTS — pagination and string lengths (public) =====
export const DEFAULT_PAGE_SIZE = PAGINATION_VALUES.DEFAULT_PAGE_SIZE;  // type: 20
export const MAX_PAGE_SIZE = PAGINATION_VALUES.MAX_PAGE_SIZE;           // type: 100
export const MAX_EMAIL_LENGTH = PAGINATION_VALUES.MAX_EMAIL_LENGTH;     // type: 254
export const MAX_URL_LENGTH = PAGINATION_VALUES.MAX_URL_LENGTH;         // type: 2048
