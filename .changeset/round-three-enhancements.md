---
"magic-num": minor
---

Round 3 enhancements:

- New `FileSystem` module: permission modes (0o644, 0o755, …), path/name length limits, stream buffer sizes
- New `Ascii` and `Unicode` modules: char codes, printable ranges, code-point boundaries
- `HttpStatus.isInformational` and `HttpStatus.isRedirect` predicates complete the range-check family
- Configurable ESLint preset: `createNoMagicNumbersConfig(options)` factory (severity, extraIgnores, rule flags)
- Per-module subpath exports: `magic-num/http`, `magic-num/time`, `magic-num/filesystem`, etc.
