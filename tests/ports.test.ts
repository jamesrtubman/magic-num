// tests/ports.test.ts
// Imports from dist — validates the built artefact, not src.
import { describe, it, expect } from 'vitest'
import {
  PORT_FTP, PORT_SSH, PORT_TELNET, PORT_SMTP, PORT_DNS, PORT_HTTP,
  PORT_POP3, PORT_HTTPS, PORT_MYSQL, PORT_POSTGRES, PORT_REDIS, PORT_MONGODB,
  Ports,
} from '../dist/index.js'

describe('Ports flat constants', () => {
  it('PORT_FTP === 21', () => expect(PORT_FTP).toBe(21))
  it('PORT_SSH === 22', () => expect(PORT_SSH).toBe(22))
  it('PORT_TELNET === 23', () => expect(PORT_TELNET).toBe(23))
  it('PORT_SMTP === 25', () => expect(PORT_SMTP).toBe(25))
  it('PORT_DNS === 53', () => expect(PORT_DNS).toBe(53))
  it('PORT_HTTP === 80', () => expect(PORT_HTTP).toBe(80))
  it('PORT_POP3 === 110', () => expect(PORT_POP3).toBe(110))
  it('PORT_HTTPS === 443', () => expect(PORT_HTTPS).toBe(443))
  it('PORT_MYSQL === 3306', () => expect(PORT_MYSQL).toBe(3306))
  it('PORT_POSTGRES === 5432', () => expect(PORT_POSTGRES).toBe(5432))
  it('PORT_REDIS === 6379', () => expect(PORT_REDIS).toBe(6379))
  it('PORT_MONGODB === 27017', () => expect(PORT_MONGODB).toBe(27017))
})

describe('Ports namespace', () => {
  it('Ports.HTTP === 80', () => expect(Ports.HTTP).toBe(80))
  it('Ports.HTTPS === 443', () => expect(Ports.HTTPS).toBe(443))
  it('exposes exactly 12 keys', () => expect(Object.keys(Ports)).toHaveLength(12))
})
