// tests/ascii.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  CHAR_CODE_UPPER_A, CHAR_CODE_LOWER_A, CHAR_CODE_DIGIT_ZERO,
  CHAR_CODE_SPACE, CHAR_CODE_NEWLINE,
  ASCII_MAX, ASCII_PRINTABLE_MIN, ASCII_PRINTABLE_MAX,
  LETTER_CASE_OFFSET, ALPHABET_LENGTH,
  MAX_CODE_POINT, BMP_MAX, SURROGATE_MIN, SURROGATE_MAX, REPLACEMENT_CHAR_CODE,
  Ascii, Unicode,
} from '../dist/index.js'

describe('Ascii flat constants', () => {
  it('CHAR_CODE_UPPER_A === 65', () => expect(CHAR_CODE_UPPER_A).toBe(65))
  it('CHAR_CODE_LOWER_A === 97', () => expect(CHAR_CODE_LOWER_A).toBe(97))
  it('CHAR_CODE_DIGIT_ZERO === 48', () => expect(CHAR_CODE_DIGIT_ZERO).toBe(48))
  it('CHAR_CODE_SPACE === 32', () => expect(CHAR_CODE_SPACE).toBe(32))
  it('CHAR_CODE_NEWLINE === 10', () => expect(CHAR_CODE_NEWLINE).toBe(10))
  it('ASCII_MAX === 127', () => expect(ASCII_MAX).toBe(127))
  it('ASCII_PRINTABLE_MIN === 32', () => expect(ASCII_PRINTABLE_MIN).toBe(32))
  it('ASCII_PRINTABLE_MAX === 126', () => expect(ASCII_PRINTABLE_MAX).toBe(126))
  it('LETTER_CASE_OFFSET === 32', () => expect(LETTER_CASE_OFFSET).toBe(32))
  it('ALPHABET_LENGTH === 26', () => expect(ALPHABET_LENGTH).toBe(26))
  it('matches real char codes', () => {
    expect(CHAR_CODE_UPPER_A).toBe('A'.charCodeAt(0))
    expect(CHAR_CODE_LOWER_A).toBe('a'.charCodeAt(0))
    expect(CHAR_CODE_DIGIT_ZERO).toBe('0'.charCodeAt(0))
    expect(CHAR_CODE_SPACE).toBe(' '.charCodeAt(0))
    expect(CHAR_CODE_NEWLINE).toBe('\n'.charCodeAt(0))
  })
})

describe('Unicode flat constants', () => {
  it('MAX_CODE_POINT === 0x10FFFF', () => expect(MAX_CODE_POINT).toBe(0x10ffff))
  it('BMP_MAX === 0xFFFF', () => expect(BMP_MAX).toBe(0xffff))
  it('SURROGATE_MIN === 0xD800', () => expect(SURROGATE_MIN).toBe(0xd800))
  it('SURROGATE_MAX === 0xDFFF', () => expect(SURROGATE_MAX).toBe(0xdfff))
  it('REPLACEMENT_CHAR_CODE === 0xFFFD', () => expect(REPLACEMENT_CHAR_CODE).toBe(0xfffd))
  it('REPLACEMENT_CHAR_CODE is U+FFFD', () =>
    expect(String.fromCodePoint(REPLACEMENT_CHAR_CODE)).toBe('�'))
})

describe('Ascii / Unicode namespaces', () => {
  it('Ascii exposes exactly 10 keys', () => expect(Object.keys(Ascii)).toHaveLength(10))
  it('Unicode exposes exactly 5 keys', () => expect(Object.keys(Unicode)).toHaveLength(5))
  it('Ascii.ASCII_MAX === 127', () => expect(Ascii.ASCII_MAX).toBe(127))
  it('Unicode.MAX_CODE_POINT === 1114111', () => expect(Unicode.MAX_CODE_POINT).toBe(1114111))
})
