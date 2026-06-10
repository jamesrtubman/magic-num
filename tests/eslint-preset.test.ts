// tests/eslint-preset.test.ts
// Validates the magic-num/eslint subpath entry from its own dist build.
import { describe, it, expect } from 'vitest'
import {
  MAGIC_NUMBER_VALUES,
  noMagicNumbersConfig,
  createNoMagicNumbersConfig,
} from '../dist/eslint-preset.js'

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
  it('picked up filesystem and unicode values automatically', () => {
    expect(MAGIC_NUMBER_VALUES).toContain(0o755) // DIR_MODE_DEFAULT
    expect(MAGIC_NUMBER_VALUES).toContain(4096) // MAX_PATH_LINUX
    expect(MAGIC_NUMBER_VALUES).toContain(1114111) // MAX_CODE_POINT
  })
})

describe('noMagicNumbersConfig', () => {
  it('shapes the no-magic-numbers rule', () => {
    const rule = noMagicNumbersConfig['no-magic-numbers']
    expect(rule[0]).toBe('error')
    expect(rule[1].ignore).toBe(MAGIC_NUMBER_VALUES)
    expect(rule[1].ignoreArrayIndexes).toBe(true)
    expect(rule[1].ignoreDefaultValues).toBe(false)
    expect(rule[1].enforceConst).toBe(false)
    expect(rule[1].detectObjects).toBe(false)
  })
})

describe('createNoMagicNumbersConfig', () => {
  it('defaults match noMagicNumbersConfig', () => {
    expect(createNoMagicNumbersConfig()).toEqual(noMagicNumbersConfig)
  })
  it('applies severity option', () => {
    const rule = createNoMagicNumbersConfig({ severity: 'warn' })['no-magic-numbers']
    expect(rule[0]).toBe('warn')
  })
  it('merges extraIgnores deduplicated and sorted', () => {
    const rule = createNoMagicNumbersConfig({ extraIgnores: [42, 200] })['no-magic-numbers']
    const ignore = rule[1].ignore
    expect(ignore).toContain(42)
    expect(new Set(ignore).size).toBe(ignore.length)
    expect(ignore).toEqual([...ignore].sort((a, b) => a - b))
    expect(ignore.length).toBe(MAGIC_NUMBER_VALUES.length + 1) // 200 already present
  })
  it('applies boolean rule options', () => {
    const rule = createNoMagicNumbersConfig({
      ignoreArrayIndexes: false,
      ignoreDefaultValues: true,
      enforceConst: true,
      detectObjects: true,
    })['no-magic-numbers']
    expect(rule[1].ignoreArrayIndexes).toBe(false)
    expect(rule[1].ignoreDefaultValues).toBe(true)
    expect(rule[1].enforceConst).toBe(true)
    expect(rule[1].detectObjects).toBe(true)
  })
  it('reuses MAGIC_NUMBER_VALUES when no extraIgnores', () => {
    const rule = createNoMagicNumbersConfig()['no-magic-numbers']
    expect(rule[1].ignore).toBe(MAGIC_NUMBER_VALUES)
  })
})
