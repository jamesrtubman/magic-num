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
