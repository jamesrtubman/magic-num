# magic-num

## 0.5.0

### Minor Changes

- ebc2b0c: Add math, network ports, numeric-max, test-config, and react constant modules (plus clamp/isBetween/percentOf math helpers).
- 974b357: Round 3 enhancements:
  - New `FileSystem` module: permission modes (0o644, 0o755, …), path/name length limits, stream buffer sizes
  - New `Ascii` and `Unicode` modules: char codes, printable ranges, code-point boundaries
  - `HttpStatus.isInformational` and `HttpStatus.isRedirect` predicates complete the range-check family
  - Configurable ESLint preset: `createNoMagicNumbersConfig(options)` factory (severity, extraIgnores, rule flags)
  - Per-module subpath exports: `magic-num/http`, `magic-num/time`, `magic-num/filesystem`, etc.
