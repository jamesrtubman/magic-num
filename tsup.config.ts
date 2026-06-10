import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/eslint-preset.ts',
    // Per-module subpath entries (magic-num/<module>)
    'src/http.ts',
    'src/time.ts',
    'src/limits.ts',
    'src/test-data.ts',
    'src/count.ts',
    'src/math.ts',
    'src/ports.ts',
    'src/numeric-max.ts',
    'src/test-config.ts',
    'src/react.ts',
    'src/calendar.ts',
    'src/angles.ts',
    'src/color.ts',
    'src/geo.ts',
    'src/filesystem.ts',
    'src/ascii.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
})
