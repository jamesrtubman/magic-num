// tests/angles.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  FULL_CIRCLE_DEG, HALF_CIRCLE_DEG, QUARTER_CIRCLE_DEG, THREE_QUARTER_CIRCLE_DEG, RIGHT_ANGLE_DEG,
  toRadians, toDegrees,
  Angles,
} from '../dist/index.js'

describe('Angles flat constants', () => {
  it('FULL_CIRCLE_DEG === 360', () => expect(FULL_CIRCLE_DEG).toBe(360))
  it('HALF_CIRCLE_DEG === 180', () => expect(HALF_CIRCLE_DEG).toBe(180))
  it('QUARTER_CIRCLE_DEG === 90', () => expect(QUARTER_CIRCLE_DEG).toBe(90))
  it('THREE_QUARTER_CIRCLE_DEG === 270', () => expect(THREE_QUARTER_CIRCLE_DEG).toBe(270))
  it('RIGHT_ANGLE_DEG === 90', () => expect(RIGHT_ANGLE_DEG).toBe(90))
})

describe('Angles namespace', () => {
  it('Angles.FULL_CIRCLE_DEG === 360', () => expect(Angles.FULL_CIRCLE_DEG).toBe(360))
  it('exposes exactly 5 numeric constants', () => {
    const numericKeys = Object.keys(Angles).filter(
      (k) => typeof (Angles as Record<string, unknown>)[k] === 'number',
    )
    expect(numericKeys).toHaveLength(5)
  })
})

describe('toRadians', () => {
  it('180deg === PI rad', () => expect(toRadians(180)).toBe(Math.PI))
  it('available on Angles', () => expect(Angles.toRadians(180)).toBe(Math.PI))
})

describe('toDegrees', () => {
  it('PI rad === 180deg', () => expect(toDegrees(Math.PI)).toBe(180))
  it('available on Angles', () => expect(Angles.toDegrees(Math.PI)).toBe(180))
})
