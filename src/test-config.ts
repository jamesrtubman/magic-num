// src/test-config.ts
// Default magic numbers baked into common test frameworks (timeouts, viewports).
// Pattern: one private `as const` source per framework → framework namespace →
// framework-prefixed flat exports (frameworks share values like 5000, so prefixes
// keep barrel-level flat names globally unique).
// Sources (defaults as of 2026-05-29):
//   Jest:       testTimeout default 5000ms (jestjs.io/docs/configuration#testtimeout-number)
//   Vitest:     testTimeout 5000ms, hookTimeout 10000ms (vitest.dev/config)
//   Playwright: timeout 30000ms, expect timeout 5000ms, viewport 1280x720 (playwright.dev/docs/test-timeouts, test-use-options)
//   Cypress:    defaultCommandTimeout 4000, pageLoadTimeout 60000, requestTimeout 5000,
//               responseTimeout 30000, viewport 1000x660 (docs.cypress.io/app/references/configuration)

// ===== JEST DEFAULTS (private) =====
const JEST_VALUES = {
  TEST_TIMEOUT_MS: 5000,
} as const;

// ===== VITEST DEFAULTS (private) =====
const VITEST_VALUES = {
  TEST_TIMEOUT_MS: 5000,
  HOOK_TIMEOUT_MS: 10000,
} as const;

// ===== PLAYWRIGHT DEFAULTS (private) =====
const PLAYWRIGHT_VALUES = {
  TIMEOUT_MS: 30000,
  EXPECT_TIMEOUT_MS: 5000,
  VIEWPORT_WIDTH: 1280,
  VIEWPORT_HEIGHT: 720,
} as const;

// ===== CYPRESS DEFAULTS (private) =====
const CYPRESS_VALUES = {
  DEFAULT_COMMAND_TIMEOUT_MS: 4000,
  PAGE_LOAD_TIMEOUT_MS: 60000,
  REQUEST_TIMEOUT_MS: 5000,
  RESPONSE_TIMEOUT_MS: 30000,
  VIEWPORT_WIDTH: 1000,
  VIEWPORT_HEIGHT: 660,
} as const;

// ===== NAMESPACES (public) =====
export const JestDefaults = { ...JEST_VALUES } as const;
export const VitestDefaults = { ...VITEST_VALUES } as const;
export const PlaywrightDefaults = { ...PLAYWRIGHT_VALUES } as const;
export const CypressDefaults = { ...CYPRESS_VALUES } as const;

// ===== FLAT EXPORTS — Jest (public) =====
export const JEST_TEST_TIMEOUT_MS = JEST_VALUES.TEST_TIMEOUT_MS; // type: 5000

// ===== FLAT EXPORTS — Vitest (public) =====
export const VITEST_TEST_TIMEOUT_MS = VITEST_VALUES.TEST_TIMEOUT_MS; // type: 5000
export const VITEST_HOOK_TIMEOUT_MS = VITEST_VALUES.HOOK_TIMEOUT_MS; // type: 10000

// ===== FLAT EXPORTS — Playwright (public) =====
export const PLAYWRIGHT_TIMEOUT_MS = PLAYWRIGHT_VALUES.TIMEOUT_MS; // type: 30000
export const PLAYWRIGHT_EXPECT_TIMEOUT_MS = PLAYWRIGHT_VALUES.EXPECT_TIMEOUT_MS; // type: 5000
export const PLAYWRIGHT_VIEWPORT_WIDTH = PLAYWRIGHT_VALUES.VIEWPORT_WIDTH; // type: 1280
export const PLAYWRIGHT_VIEWPORT_HEIGHT = PLAYWRIGHT_VALUES.VIEWPORT_HEIGHT; // type: 720

// ===== FLAT EXPORTS — Cypress (public) =====
export const CYPRESS_DEFAULT_COMMAND_TIMEOUT_MS = CYPRESS_VALUES.DEFAULT_COMMAND_TIMEOUT_MS; // type: 4000
export const CYPRESS_PAGE_LOAD_TIMEOUT_MS = CYPRESS_VALUES.PAGE_LOAD_TIMEOUT_MS; // type: 60000
export const CYPRESS_REQUEST_TIMEOUT_MS = CYPRESS_VALUES.REQUEST_TIMEOUT_MS; // type: 5000
export const CYPRESS_RESPONSE_TIMEOUT_MS = CYPRESS_VALUES.RESPONSE_TIMEOUT_MS; // type: 30000
export const CYPRESS_VIEWPORT_WIDTH = CYPRESS_VALUES.VIEWPORT_WIDTH; // type: 1000
export const CYPRESS_VIEWPORT_HEIGHT = CYPRESS_VALUES.VIEWPORT_HEIGHT; // type: 660
