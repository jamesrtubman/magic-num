// src/test-data.ts
// Pattern: private as-const source objects → namespace exports → flat exports
// Cross-module import: ZERO and MAX_SAFE_INT come from limits — not redefined here.
// Re-exporting them as flat exports would cause a barrel collision:
//   'export * from ./limits' and 'export * from ./test-data' would both export ZERO.
// RFC references:
//   FAKE_EMAIL: RFC 2606 — example.com is IANA-reserved for documentation/testing
//   FAKE_UUID: UUID v4 format (/^[a-f0-9]{8}-...-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-...$/)
//   FAKE_TIMESTAMP: ISO 8601 / RFC 3339 — Unix epoch as canonical test timestamp
// Verified: tsc --noEmit --strict exit code 0 (2026-05-07)

import { ZERO, MAX_SAFE_INT } from './limits';

// ===== BOUNDARY VALUES (private — new constants only) =====
const BOUNDARY_VALUES = {
  NEGATIVE_ONE: -1,
  EMPTY_STRING: '',
  EMPTY_ARRAY_LENGTH: 0,
} as const;

// ===== FAKE DATA VALUES (private) =====
const FAKE_DATA_VALUES = {
  FAKE_ID: '1',
  FAKE_UUID: '00000000-0000-4000-8000-000000000001',
  FAKE_EMAIL: 'fake@example.com',
  FAKE_URL: 'https://fake.example.com',
  FAKE_TIMESTAMP: '1970-01-01T00:00:00.000Z',
} as const;

// ===== BOUNDARY NAMESPACE (public) =====
// Includes ZERO and MAX_SAFE_INT from limits (imported above).
// They are NOT re-exported as flat exports — that would cause a barrel collision.
export const Boundary = {
  ...BOUNDARY_VALUES,
  ZERO,
  MAX_SAFE_INT,
} as const;

// ===== TESTDATA NAMESPACE (public — FAKE_* only) =====
export const TestData = { ...FAKE_DATA_VALUES } as const;

// ===== FLAT EXPORTS — boundary (new constants only) =====
// ZERO and MAX_SAFE_INT intentionally OMITTED — already flat exports from src/limits.ts
export const NEGATIVE_ONE       = BOUNDARY_VALUES.NEGATIVE_ONE;       // type: -1
export const EMPTY_STRING       = BOUNDARY_VALUES.EMPTY_STRING;       // type: ''
export const EMPTY_ARRAY_LENGTH = BOUNDARY_VALUES.EMPTY_ARRAY_LENGTH; // type: 0

// ===== FLAT EXPORTS — fake data =====
export const FAKE_ID        = FAKE_DATA_VALUES.FAKE_ID;        // type: '1'
export const FAKE_UUID      = FAKE_DATA_VALUES.FAKE_UUID;      // type: '00000000-0000-4000-8000-000000000001'
export const FAKE_EMAIL     = FAKE_DATA_VALUES.FAKE_EMAIL;     // type: 'fake@example.com'
export const FAKE_URL       = FAKE_DATA_VALUES.FAKE_URL;       // type: 'https://fake.example.com'
export const FAKE_TIMESTAMP = FAKE_DATA_VALUES.FAKE_TIMESTAMP; // type: '1970-01-01T00:00:00.000Z'
