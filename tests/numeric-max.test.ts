// tests/numeric-max.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  MAX_UINT8, MAX_UINT16, MAX_UINT32, RGB_MAX, ALPHA_MAX,
  NumericMax,
} from '../dist/index.js'

describe('NumericMax flat constants', () => {
  it('MAX_UINT8 === 255', () => expect(MAX_UINT8).toBe(255))
  it('MAX_UINT16 === 65535', () => expect(MAX_UINT16).toBe(65535))
  it('MAX_UINT32 === 4294967295', () => expect(MAX_UINT32).toBe(4294967295))
  it('RGB_MAX === 255', () => expect(RGB_MAX).toBe(255))
  it('ALPHA_MAX === 255', () => expect(ALPHA_MAX).toBe(255))
})

describe('NumericMax namespace', () => {
  it('NumericMax.MAX_UINT32 === 4294967295', () => expect(NumericMax.MAX_UINT32).toBe(4294967295))
  it('exposes exactly 5 keys', () => expect(Object.keys(NumericMax)).toHaveLength(5))
})
