// src/filesystem.ts
// Filesystem permission modes, path/name limits, and stream buffer sizes.
// Pattern: private `as const` source → FileSystem namespace → flat exports.
// CRITICAL: hardcoded literals only — preserves literal-type narrowing.
// Octal literals are used for permission modes; they are still literals.

// ===== FILESYSTEM VALUES (private) =====
const FILESYSTEM_VALUES = {
  FILE_MODE_DEFAULT: 0o644,
  FILE_MODE_PRIVATE: 0o600,
  FILE_MODE_READONLY: 0o444,
  DIR_MODE_DEFAULT: 0o755,
  MODE_ALL: 0o777,
  MAX_FILENAME_LENGTH: 255,
  MAX_PATH_LINUX: 4096,
  MAX_PATH_WINDOWS: 260,
  DEFAULT_HIGH_WATER_MARK: 16384,
  STREAM_CHUNK_64K: 65536,
} as const;

// ===== NAMESPACE (public) =====
/** Filesystem permission modes, path/name length limits, and stream buffer sizes. */
export const FileSystem = { ...FILESYSTEM_VALUES } as const;

// ===== FLAT EXPORTS (public) =====
/** Default file permissions rw-r--r--. Value: 0o644 (420). */
export const FILE_MODE_DEFAULT = FILESYSTEM_VALUES.FILE_MODE_DEFAULT; // type: 420
/** Owner-only file permissions rw-------. Value: 0o600 (384). */
export const FILE_MODE_PRIVATE = FILESYSTEM_VALUES.FILE_MODE_PRIVATE; // type: 384
/** Read-only file permissions r--r--r--. Value: 0o444 (292). */
export const FILE_MODE_READONLY = FILESYSTEM_VALUES.FILE_MODE_READONLY; // type: 292
/** Default directory permissions rwxr-xr-x. Value: 0o755 (493). */
export const DIR_MODE_DEFAULT = FILESYSTEM_VALUES.DIR_MODE_DEFAULT; // type: 493
/** Full permissions for everyone rwxrwxrwx. Value: 0o777 (511). */
export const MODE_ALL = FILESYSTEM_VALUES.MODE_ALL; // type: 511
/** Maximum filename length in bytes on most filesystems (ext4, APFS, NTFS). Value: 255. */
export const MAX_FILENAME_LENGTH = FILESYSTEM_VALUES.MAX_FILENAME_LENGTH; // type: 255
/** Linux PATH_MAX — maximum path length in bytes. Value: 4096. */
export const MAX_PATH_LINUX = FILESYSTEM_VALUES.MAX_PATH_LINUX; // type: 4096
/** Windows legacy MAX_PATH — maximum path length in characters. Value: 260. */
export const MAX_PATH_WINDOWS = FILESYSTEM_VALUES.MAX_PATH_WINDOWS; // type: 260
/** Node.js stream default highWaterMark, in bytes (16 KiB). Value: 16384. */
export const DEFAULT_HIGH_WATER_MARK = FILESYSTEM_VALUES.DEFAULT_HIGH_WATER_MARK; // type: 16384
/** Common 64 KiB read/write chunk size, in bytes. Value: 65536. */
export const STREAM_CHUNK_64K = FILESYSTEM_VALUES.STREAM_CHUNK_64K; // type: 65536
