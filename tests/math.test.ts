// tests/math.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  PI, TAU, E, GOLDEN_RATIO, SQRT_2, SQRT_1_2, LN_2, LN_10,
  HALF, QUARTER, THIRD, TWO_THIRDS, THREE_QUARTERS, HUNDRED_PERCENT,
  clamp, isBetween, percentOf,
  MathConst,
} from '../dist/index.js'

describe('Math flat constants', () => {
  it('PI === Math.PI', () => expect(PI).toBe(Math.PI))
  it('TAU === 2*Math.PI', () => expect(TAU).toBe(2 * Math.PI))
  it('E === Math.E', () => expect(E).toBe(Math.E))
  it('GOLDEN_RATIO === 1.618033988749895', () => expect(GOLDEN_RATIO).toBe(1.618033988749895))
  it('SQRT_2 === Math.SQRT2', () => expect(SQRT_2).toBe(Math.SQRT2))
  it('SQRT_1_2 === Math.SQRT1_2', () => expect(SQRT_1_2).toBe(Math.SQRT1_2))
  it('LN_2 === Math.LN2', () => expect(LN_2).toBe(Math.LN2))
  it('LN_10 === Math.LN10', () => expect(LN_10).toBe(Math.LN10))
  it('HALF === 0.5', () => expect(HALF).toBe(0.5))
  it('QUARTER === 0.25', () => expect(QUARTER).toBe(0.25))
  it('THIRD === 0.3333333333333333', () => expect(THIRD).toBe(0.3333333333333333))
  it('TWO_THIRDS === 0.6666666666666666', () => expect(TWO_THIRDS).toBe(0.6666666666666666))
  it('THREE_QUARTERS === 0.75', () => expect(THREE_QUARTERS).toBe(0.75))
  it('HUNDRED_PERCENT === 100', () => expect(HUNDRED_PERCENT).toBe(100))
})

describe('MathConst namespace', () => {
  it('MathConst.PI === Math.PI', () => expect(MathConst.PI).toBe(Math.PI))
  it('MathConst.HALF === 0.5', () => expect(MathConst.HALF).toBe(0.5))
  it('exposes exactly 14 numeric constants', () => {
    const numericKeys = Object.keys(MathConst).filter(
      (k) => typeof (MathConst as Record<string, unknown>)[k] === 'number',
    )
    expect(numericKeys).toHaveLength(14)
  })
})

describe('clamp', () => {
  it('passes through value in range', () => expect(clamp(5, 0, 10)).toBe(5))
  it('clamps below min', () => expect(clamp(-1, 0, 10)).toBe(0))
  it('clamps above max', () => expect(clamp(99, 0, 10)).toBe(10))
  it('available on MathConst', () => expect(MathConst.clamp(99, 0, 10)).toBe(10))
})

describe('isBetween (inclusive)', () => {
  it('true inside range', () => expect(isBetween(5, 1, 10)).toBe(true))
  it('false below range', () => expect(isBetween(0, 1, 10)).toBe(false))
  it('true at upper bound', () => expect(isBetween(10, 1, 10)).toBe(true))
  it('available on MathConst', () => expect(MathConst.isBetween(5, 1, 10)).toBe(true))
})

describe('percentOf', () => {
  it('10% of 200 === 20', () => expect(percentOf(200, 10)).toBe(20))
  it('available on MathConst', () => expect(MathConst.percentOf(200, 10)).toBe(20))
})
