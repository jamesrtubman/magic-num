// tests/test-config.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  JEST_TEST_TIMEOUT_MS,
  VITEST_TEST_TIMEOUT_MS, VITEST_HOOK_TIMEOUT_MS,
  PLAYWRIGHT_TIMEOUT_MS, PLAYWRIGHT_EXPECT_TIMEOUT_MS,
  PLAYWRIGHT_VIEWPORT_WIDTH, PLAYWRIGHT_VIEWPORT_HEIGHT,
  CYPRESS_DEFAULT_COMMAND_TIMEOUT_MS, CYPRESS_PAGE_LOAD_TIMEOUT_MS,
  CYPRESS_REQUEST_TIMEOUT_MS, CYPRESS_RESPONSE_TIMEOUT_MS,
  CYPRESS_VIEWPORT_WIDTH, CYPRESS_VIEWPORT_HEIGHT,
  JestDefaults, VitestDefaults, PlaywrightDefaults, CypressDefaults,
} from '../dist/index.js'

describe('Jest defaults', () => {
  it('JEST_TEST_TIMEOUT_MS === 5000', () => expect(JEST_TEST_TIMEOUT_MS).toBe(5000))
  it('JestDefaults.TEST_TIMEOUT_MS === 5000', () => expect(JestDefaults.TEST_TIMEOUT_MS).toBe(5000))
  it('JestDefaults exposes exactly 1 key', () => expect(Object.keys(JestDefaults)).toHaveLength(1))
})

describe('Vitest defaults', () => {
  it('VITEST_TEST_TIMEOUT_MS === 5000', () => expect(VITEST_TEST_TIMEOUT_MS).toBe(5000))
  it('VITEST_HOOK_TIMEOUT_MS === 10000', () => expect(VITEST_HOOK_TIMEOUT_MS).toBe(10000))
  it('VitestDefaults exposes exactly 2 keys', () => expect(Object.keys(VitestDefaults)).toHaveLength(2))
})

describe('Playwright defaults', () => {
  it('PLAYWRIGHT_TIMEOUT_MS === 30000', () => expect(PLAYWRIGHT_TIMEOUT_MS).toBe(30000))
  it('PLAYWRIGHT_EXPECT_TIMEOUT_MS === 5000', () => expect(PLAYWRIGHT_EXPECT_TIMEOUT_MS).toBe(5000))
  it('PLAYWRIGHT_VIEWPORT_WIDTH === 1280', () => expect(PLAYWRIGHT_VIEWPORT_WIDTH).toBe(1280))
  it('PLAYWRIGHT_VIEWPORT_HEIGHT === 720', () => expect(PLAYWRIGHT_VIEWPORT_HEIGHT).toBe(720))
  it('PlaywrightDefaults exposes exactly 4 keys', () => expect(Object.keys(PlaywrightDefaults)).toHaveLength(4))
})

describe('Cypress defaults', () => {
  it('CYPRESS_DEFAULT_COMMAND_TIMEOUT_MS === 4000', () => expect(CYPRESS_DEFAULT_COMMAND_TIMEOUT_MS).toBe(4000))
  it('CYPRESS_PAGE_LOAD_TIMEOUT_MS === 60000', () => expect(CYPRESS_PAGE_LOAD_TIMEOUT_MS).toBe(60000))
  it('CYPRESS_REQUEST_TIMEOUT_MS === 5000', () => expect(CYPRESS_REQUEST_TIMEOUT_MS).toBe(5000))
  it('CYPRESS_RESPONSE_TIMEOUT_MS === 30000', () => expect(CYPRESS_RESPONSE_TIMEOUT_MS).toBe(30000))
  it('CYPRESS_VIEWPORT_WIDTH === 1000', () => expect(CYPRESS_VIEWPORT_WIDTH).toBe(1000))
  it('CYPRESS_VIEWPORT_HEIGHT === 660', () => expect(CYPRESS_VIEWPORT_HEIGHT).toBe(660))
  it('CypressDefaults exposes exactly 6 keys', () => expect(Object.keys(CypressDefaults)).toHaveLength(6))
})
