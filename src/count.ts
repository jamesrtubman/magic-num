// src/count.ts
// Named small whole numbers for counts, retry budgets, and call/invocation counts.
// Pattern: private `as const` source → namespace → flat exports.
// Flat number-words (ONE..TWENTY) carry their literal type, so per-export JSDoc
// is omitted (the hover already shows e.g. `const ONE: 1`); namespaces are documented.

const COUNT_VALUES = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  ELEVEN: 11,
  TWELVE: 12,
  THIRTEEN: 13,
  FOURTEEN: 14,
  FIFTEEN: 15,
  SIXTEEN: 16,
  SEVENTEEN: 17,
  EIGHTEEN: 18,
  NINETEEN: 19,
  TWENTY: 20,
} as const;

const RETRY_VALUES = {
  ONCE: 1,
  TWICE: 2,
  DEFAULT: 3,
  MAX: 5,
} as const;

const CALLS_VALUES = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
} as const;

// ===== DYNAMIC HELPERS (public) =====
// Escape hatches for values beyond the named 1–20, without enumerating them in source.
/**
 * Identity helper that preserves the literal type of a number argument:
 * `num(256)` is typed `256`; `num(x: number)` is typed `number`.
 * Marks a bare number as intentional and keeps magic-num's literal-type contract.
 */
export function num<N extends number>(value: N): N {
  return value;
}

/**
 * Inclusive integer range. Ascending when `start <= end`, descending otherwise.
 * `range(1, 5)` → `[1,2,3,4,5]`; `range(0, 10, 2)` → `[0,2,4,6,8,10]`; `range(5, 1)` → `[5,4,3,2,1]`.
 * Elements are typed `number` (a runtime-generated array cannot carry per-value literal types).
 * @throws RangeError if `step` is not a positive integer.
 */
export function range(start: number, end: number, step = 1): number[] {
  if (!Number.isInteger(step) || step <= 0) {
    throw new RangeError('range: step must be a positive integer');
  }
  const out: number[] = [];
  if (start <= end) {
    for (let i = start; i <= end; i += step) out.push(i);
  } else {
    for (let i = start; i >= end; i -= step) out.push(i);
  }
  return out;
}

/** Named small whole numbers 1–20 for generic counts, plus `of` (= {@link num}) and `range` helpers. */
export const Count = { ...COUNT_VALUES, of: num, range } as const;
/** Named retry-attempt budgets: `ONCE`=1, `TWICE`=2, `DEFAULT`=3, `MAX`=5. */
export const Retry = { ...RETRY_VALUES } as const;
/** Named call/invocation counts 1–10 (e.g. for mock-call assertions). */
export const Calls = { ...CALLS_VALUES } as const;

export const ONE       = COUNT_VALUES.ONE;
export const TWO       = COUNT_VALUES.TWO;
export const THREE     = COUNT_VALUES.THREE;
export const FOUR      = COUNT_VALUES.FOUR;
export const FIVE      = COUNT_VALUES.FIVE;
export const SIX       = COUNT_VALUES.SIX;
export const SEVEN     = COUNT_VALUES.SEVEN;
export const EIGHT     = COUNT_VALUES.EIGHT;
export const NINE      = COUNT_VALUES.NINE;
export const TEN       = COUNT_VALUES.TEN;
export const ELEVEN    = COUNT_VALUES.ELEVEN;
export const TWELVE    = COUNT_VALUES.TWELVE;
export const THIRTEEN  = COUNT_VALUES.THIRTEEN;
export const FOURTEEN  = COUNT_VALUES.FOURTEEN;
export const FIFTEEN   = COUNT_VALUES.FIFTEEN;
export const SIXTEEN   = COUNT_VALUES.SIXTEEN;
export const SEVENTEEN = COUNT_VALUES.SEVENTEEN;
export const EIGHTEEN  = COUNT_VALUES.EIGHTEEN;
export const NINETEEN  = COUNT_VALUES.NINETEEN;
export const TWENTY    = COUNT_VALUES.TWENTY;
