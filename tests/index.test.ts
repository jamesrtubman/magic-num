// tests/index.test.ts
// Imports from dist — validates the built artefact, not src
import { describe, it, expect } from 'vitest'
import * as magicNum from '../dist/index.js'

describe('magic-num build smoke test', () => {
  it('dist output is importable', () => {
    expect(magicNum).toBeDefined()
    expect(typeof magicNum).toBe('object')
  })
})

describe('per-module subpath builds', () => {
  it('dist/http.js exposes HTTP_OK', async () => {
    const http = await import('../dist/http.js')
    expect(http.HTTP_OK).toBe(200)
  })
  it('dist/filesystem.js exposes DIR_MODE_DEFAULT', async () => {
    const fs = await import('../dist/filesystem.js')
    expect(fs.DIR_MODE_DEFAULT).toBe(0o755)
  })
  it('dist/ascii.js exposes MAX_CODE_POINT', async () => {
    const ascii = await import('../dist/ascii.js')
    expect(ascii.MAX_CODE_POINT).toBe(0x10ffff)
  })
})
