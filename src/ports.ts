// src/ports.ts
// Common network/service port numbers (IANA-registered well-known + popular services).
// Pattern: private `as const` source → Ports namespace → flat PORT_* exports.
// Namespace keys omit the PORT_ prefix (e.g. Ports.HTTP); flat exports carry it.
// Values verified against IANA service-name registry (2026-05-29).

// ===== PORT VALUES (private) =====
const PORT_VALUES = {
  FTP: 21,
  SSH: 22,
  TELNET: 23,
  SMTP: 25,
  DNS: 53,
  HTTP: 80,
  POP3: 110,
  HTTPS: 443,
  MYSQL: 3306,
  POSTGRES: 5432,
  REDIS: 6379,
  MONGODB: 27017,
} as const;

// ===== NAMESPACE (public) =====
export const Ports = { ...PORT_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
export const PORT_FTP = PORT_VALUES.FTP; // type: 21
export const PORT_SSH = PORT_VALUES.SSH; // type: 22
export const PORT_TELNET = PORT_VALUES.TELNET; // type: 23
export const PORT_SMTP = PORT_VALUES.SMTP; // type: 25
export const PORT_DNS = PORT_VALUES.DNS; // type: 53
export const PORT_HTTP = PORT_VALUES.HTTP; // type: 80
export const PORT_POP3 = PORT_VALUES.POP3; // type: 110
export const PORT_HTTPS = PORT_VALUES.HTTPS; // type: 443
export const PORT_MYSQL = PORT_VALUES.MYSQL; // type: 3306
export const PORT_POSTGRES = PORT_VALUES.POSTGRES; // type: 5432
export const PORT_REDIS = PORT_VALUES.REDIS; // type: 6379
export const PORT_MONGODB = PORT_VALUES.MONGODB; // type: 27017
