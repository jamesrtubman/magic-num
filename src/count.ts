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

export const Count = { ...COUNT_VALUES } as const;
export const Retry = { ...RETRY_VALUES } as const;
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
