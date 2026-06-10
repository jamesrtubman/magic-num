// tests/filesystem.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  FILE_MODE_DEFAULT, FILE_MODE_PRIVATE, FILE_MODE_READONLY,
  DIR_MODE_DEFAULT, MODE_ALL,
  MAX_FILENAME_LENGTH, MAX_PATH_LINUX, MAX_PATH_WINDOWS,
  DEFAULT_HIGH_WATER_MARK, STREAM_CHUNK_64K,
  FileSystem,
} from '../dist/index.js'

describe('FileSystem flat constants', () => {
  it('FILE_MODE_DEFAULT === 0o644', () => expect(FILE_MODE_DEFAULT).toBe(0o644))
  it('FILE_MODE_PRIVATE === 0o600', () => expect(FILE_MODE_PRIVATE).toBe(0o600))
  it('FILE_MODE_READONLY === 0o444', () => expect(FILE_MODE_READONLY).toBe(0o444))
  it('DIR_MODE_DEFAULT === 0o755', () => expect(DIR_MODE_DEFAULT).toBe(0o755))
  it('MODE_ALL === 0o777', () => expect(MODE_ALL).toBe(0o777))
  it('MAX_FILENAME_LENGTH === 255', () => expect(MAX_FILENAME_LENGTH).toBe(255))
  it('MAX_PATH_LINUX === 4096', () => expect(MAX_PATH_LINUX).toBe(4096))
  it('MAX_PATH_WINDOWS === 260', () => expect(MAX_PATH_WINDOWS).toBe(260))
  it('DEFAULT_HIGH_WATER_MARK === 16384', () => expect(DEFAULT_HIGH_WATER_MARK).toBe(16384))
  it('STREAM_CHUNK_64K === 65536', () => expect(STREAM_CHUNK_64K).toBe(65536))
})

describe('FileSystem namespace', () => {
  it('FileSystem.DIR_MODE_DEFAULT === 0o755', () => expect(FileSystem.DIR_MODE_DEFAULT).toBe(0o755))
  it('exposes exactly 10 keys', () => expect(Object.keys(FileSystem)).toHaveLength(10))
})
