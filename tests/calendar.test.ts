// tests/calendar.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  DAYS_IN_WEEK, MONTHS_IN_YEAR, HOURS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_MINUTE,
  DAYS_IN_YEAR, DAYS_IN_LEAP_YEAR, WEEKS_IN_YEAR, QUARTERS_IN_YEAR, DAYS_IN_FORTNIGHT,
  Calendar,
} from '../dist/index.js'

describe('Calendar flat constants', () => {
  it('DAYS_IN_WEEK === 7', () => expect(DAYS_IN_WEEK).toBe(7))
  it('MONTHS_IN_YEAR === 12', () => expect(MONTHS_IN_YEAR).toBe(12))
  it('HOURS_IN_DAY === 24', () => expect(HOURS_IN_DAY).toBe(24))
  it('MINUTES_IN_HOUR === 60', () => expect(MINUTES_IN_HOUR).toBe(60))
  it('SECONDS_IN_MINUTE === 60', () => expect(SECONDS_IN_MINUTE).toBe(60))
  it('DAYS_IN_YEAR === 365', () => expect(DAYS_IN_YEAR).toBe(365))
  it('DAYS_IN_LEAP_YEAR === 366', () => expect(DAYS_IN_LEAP_YEAR).toBe(366))
  it('WEEKS_IN_YEAR === 52', () => expect(WEEKS_IN_YEAR).toBe(52))
  it('QUARTERS_IN_YEAR === 4', () => expect(QUARTERS_IN_YEAR).toBe(4))
  it('DAYS_IN_FORTNIGHT === 14', () => expect(DAYS_IN_FORTNIGHT).toBe(14))
})

describe('Calendar namespace', () => {
  it('Calendar.DAYS_IN_WEEK === 7', () => expect(Calendar.DAYS_IN_WEEK).toBe(7))
  it('exposes exactly 10 keys', () => expect(Object.keys(Calendar)).toHaveLength(10))
})
