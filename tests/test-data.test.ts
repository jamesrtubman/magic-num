// tests/test-data.test.ts
// Imports from dist — validates the built artefact, not src.
// Run `npm run build` before `npm test`.
import { describe, it, expect } from 'vitest'
import {
  NEGATIVE_ONE,
  EMPTY_STRING,
  EMPTY_ARRAY_LENGTH,
  ZERO,
  MAX_SAFE_INT,
  Boundary,
  FAKE_ID,
  FAKE_UUID,
  FAKE_EMAIL,
  FAKE_URL,
  FAKE_TIMESTAMP,
  TestData,
} from '../dist/index.js'

describe('Boundary flat constants', () => {
  it('NEGATIVE_ONE === -1', () => expect(NEGATIVE_ONE).toBe(-1))
  it('EMPTY_STRING === ""', () => expect(EMPTY_STRING).toBe(''))
  it('EMPTY_ARRAY_LENGTH === 0', () => expect(EMPTY_ARRAY_LENGTH).toBe(0))
  it('ZERO === 0 (from limits)', () => expect(ZERO).toBe(0))
  it('MAX_SAFE_INT === 9007199254740991 (from limits)', () => expect(MAX_SAFE_INT).toBe(9007199254740991))
})

describe('Boundary namespace', () => {
  it('Boundary.NEGATIVE_ONE === -1', () => expect(Boundary.NEGATIVE_ONE).toBe(-1))
  it('Boundary.EMPTY_STRING === ""', () => expect(Boundary.EMPTY_STRING).toBe(''))
  it('Boundary.EMPTY_ARRAY_LENGTH === 0', () => expect(Boundary.EMPTY_ARRAY_LENGTH).toBe(0))
  it('Boundary.ZERO === 0', () => expect(Boundary.ZERO).toBe(0))
  it('Boundary.MAX_SAFE_INT === 9007199254740991', () => expect(Boundary.MAX_SAFE_INT).toBe(9007199254740991))
  it('exposes exactly 5 keys', () => expect(Object.keys(Boundary)).toHaveLength(5))
})

describe('FAKE_* flat constants', () => {
  it('FAKE_ID === "1"', () => expect(FAKE_ID).toBe('1'))
  it('FAKE_UUID is a valid v4 UUID', () => {
    expect(FAKE_UUID).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
  })
  it('FAKE_EMAIL === "fake@example.com"', () => expect(FAKE_EMAIL).toBe('fake@example.com'))
  it('FAKE_URL === "https://fake.example.com"', () => expect(FAKE_URL).toBe('https://fake.example.com'))
  it('FAKE_TIMESTAMP === "1970-01-01T00:00:00.000Z"', () => expect(FAKE_TIMESTAMP).toBe('1970-01-01T00:00:00.000Z'))
})

describe('TestData namespace', () => {
  it('TestData.FAKE_ID === "1"', () => expect(TestData.FAKE_ID).toBe('1'))
  it('TestData.FAKE_UUID matches v4 pattern', () => {
    expect(TestData.FAKE_UUID).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
  })
  it('TestData.FAKE_EMAIL === "fake@example.com"', () => expect(TestData.FAKE_EMAIL).toBe('fake@example.com'))
  it('TestData.FAKE_URL === "https://fake.example.com"', () => expect(TestData.FAKE_URL).toBe('https://fake.example.com'))
  it('TestData.FAKE_TIMESTAMP === "1970-01-01T00:00:00.000Z"', () => expect(TestData.FAKE_TIMESTAMP).toBe('1970-01-01T00:00:00.000Z'))
  it('exposes exactly 5 keys', () => expect(Object.keys(TestData)).toHaveLength(5))
})
