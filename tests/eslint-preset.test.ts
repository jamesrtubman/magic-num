// tests/eslint-preset.test.ts
// Validates the magic-num/eslint subpath entry from its own dist build.
import { describe, it, expect } from 'vitest'
import { MAGIC_NUMBER_VALUES, noMagicNumbersConfig } from '../dist/eslint-preset.js'

describe('MAGIC_NUMBER_VALUES', () => {
  it('is a non-empty array of numbers', () => {
    expect(Array.isArray(MAGIC_NUMBER_VALUES)).toBe(true)
    expect(MAGIC_NUMBER_VALUES.length).toBeGreaterThan(0)
    expect(MAGIC_NUMBER_VALUES.every((n) => typeof n === 'number')).toBe(true)
  })
  it('is deduplicated', () => {
    expect(new Set(MAGIC_NUMBER_VALUES).size).toBe(MAGIC_NUMBER_VALUES.length)
  })
  it('is sorted ascending', () => {
    const sorted = [...MAGIC_NUMBER_VALUES].sort((a, b) => a - b)
    expect(MAGIC_NUMBER_VALUES).toEqual(sorted)
  })
  it('includes known named values (200, 255, 1024)', () => {
    expect(MAGIC_NUMBER_VALUES).toContain(200)
    expect(MAGIC_NUMBER_VALUES).toContain(255)
    expect(MAGIC_NUMBER_VALUES).toContain(1024)
  })
})

describe('noMagicNumbersConfig', () => {
  it('shapes the no-magic-numbers rule', () => {
    const rule = noMagicNumbersConfig['no-magic-numbers']
    expect(rule[0]).toBe('error')
    expect(rule[1].ignore).toBe(MAGIC_NUMBER_VALUES)
    expect(rule[1].ignoreArrayIndexes).toBe(true)
  })
})
