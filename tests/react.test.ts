// tests/react.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  RTL_ASYNC_UTIL_TIMEOUT_MS, RTL_POLL_INTERVAL_MS,
  RQ_GC_TIME_MS, RQ_STALE_TIME_MS, RQ_DEFAULT_RETRY,
  RQ_RETRY_DELAY_BASE_MS, RQ_RETRY_DELAY_MAX_MS,
  ReactTestingLibrary, ReactQuery,
} from '../dist/index.js'

describe('React Testing Library defaults', () => {
  it('RTL_ASYNC_UTIL_TIMEOUT_MS === 1000', () => expect(RTL_ASYNC_UTIL_TIMEOUT_MS).toBe(1000))
  it('RTL_POLL_INTERVAL_MS === 50', () => expect(RTL_POLL_INTERVAL_MS).toBe(50))
  it('ReactTestingLibrary.ASYNC_UTIL_TIMEOUT_MS === 1000', () => expect(ReactTestingLibrary.ASYNC_UTIL_TIMEOUT_MS).toBe(1000))
  it('ReactTestingLibrary exposes exactly 2 keys', () => expect(Object.keys(ReactTestingLibrary)).toHaveLength(2))
})

describe('TanStack React Query v5 defaults', () => {
  it('RQ_GC_TIME_MS === 300000', () => expect(RQ_GC_TIME_MS).toBe(300000))
  it('RQ_STALE_TIME_MS === 0', () => expect(RQ_STALE_TIME_MS).toBe(0))
  it('RQ_DEFAULT_RETRY === 3', () => expect(RQ_DEFAULT_RETRY).toBe(3))
  it('RQ_RETRY_DELAY_BASE_MS === 1000', () => expect(RQ_RETRY_DELAY_BASE_MS).toBe(1000))
  it('RQ_RETRY_DELAY_MAX_MS === 30000', () => expect(RQ_RETRY_DELAY_MAX_MS).toBe(30000))
  it('ReactQuery.GC_TIME_MS === 300000', () => expect(ReactQuery.GC_TIME_MS).toBe(300000))
  it('ReactQuery exposes exactly 5 keys', () => expect(Object.keys(ReactQuery)).toHaveLength(5))
})
