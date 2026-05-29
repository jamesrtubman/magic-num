// src/react.ts
// Default magic numbers from common React-ecosystem libraries.
// React core exposes no stable public numeric defaults, so it is intentionally excluded.
// Pattern: one private `as const` source per library → library namespace →
// library-prefixed flat exports (RTL_*, RQ_*) to keep barrel flat names globally unique.
// Sources (defaults as of 2026-05-29):
//   React Testing Library / dom-testing-library config:
//     asyncUtilTimeout 1000ms, waitFor poll interval 50ms
//     (testing-library.com/docs/dom-testing-library/api-configuration)
//   TanStack React Query v5:
//     gcTime 300000ms (5 min), staleTime 0, retry 3, retryDelay base 1000ms capped at 30000ms
//     (tanstack.com/query/v5/docs/framework/react/guides/important-defaults)
//     NOTE: v5 renamed v4's `cacheTime` to `gcTime`.

// ===== REACT TESTING LIBRARY DEFAULTS (private) =====
const RTL_VALUES = {
  ASYNC_UTIL_TIMEOUT_MS: 1000,
  POLL_INTERVAL_MS: 50,
} as const;

// ===== TANSTACK REACT QUERY v5 DEFAULTS (private) =====
const REACT_QUERY_VALUES = {
  GC_TIME_MS: 300000, // 5 minutes
  STALE_TIME_MS: 0,
  DEFAULT_RETRY: 3,
  RETRY_DELAY_BASE_MS: 1000,
  RETRY_DELAY_MAX_MS: 30000,
} as const;

// ===== NAMESPACES (public) =====
export const ReactTestingLibrary = { ...RTL_VALUES } as const;
export const ReactQuery = { ...REACT_QUERY_VALUES } as const;

// ===== FLAT EXPORTS — React Testing Library (public) =====
export const RTL_ASYNC_UTIL_TIMEOUT_MS = RTL_VALUES.ASYNC_UTIL_TIMEOUT_MS; // type: 1000
export const RTL_POLL_INTERVAL_MS = RTL_VALUES.POLL_INTERVAL_MS; // type: 50

// ===== FLAT EXPORTS — TanStack React Query (public) =====
export const RQ_GC_TIME_MS = REACT_QUERY_VALUES.GC_TIME_MS; // type: 300000
export const RQ_STALE_TIME_MS = REACT_QUERY_VALUES.STALE_TIME_MS; // type: 0
export const RQ_DEFAULT_RETRY = REACT_QUERY_VALUES.DEFAULT_RETRY; // type: 3
export const RQ_RETRY_DELAY_BASE_MS = REACT_QUERY_VALUES.RETRY_DELAY_BASE_MS; // type: 1000
export const RQ_RETRY_DELAY_MAX_MS = REACT_QUERY_VALUES.RETRY_DELAY_MAX_MS; // type: 30000
