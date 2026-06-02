// src/calendar.ts
// Calendar / date-arithmetic magic numbers — counts of one unit within another.
// Complements time.ts (which holds durations in ms/s).
// Pattern: private `as const` source → Calendar namespace → flat exports.
// CRITICAL: hardcoded literals only — property references / arithmetic in the
// value position widen the type to `number` and break literal-type narrowing.

// ===== CALENDAR VALUES (private) =====
const CALENDAR_VALUES = {
  DAYS_IN_WEEK: 7,
  MONTHS_IN_YEAR: 12,
  HOURS_IN_DAY: 24,
  MINUTES_IN_HOUR: 60,
  SECONDS_IN_MINUTE: 60,
  DAYS_IN_YEAR: 365,
  DAYS_IN_LEAP_YEAR: 366,
  WEEKS_IN_YEAR: 52,
  QUARTERS_IN_YEAR: 4,
  DAYS_IN_FORTNIGHT: 14,
} as const;

// ===== NAMESPACE (public) =====
/** Calendar / date-arithmetic constants (units within larger units). */
export const Calendar = { ...CALENDAR_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Days in a week. Value: 7. */
export const DAYS_IN_WEEK = CALENDAR_VALUES.DAYS_IN_WEEK; // type: 7
/** Months in a year. Value: 12. */
export const MONTHS_IN_YEAR = CALENDAR_VALUES.MONTHS_IN_YEAR; // type: 12
/** Hours in a day. Value: 24. */
export const HOURS_IN_DAY = CALENDAR_VALUES.HOURS_IN_DAY; // type: 24
/** Minutes in an hour. Value: 60. */
export const MINUTES_IN_HOUR = CALENDAR_VALUES.MINUTES_IN_HOUR; // type: 60
/** Seconds in a minute. Value: 60. */
export const SECONDS_IN_MINUTE = CALENDAR_VALUES.SECONDS_IN_MINUTE; // type: 60
/** Days in a common (non-leap) year. Value: 365. */
export const DAYS_IN_YEAR = CALENDAR_VALUES.DAYS_IN_YEAR; // type: 365
/** Days in a leap year. Value: 366. */
export const DAYS_IN_LEAP_YEAR = CALENDAR_VALUES.DAYS_IN_LEAP_YEAR; // type: 366
/** Whole weeks in a year. Value: 52. */
export const WEEKS_IN_YEAR = CALENDAR_VALUES.WEEKS_IN_YEAR; // type: 52
/** Quarters in a year. Value: 4. */
export const QUARTERS_IN_YEAR = CALENDAR_VALUES.QUARTERS_IN_YEAR; // type: 4
/** Days in a fortnight (two weeks). Value: 14. */
export const DAYS_IN_FORTNIGHT = CALENDAR_VALUES.DAYS_IN_FORTNIGHT; // type: 14
