// src/ascii.ts
// ASCII character codes and Unicode code-point boundaries.
// Pattern: private `as const` source → Ascii / Unicode namespaces → flat exports.
// CRITICAL: hardcoded literals only — preserves literal-type narrowing.
// Hex literals are used where the hex form is the conventional spelling.

// ===== ASCII VALUES (private) =====
const ASCII_VALUES = {
  CHAR_CODE_UPPER_A: 65,
  CHAR_CODE_LOWER_A: 97,
  CHAR_CODE_DIGIT_ZERO: 48,
  CHAR_CODE_SPACE: 32,
  CHAR_CODE_NEWLINE: 10,
  ASCII_MAX: 127,
  ASCII_PRINTABLE_MIN: 32,
  ASCII_PRINTABLE_MAX: 126,
  LETTER_CASE_OFFSET: 32,
  ALPHABET_LENGTH: 26,
} as const;

// ===== UNICODE VALUES (private) =====
const UNICODE_VALUES = {
  MAX_CODE_POINT: 0x10ffff,
  BMP_MAX: 0xffff,
  SURROGATE_MIN: 0xd800,
  SURROGATE_MAX: 0xdfff,
  REPLACEMENT_CHAR_CODE: 0xfffd,
} as const;

// ===== NAMESPACES (public) =====
/** ASCII character codes and ranges. */
export const Ascii = { ...ASCII_VALUES } as const;
/** Unicode code-point boundaries. */
export const Unicode = { ...UNICODE_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Character code of 'A'. Value: 65. */
export const CHAR_CODE_UPPER_A = ASCII_VALUES.CHAR_CODE_UPPER_A; // type: 65
/** Character code of 'a'. Value: 97. */
export const CHAR_CODE_LOWER_A = ASCII_VALUES.CHAR_CODE_LOWER_A; // type: 97
/** Character code of '0'. Value: 48. */
export const CHAR_CODE_DIGIT_ZERO = ASCII_VALUES.CHAR_CODE_DIGIT_ZERO; // type: 48
/** Character code of space ' '. Value: 32. */
export const CHAR_CODE_SPACE = ASCII_VALUES.CHAR_CODE_SPACE; // type: 32
/** Character code of newline '\n'. Value: 10. */
export const CHAR_CODE_NEWLINE = ASCII_VALUES.CHAR_CODE_NEWLINE; // type: 10
/** Highest ASCII code point. Value: 127. */
export const ASCII_MAX = ASCII_VALUES.ASCII_MAX; // type: 127
/** First printable ASCII character (space). Value: 32. */
export const ASCII_PRINTABLE_MIN = ASCII_VALUES.ASCII_PRINTABLE_MIN; // type: 32
/** Last printable ASCII character ('~'). Value: 126. */
export const ASCII_PRINTABLE_MAX = ASCII_VALUES.ASCII_PRINTABLE_MAX; // type: 126
/** Offset between upper- and lowercase ASCII letters ('a' - 'A'). Value: 32. */
export const LETTER_CASE_OFFSET = ASCII_VALUES.LETTER_CASE_OFFSET; // type: 32
/** Number of letters in the English alphabet. Value: 26. */
export const ALPHABET_LENGTH = ASCII_VALUES.ALPHABET_LENGTH; // type: 26
/** Highest valid Unicode code point (0x10FFFF). Value: 1114111. */
export const MAX_CODE_POINT = UNICODE_VALUES.MAX_CODE_POINT; // type: 1114111
/** Highest code point in the Basic Multilingual Plane (0xFFFF). Value: 65535. */
export const BMP_MAX = UNICODE_VALUES.BMP_MAX; // type: 65535
/** First surrogate code point (0xD800). Value: 55296. */
export const SURROGATE_MIN = UNICODE_VALUES.SURROGATE_MIN; // type: 55296
/** Last surrogate code point (0xDFFF). Value: 57343. */
export const SURROGATE_MAX = UNICODE_VALUES.SURROGATE_MAX; // type: 57343
/** Unicode replacement character U+FFFD code point. Value: 65533. */
export const REPLACEMENT_CHAR_CODE = UNICODE_VALUES.REPLACEMENT_CHAR_CODE; // type: 65533
