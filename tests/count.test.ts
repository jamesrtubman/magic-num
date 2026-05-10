import { describe, it, expect } from 'vitest'
import {
  ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN,
  ELEVEN, TWELVE, THIRTEEN, FOURTEEN, FIFTEEN, SIXTEEN, SEVENTEEN, EIGHTEEN, NINETEEN, TWENTY,
  Count, Retry, Calls,
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
  it('exposes exactly 20 keys', () => expect(Object.keys(Count)).toHaveLength(20))
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
