// src/eslint-preset.ts
// ESLint helper: feeds every numeric value this library names into the
// `no-magic-numbers` rule's `ignore` list, so those literals stay allowed.
//
// Separate entry point (NOT part of the main barrel) — it's tooling config,
// not a runtime constant. Import via the `magic-num/eslint` subpath:
//
//   import { noMagicNumbersConfig } from 'magic-num/eslint';
//   export default [{ rules: { ...noMagicNumbersConfig } }];
//
// The value list is derived from the package's own exports, so it stays in
// sync automatically as constants are added — no manual regeneration.

import * as MagicNum from './index';

function collectNumbers(source: Record<string, unknown>): number[] {
  const out: number[] = [];
  for (const value of Object.values(source)) {
    if (typeof value === 'number') {
      out.push(value);
    } else if (value && typeof value === 'object') {
      for (const inner of Object.values(value as Record<string, unknown>)) {
        if (typeof inner === 'number') out.push(inner);
      }
    }
  }
  return out;
}

/** Every numeric value named by magic-num, deduplicated and ascending. */
export const MAGIC_NUMBER_VALUES: number[] = Array.from(
  new Set(collectNumbers(MagicNum as Record<string, unknown>)),
).sort((a, b) => a - b);

/** Options for {@link createNoMagicNumbersConfig}. Mirrors `no-magic-numbers` rule options. */
export interface NoMagicNumbersOptions {
  /** Rule severity. Default: 'error'. */
  severity?: 'error' | 'warn';
  /** Extra numeric values to ignore, merged with {@link MAGIC_NUMBER_VALUES}. */
  extraIgnores?: number[];
  /** Allow numbers used as array indexes. Default: true. */
  ignoreArrayIndexes?: boolean;
  /** Allow numbers in default value assignments. Default: false. */
  ignoreDefaultValues?: boolean;
  /** Require magic numbers to be declared with `const`. Default: false. */
  enforceConst?: boolean;
  /** Also flag numbers in object properties. Default: false. */
  detectObjects?: boolean;
}

/** Build a `no-magic-numbers` rule config that ignores all magic-num values, customized via options. */
export function createNoMagicNumbersConfig(options: NoMagicNumbersOptions = {}) {
  const {
    severity = 'error',
    extraIgnores = [],
    ignoreArrayIndexes = true,
    ignoreDefaultValues = false,
    enforceConst = false,
    detectObjects = false,
  } = options;
  const ignore =
    extraIgnores.length === 0
      ? MAGIC_NUMBER_VALUES
      : Array.from(new Set([...MAGIC_NUMBER_VALUES, ...extraIgnores])).sort(
          (a, b) => a - b,
        );
  return {
    'no-magic-numbers': [
      severity,
      {
        ignore,
        ignoreArrayIndexes,
        ignoreDefaultValues,
        enforceConst,
        detectObjects,
      },
    ],
  } as const;
}

/** Ready-to-spread `no-magic-numbers` rule config that ignores all magic-num values. */
export const noMagicNumbersConfig = createNoMagicNumbersConfig();
