// tests/http.test.ts
// Imports from dist — validates the built artefact, not src.
// Phase 1 established this convention; Phase 2 honours it.
import { describe, it, expect } from 'vitest'
import {
  HTTP_OK,
  HTTP_NOT_FOUND,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_TOO_MANY_REQUESTS,
  HTTP_UNPROCESSABLE_ENTITY,
  HTTP_UNAUTHORIZED,
  HttpStatus,
} from '../dist/index.js'

describe('HTTP flat constants - values', () => {
  it('HTTP_OK === 200', () => expect(HTTP_OK).toBe(200))
  it('HTTP_NOT_FOUND === 404', () => expect(HTTP_NOT_FOUND).toBe(404))
  it('HTTP_INTERNAL_SERVER_ERROR === 500', () => expect(HTTP_INTERNAL_SERVER_ERROR).toBe(500))
  it('HTTP_TOO_MANY_REQUESTS === 429', () => expect(HTTP_TOO_MANY_REQUESTS).toBe(429))
  it('HTTP_UNPROCESSABLE_ENTITY === 422', () => expect(HTTP_UNPROCESSABLE_ENTITY).toBe(422))
  it('HTTP_UNAUTHORIZED === 401', () => expect(HTTP_UNAUTHORIZED).toBe(401))
})

describe('HttpStatus namespace - values', () => {
  it('HttpStatus.OK === 200', () => expect(HttpStatus.OK).toBe(200))
  it('HttpStatus.NOT_FOUND === 404', () => expect(HttpStatus.NOT_FOUND).toBe(404))
  it('HttpStatus.INTERNAL_SERVER_ERROR === 500', () => expect(HttpStatus.INTERNAL_SERVER_ERROR).toBe(500))
})

describe('HttpStatus.isSuccess', () => {
  it('returns true for 200', () => expect(HttpStatus.isSuccess(200)).toBe(true))
  it('returns true for 201', () => expect(HttpStatus.isSuccess(201)).toBe(true))
  it('returns true for 299', () => expect(HttpStatus.isSuccess(299)).toBe(true))
  it('returns false for 300', () => expect(HttpStatus.isSuccess(300)).toBe(false))
  it('returns false for 404', () => expect(HttpStatus.isSuccess(404)).toBe(false))
  it('returns false for 500', () => expect(HttpStatus.isSuccess(500)).toBe(false))
})

describe('HttpStatus.isClientError', () => {
  it('returns true for 400', () => expect(HttpStatus.isClientError(400)).toBe(true))
  it('returns true for 404', () => expect(HttpStatus.isClientError(404)).toBe(true))
  it('returns true for 499', () => expect(HttpStatus.isClientError(499)).toBe(true))
  it('returns false for 200', () => expect(HttpStatus.isClientError(200)).toBe(false))
  it('returns false for 500', () => expect(HttpStatus.isClientError(500)).toBe(false))
})

describe('HttpStatus.isServerError', () => {
  it('returns true for 500', () => expect(HttpStatus.isServerError(500)).toBe(true))
  it('returns true for 503', () => expect(HttpStatus.isServerError(503)).toBe(true))
  it('returns true for 599', () => expect(HttpStatus.isServerError(599)).toBe(true))
  it('returns false for 200', () => expect(HttpStatus.isServerError(200)).toBe(false))
  it('returns false for 404', () => expect(HttpStatus.isServerError(404)).toBe(false))
})

describe('HttpStatus namespace coverage', () => {
  it('exposes exactly 25 status code keys', () => {
    const codeKeys = Object.keys(HttpStatus).filter(k => !k.startsWith('is'))
    expect(codeKeys).toHaveLength(25)
  })
})
