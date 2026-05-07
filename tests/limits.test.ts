// tests/limits.test.ts
// Imports from dist — validates the built artefact, not src.
// Phase 1 established this convention; Phase 3 honours it.
import { describe, it, expect } from 'vitest'
import {
  MAX_SAFE_INT, MIN_SAFE_INT, MAX_INT_32, MIN_INT_32, ZERO,
  ONE_KB, ONE_MB, ONE_GB,
  DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, MAX_EMAIL_LENGTH, MAX_URL_LENGTH,
  Limits, Bytes, Pagination,
} from '../dist/index.js'

describe('Limits flat constants', () => {
  it('MAX_SAFE_INT === 9007199254740991', () => expect(MAX_SAFE_INT).toBe(9007199254740991))
  it('MIN_SAFE_INT === -9007199254740991', () => expect(MIN_SAFE_INT).toBe(-9007199254740991))
  it('MAX_INT_32 === 2147483647', () => expect(MAX_INT_32).toBe(2147483647))
  it('MIN_INT_32 === -2147483648', () => expect(MIN_INT_32).toBe(-2147483648))
  it('ZERO === 0', () => expect(ZERO).toBe(0))
})

describe('Limits namespace', () => {
  it('Limits.MAX_SAFE_INT === 9007199254740991', () => expect(Limits.MAX_SAFE_INT).toBe(9007199254740991))
  it('Limits.ZERO === 0', () => expect(Limits.ZERO).toBe(0))
  it('exposes exactly 5 keys', () => expect(Object.keys(Limits)).toHaveLength(5))
})

describe('Bytes flat constants', () => {
  it('ONE_KB === 1024', () => expect(ONE_KB).toBe(1024))
  it('ONE_MB === 1048576', () => expect(ONE_MB).toBe(1048576))
  it('ONE_GB === 1073741824', () => expect(ONE_GB).toBe(1073741824))
})

describe('Bytes namespace', () => {
  it('Bytes.ONE_MB === 1048576', () => expect(Bytes.ONE_MB).toBe(1048576))
  it('exposes exactly 3 keys', () => expect(Object.keys(Bytes)).toHaveLength(3))
})

describe('Pagination flat constants', () => {
  it('DEFAULT_PAGE_SIZE === 20', () => expect(DEFAULT_PAGE_SIZE).toBe(20))
  it('MAX_PAGE_SIZE === 100', () => expect(MAX_PAGE_SIZE).toBe(100))
  it('MAX_EMAIL_LENGTH === 254', () => expect(MAX_EMAIL_LENGTH).toBe(254))
  it('MAX_URL_LENGTH === 2048', () => expect(MAX_URL_LENGTH).toBe(2048))
})

describe('Pagination namespace', () => {
  it('Pagination.DEFAULT_PAGE_SIZE === 20', () => expect(Pagination.DEFAULT_PAGE_SIZE).toBe(20))
  it('Pagination.MAX_EMAIL_LENGTH === 254', () => expect(Pagination.MAX_EMAIL_LENGTH).toBe(254))
  it('exposes exactly 4 keys', () => expect(Object.keys(Pagination)).toHaveLength(4))
})
