// src/geo.ts
// Geographic-coordinate bounds and Earth radius constants.
// Pattern: private `as const` source → Geo namespace → flat exports.
// CRITICAL: hardcoded literals only — preserves literal-type narrowing.
// EARTH_RADIUS_* use the mean (volumetric) radius: 6371 km / 3959 mi.

// ===== GEO VALUES (private) =====
const GEO_VALUES = {
  MIN_LATITUDE: -90,
  MAX_LATITUDE: 90,
  MIN_LONGITUDE: -180,
  MAX_LONGITUDE: 180,
  EARTH_RADIUS_KM: 6371,
  EARTH_RADIUS_MI: 3959,
} as const;

// ===== NAMESPACE (public) =====
/** Geographic coordinate bounds and mean Earth radius. */
export const Geo = { ...GEO_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Minimum valid latitude, in degrees. Value: -90. */
export const MIN_LATITUDE = GEO_VALUES.MIN_LATITUDE; // type: -90
/** Maximum valid latitude, in degrees. Value: 90. */
export const MAX_LATITUDE = GEO_VALUES.MAX_LATITUDE; // type: 90
/** Minimum valid longitude, in degrees. Value: -180. */
export const MIN_LONGITUDE = GEO_VALUES.MIN_LONGITUDE; // type: -180
/** Maximum valid longitude, in degrees. Value: 180. */
export const MAX_LONGITUDE = GEO_VALUES.MAX_LONGITUDE; // type: 180
/** Mean radius of Earth, in kilometres. Value: 6371. */
export const EARTH_RADIUS_KM = GEO_VALUES.EARTH_RADIUS_KM; // type: 6371
/** Mean radius of Earth, in miles. Value: 3959. */
export const EARTH_RADIUS_MI = GEO_VALUES.EARTH_RADIUS_MI; // type: 3959
