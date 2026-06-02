// tests/color.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  RGB_MIN, RGB_CHANNELS, RGBA_CHANNELS,
  ALPHA_TRANSPARENT, ALPHA_OPAQUE, HEX_RADIX,
  MAX_HUE, MAX_SATURATION, MAX_LIGHTNESS, MAX_PERCENT,
  Color,
} from '../dist/index.js'

describe('Color flat constants', () => {
  it('RGB_MIN === 0', () => expect(RGB_MIN).toBe(0))
  // RGB_MAX is exported flat by numeric-max.ts; here verify via the namespace.
  it('Color.RGB_MAX === 255', () => expect(Color.RGB_MAX).toBe(255))
  it('RGB_CHANNELS === 3', () => expect(RGB_CHANNELS).toBe(3))
  it('RGBA_CHANNELS === 4', () => expect(RGBA_CHANNELS).toBe(4))
  it('ALPHA_TRANSPARENT === 0', () => expect(ALPHA_TRANSPARENT).toBe(0))
  it('ALPHA_OPAQUE === 1', () => expect(ALPHA_OPAQUE).toBe(1))
  it('HEX_RADIX === 16', () => expect(HEX_RADIX).toBe(16))
  it('MAX_HUE === 360', () => expect(MAX_HUE).toBe(360))
  it('MAX_SATURATION === 100', () => expect(MAX_SATURATION).toBe(100))
  it('MAX_LIGHTNESS === 100', () => expect(MAX_LIGHTNESS).toBe(100))
  it('MAX_PERCENT === 100', () => expect(MAX_PERCENT).toBe(100))
})

describe('Color namespace', () => {
  it('Color.RGB_MAX === 255', () => expect(Color.RGB_MAX).toBe(255))
  it('exposes exactly 11 keys', () => expect(Object.keys(Color)).toHaveLength(11))
})
