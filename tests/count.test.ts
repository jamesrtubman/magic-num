import { describe, it, expect } from 'vitest'
import {
  ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN,
  ELEVEN, TWELVE, THIRTEEN, FOURTEEN, FIFTEEN, SIXTEEN, SEVENTEEN, EIGHTEEN, NINETEEN, TWENTY,
  Count, Retry, Calls,
  num, range,
} from '../dist/index.js'

describe('Count flat constants', () => {
  it('ONE === 1',       () => expect(ONE).toBe(1))
  it('TWO === 2',       () => expect(TWO).toBe(2))
  it('THREE === 3',     () => expect(THREE).toBe(3))
  it('FIVE === 5',      () => expect(FIVE).toBe(5))
  it('TEN === 10',      () => expect(TEN).toBe(10))
  it('FIFTEEN === 15',  () => expect(FIFTEEN).toBe(15))
  it('TWENTY === 20',   () => expect(TWENTY).toBe(20))
})

describe('Count namespace', () => {
  it('Count.ONE === 1',    () => expect(Count.ONE).toBe(1))
  it('Count.TWENTY === 20', () => expect(Count.TWENTY).toBe(20))
  it('exposes exactly 20 numeric constants', () => {
    const numericKeys = Object.keys(Count).filter(
      (k) => typeof (Count as Record<string, unknown>)[k] === 'number',
    )
    expect(numericKeys).toHaveLength(20)
  })
  it('attaches of/range helpers', () => {
    expect(Count.of(7)).toBe(7)
    expect(Count.range(1, 3)).toEqual([1, 2, 3])
  })
})

describe('num', () => {
  it('returns its argument unchanged', () => expect(num(256)).toBe(256))
  it('works for any number', () => expect(num(1000000)).toBe(1000000))
})

describe('range', () => {
  it('ascending inclusive', () => expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]))
  it('with step', () => expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]))
  it('descending when start > end', () => expect(range(5, 1)).toEqual([5, 4, 3, 2, 1]))
  it('single element when start === end', () => expect(range(3, 3)).toEqual([3]))
  it('throws on step 0', () => expect(() => range(1, 3, 0)).toThrow(RangeError))
  it('throws on negative step', () => expect(() => range(1, 3, -1)).toThrow(RangeError))
  it('throws on non-integer step', () => expect(() => range(1, 3, 1.5)).toThrow(RangeError))
})

describe('Retry namespace', () => {
  it('Retry.ONCE === 1',    () => expect(Retry.ONCE).toBe(1))
  it('Retry.TWICE === 2',   () => expect(Retry.TWICE).toBe(2))
  it('Retry.DEFAULT === 3', () => expect(Retry.DEFAULT).toBe(3))
  it('Retry.MAX === 5',     () => expect(Retry.MAX).toBe(5))
  it('exposes exactly 4 keys', () => expect(Object.keys(Retry)).toHaveLength(4))
})

describe('Calls namespace', () => {
  it('Calls.ONE === 1',   () => expect(Calls.ONE).toBe(1))
  it('Calls.TWO === 2',   () => expect(Calls.TWO).toBe(2))
  it('Calls.THREE === 3', () => expect(Calls.THREE).toBe(3))
  it('Calls.TEN === 10',  () => expect(Calls.TEN).toBe(10))
  it('exposes exactly 10 keys', () => expect(Object.keys(Calls)).toHaveLength(10))
})
