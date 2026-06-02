// tests/time.test.ts
// Imports from dist — validates the built artefact, not src.
// Phase 1 established this convention; Phase 3 honours it.
import { describe, it, expect } from 'vitest'
import {
  ONE_SECOND_MS, ONE_MINUTE_MS, ONE_HOUR_MS, ONE_DAY_MS, ONE_WEEK_MS,
  ONE_MINUTE_S, ONE_HOUR_S, ONE_DAY_S, ONE_WEEK_S,
  TimeMs, TimeS,
  secondsToMs, msToSeconds, minutesToMs, hoursToMs, msToMinutes,
  TimeConvert,
} from '../dist/index.js'

describe('TimeMs flat constants', () => {
  it('ONE_SECOND_MS === 1000', () => expect(ONE_SECOND_MS).toBe(1000))
  it('ONE_MINUTE_MS === 60000', () => expect(ONE_MINUTE_MS).toBe(60000))
  it('ONE_HOUR_MS === 3600000', () => expect(ONE_HOUR_MS).toBe(3600000))
  it('ONE_DAY_MS === 86400000', () => expect(ONE_DAY_MS).toBe(86400000))
  it('ONE_WEEK_MS === 604800000', () => expect(ONE_WEEK_MS).toBe(604800000))
})

describe('TimeMs namespace', () => {
  it('TimeMs.ONE_SECOND === 1000', () => expect(TimeMs.ONE_SECOND).toBe(1000))
  it('TimeMs.ONE_HOUR === 3600000', () => expect(TimeMs.ONE_HOUR).toBe(3600000))
  it('TimeMs.ONE_WEEK === 604800000', () => expect(TimeMs.ONE_WEEK).toBe(604800000))
  it('exposes exactly 5 keys', () => expect(Object.keys(TimeMs)).toHaveLength(5))
})

describe('TimeS flat constants', () => {
  it('ONE_MINUTE_S === 60', () => expect(ONE_MINUTE_S).toBe(60))
  it('ONE_HOUR_S === 3600', () => expect(ONE_HOUR_S).toBe(3600))
  it('ONE_DAY_S === 86400', () => expect(ONE_DAY_S).toBe(86400))
  it('ONE_WEEK_S === 604800', () => expect(ONE_WEEK_S).toBe(604800))
})

describe('TimeS namespace', () => {
  it('TimeS.ONE_HOUR === 3600', () => expect(TimeS.ONE_HOUR).toBe(3600))
  it('TimeS.ONE_WEEK === 604800', () => expect(TimeS.ONE_WEEK).toBe(604800))
  it('exposes exactly 4 keys', () => expect(Object.keys(TimeS)).toHaveLength(4))
})

describe('Time converters', () => {
  it('secondsToMs(2) === 2000', () => expect(secondsToMs(2)).toBe(2000))
  it('msToSeconds(2000) === 2', () => expect(msToSeconds(2000)).toBe(2))
  it('minutesToMs(2) === 120000', () => expect(minutesToMs(2)).toBe(120000))
  it('hoursToMs(1) === 3600000', () => expect(hoursToMs(1)).toBe(3600000))
  it('msToMinutes(120000) === 2', () => expect(msToMinutes(120000)).toBe(2))
})

describe('TimeConvert namespace', () => {
  it('TimeConvert.secondsToMs(2) === 2000', () => expect(TimeConvert.secondsToMs(2)).toBe(2000))
  it('exposes exactly 5 helpers', () => expect(Object.keys(TimeConvert)).toHaveLength(5))
})
