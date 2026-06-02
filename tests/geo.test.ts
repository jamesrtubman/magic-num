// tests/geo.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  MIN_LATITUDE, MAX_LATITUDE, MIN_LONGITUDE, MAX_LONGITUDE,
  EARTH_RADIUS_KM, EARTH_RADIUS_MI,
  Geo,
} from '../dist/index.js'

describe('Geo flat constants', () => {
  it('MIN_LATITUDE === -90', () => expect(MIN_LATITUDE).toBe(-90))
  it('MAX_LATITUDE === 90', () => expect(MAX_LATITUDE).toBe(90))
  it('MIN_LONGITUDE === -180', () => expect(MIN_LONGITUDE).toBe(-180))
  it('MAX_LONGITUDE === 180', () => expect(MAX_LONGITUDE).toBe(180))
  it('EARTH_RADIUS_KM === 6371', () => expect(EARTH_RADIUS_KM).toBe(6371))
  it('EARTH_RADIUS_MI === 3959', () => expect(EARTH_RADIUS_MI).toBe(3959))
})

describe('Geo namespace', () => {
  it('Geo.MAX_LATITUDE === 90', () => expect(Geo.MAX_LATITUDE).toBe(90))
  it('exposes exactly 6 keys', () => expect(Object.keys(Geo)).toHaveLength(6))
})
