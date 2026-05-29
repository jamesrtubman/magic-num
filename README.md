# magic-num

Named constants for common magic numbers and strings. Replace bare literals (`200`, `1000`, `"fake@example.com"`) with expressive named values that communicate intent without requiring comments.

```bash
npm install magic-num
```

## Quick Start

```typescript
// ESM / TypeScript (Vitest, modern Node, Vite)
import { HTTP_OK, HttpStatus, ONE_SECOND_MS, FAKE_EMAIL } from 'magic-num';

// CommonJS (Jest default config, legacy Node)
const { HTTP_OK, HttpStatus, ONE_SECOND_MS, FAKE_EMAIL } = require('magic-num');
```

## TypeScript: Literal Types

All constants carry literal types — values are not widened to `number` or `string`:

```typescript
import { HTTP_OK } from 'magic-num';
// typeof HTTP_OK → 200   (not number)

import { FAKE_EMAIL } from 'magic-num';
// typeof FAKE_EMAIL → 'fake@example.com'   (not string)
```

---

## HTTP Status Codes

### Flat exports

| Constant | Value | Meaning |
|----------|-------|---------|
| `HTTP_OK` | `200` | OK |
| `HTTP_CREATED` | `201` | Created |
| `HTTP_ACCEPTED` | `202` | Accepted |
| `HTTP_NO_CONTENT` | `204` | No Content |
| `HTTP_PARTIAL_CONTENT` | `206` | Partial Content |
| `HTTP_MOVED_PERMANENTLY` | `301` | Moved Permanently |
| `HTTP_FOUND` | `302` | Found |
| `HTTP_NOT_MODIFIED` | `304` | Not Modified |
| `HTTP_TEMPORARY_REDIRECT` | `307` | Temporary Redirect |
| `HTTP_PERMANENT_REDIRECT` | `308` | Permanent Redirect |
| `HTTP_BAD_REQUEST` | `400` | Bad Request |
| `HTTP_UNAUTHORIZED` | `401` | Unauthorized |
| `HTTP_FORBIDDEN` | `403` | Forbidden |
| `HTTP_NOT_FOUND` | `404` | Not Found |
| `HTTP_METHOD_NOT_ALLOWED` | `405` | Method Not Allowed |
| `HTTP_CONFLICT` | `409` | Conflict |
| `HTTP_GONE` | `410` | Gone |
| `HTTP_UNSUPPORTED_MEDIA_TYPE` | `415` | Unsupported Media Type |
| `HTTP_UNPROCESSABLE_ENTITY` | `422` | Unprocessable Entity |
| `HTTP_TOO_MANY_REQUESTS` | `429` | Too Many Requests |
| `HTTP_INTERNAL_SERVER_ERROR` | `500` | Internal Server Error |
| `HTTP_NOT_IMPLEMENTED` | `501` | Not Implemented |
| `HTTP_BAD_GATEWAY` | `502` | Bad Gateway |
| `HTTP_SERVICE_UNAVAILABLE` | `503` | Service Unavailable |
| `HTTP_GATEWAY_TIMEOUT` | `504` | Gateway Timeout |

### `HttpStatus` namespace

`HttpStatus` exposes all 25 codes under short keys plus three helper functions:

| Member | Value / Signature |
|--------|-------------------|
| `HttpStatus.OK` | `200` |
| `HttpStatus.CREATED` | `201` |
| `HttpStatus.ACCEPTED` | `202` |
| `HttpStatus.NO_CONTENT` | `204` |
| `HttpStatus.PARTIAL_CONTENT` | `206` |
| `HttpStatus.MOVED_PERMANENTLY` | `301` |
| `HttpStatus.FOUND` | `302` |
| `HttpStatus.NOT_MODIFIED` | `304` |
| `HttpStatus.TEMPORARY_REDIRECT` | `307` |
| `HttpStatus.PERMANENT_REDIRECT` | `308` |
| `HttpStatus.BAD_REQUEST` | `400` |
| `HttpStatus.UNAUTHORIZED` | `401` |
| `HttpStatus.FORBIDDEN` | `403` |
| `HttpStatus.NOT_FOUND` | `404` |
| `HttpStatus.METHOD_NOT_ALLOWED` | `405` |
| `HttpStatus.CONFLICT` | `409` |
| `HttpStatus.GONE` | `410` |
| `HttpStatus.UNSUPPORTED_MEDIA_TYPE` | `415` |
| `HttpStatus.UNPROCESSABLE_ENTITY` | `422` |
| `HttpStatus.TOO_MANY_REQUESTS` | `429` |
| `HttpStatus.INTERNAL_SERVER_ERROR` | `500` |
| `HttpStatus.NOT_IMPLEMENTED` | `501` |
| `HttpStatus.BAD_GATEWAY` | `502` |
| `HttpStatus.SERVICE_UNAVAILABLE` | `503` |
| `HttpStatus.GATEWAY_TIMEOUT` | `504` |
| `HttpStatus.isSuccess(code)` | `(code: number) => boolean` — true when 200–299 |
| `HttpStatus.isClientError(code)` | `(code: number) => boolean` — true when 400–499 |
| `HttpStatus.isServerError(code)` | `(code: number) => boolean` — true when 500–599 |

---

## Time Constants

### Flat exports — milliseconds

| Constant | Value | Meaning |
|----------|-------|---------|
| `ONE_SECOND_MS` | `1000` | 1 second in ms |
| `ONE_MINUTE_MS` | `60000` | 1 minute in ms |
| `ONE_HOUR_MS` | `3600000` | 1 hour in ms |
| `ONE_DAY_MS` | `86400000` | 1 day in ms |
| `ONE_WEEK_MS` | `604800000` | 1 week in ms |

### `TimeMs` namespace

`TimeMs.ONE_SECOND`, `TimeMs.ONE_MINUTE`, `TimeMs.ONE_HOUR`, `TimeMs.ONE_DAY`, `TimeMs.ONE_WEEK` — same values as the flat millisecond exports.

### Flat exports — seconds

| Constant | Value | Meaning |
|----------|-------|---------|
| `ONE_MINUTE_S` | `60` | 1 minute in seconds |
| `ONE_HOUR_S` | `3600` | 1 hour in seconds |
| `ONE_DAY_S` | `86400` | 1 day in seconds |
| `ONE_WEEK_S` | `604800` | 1 week in seconds |

### `TimeS` namespace

`TimeS.ONE_MINUTE`, `TimeS.ONE_HOUR`, `TimeS.ONE_DAY`, `TimeS.ONE_WEEK` — same values as the flat second exports.

---

## Limits

### Flat exports — numeric limits

| Constant | Value | Meaning |
|----------|-------|---------|
| `ZERO` | `0` | Zero |
| `MAX_SAFE_INT` | `9007199254740991` | `Number.MAX_SAFE_INTEGER` (2^53 − 1) |
| `MIN_SAFE_INT` | `-9007199254740991` | `Number.MIN_SAFE_INTEGER` (−(2^53 − 1)) |
| `MAX_INT_32` | `2147483647` | Max signed 32-bit integer (2^31 − 1) |
| `MIN_INT_32` | `-2147483648` | Min signed 32-bit integer (−2^31) |

### `Limits` namespace

`Limits.ZERO`, `Limits.MAX_SAFE_INT`, `Limits.MIN_SAFE_INT`, `Limits.MAX_INT_32`, `Limits.MIN_INT_32` — same values as the flat numeric limit exports.

### Flat exports — byte sizes

| Constant | Value | Meaning |
|----------|-------|---------|
| `ONE_KB` | `1024` | 1 kibibyte |
| `ONE_MB` | `1048576` | 1 mebibyte |
| `ONE_GB` | `1073741824` | 1 gibibyte |

### `Bytes` namespace

`Bytes.ONE_KB`, `Bytes.ONE_MB`, `Bytes.ONE_GB` — same values as the flat byte size exports.

### Flat exports — pagination and string lengths

| Constant | Value | Meaning |
|----------|-------|---------|
| `DEFAULT_PAGE_SIZE` | `20` | Default items per page |
| `MAX_PAGE_SIZE` | `100` | Maximum items per page |
| `MAX_EMAIL_LENGTH` | `254` | RFC 5321 max email address length |
| `MAX_URL_LENGTH` | `2048` | Practical maximum URL length |

### `Pagination` namespace

`Pagination.DEFAULT_PAGE_SIZE`, `Pagination.MAX_PAGE_SIZE`, `Pagination.MAX_EMAIL_LENGTH`, `Pagination.MAX_URL_LENGTH` — same values as the flat pagination exports.

---

## Test Data

### Flat exports — boundary values

| Constant | Value | Meaning |
|----------|-------|---------|
| `NEGATIVE_ONE` | `-1` | Off-by-one sentinel |
| `EMPTY_STRING` | `''` | Empty string boundary |
| `EMPTY_ARRAY_LENGTH` | `0` | Empty array length |

`ZERO` and `MAX_SAFE_INT` are also boundary values — see Limits above.

### `Boundary` namespace

`Boundary.NEGATIVE_ONE`, `Boundary.EMPTY_STRING`, `Boundary.EMPTY_ARRAY_LENGTH`, `Boundary.ZERO`, `Boundary.MAX_SAFE_INT`

### Flat exports — fake / sentinel data

| Constant | Value | Standard |
|----------|-------|---------|
| `FAKE_ID` | `'1'` | Minimal valid string ID |
| `FAKE_UUID` | `'00000000-0000-4000-8000-000000000001'` | Valid UUID v4 format |
| `FAKE_EMAIL` | `'fake@example.com'` | RFC 2606 reserved domain |
| `FAKE_URL` | `'https://fake.example.com'` | RFC 2606 reserved domain |
| `FAKE_TIMESTAMP` | `'1970-01-01T00:00:00.000Z'` | ISO 8601 Unix epoch |

### `TestData` namespace

`TestData.FAKE_ID`, `TestData.FAKE_UUID`, `TestData.FAKE_EMAIL`, `TestData.FAKE_URL`, `TestData.FAKE_TIMESTAMP`

---

## Small Integers

### Flat exports — 1 through 20

| Constant | Value |
|----------|-------|
| `ONE` | `1` |
| `TWO` | `2` |
| `THREE` | `3` |
| `FOUR` | `4` |
| `FIVE` | `5` |
| `SIX` | `6` |
| `SEVEN` | `7` |
| `EIGHT` | `8` |
| `NINE` | `9` |
| `TEN` | `10` |
| `ELEVEN` | `11` |
| `TWELVE` | `12` |
| `THIRTEEN` | `13` |
| `FOURTEEN` | `14` |
| `FIFTEEN` | `15` |
| `SIXTEEN` | `16` |
| `SEVENTEEN` | `17` |
| `EIGHTEEN` | `18` |
| `NINETEEN` | `19` |
| `TWENTY` | `20` |

### `Count` namespace

`Count.ONE` through `Count.TWENTY` — same values as the flat exports above.

### `Retry` namespace (namespace-only)

| Member | Value | Meaning |
|--------|-------|---------|
| `Retry.ONCE` | `1` | Retry once |
| `Retry.TWICE` | `2` | Retry twice |
| `Retry.DEFAULT` | `3` | Conventional default retry count |
| `Retry.MAX` | `5` | Conventional maximum retry count |

### `Calls` namespace (namespace-only)

`Calls.ONE` through `Calls.TEN` — semantic call/assertion counts for use in test spies (e.g. `toHaveBeenCalledTimes(Calls.THREE)`).

---

## Math

### Flat exports — constants

| Constant | Value | Meaning |
|----------|-------|---------|
| `PI` | `3.141592653589793` | π |
| `TAU` | `6.283185307179586` | τ (2π) |
| `E` | `2.718281828459045` | Euler's number |
| `GOLDEN_RATIO` | `1.618033988749895` | φ (golden ratio) |
| `SQRT_2` | `1.4142135623730951` | √2 |
| `SQRT_1_2` | `0.7071067811865476` | √½ |
| `LN_2` | `0.6931471805599453` | ln 2 |
| `LN_10` | `2.302585092994046` | ln 10 |
| `HALF` | `0.5` | One half |
| `QUARTER` | `0.25` | One quarter |
| `THIRD` | `0.3333333333333333` | One third |
| `TWO_THIRDS` | `0.6666666666666666` | Two thirds |
| `THREE_QUARTERS` | `0.75` | Three quarters |
| `HUNDRED_PERCENT` | `100` | 100% scalar |

### Math helpers

Pure functions, exported both at top level and on the `MathConst` namespace:

| Member | Signature | Behaviour |
|--------|-----------|-----------|
| `clamp(n, min, max)` | `(n: number, min: number, max: number) => number` | Constrain `n` to `[min, max]` |
| `isBetween(n, min, max)` | `(n: number, min: number, max: number) => boolean` | True when `min ≤ n ≤ max` (inclusive) |
| `percentOf(n, pct)` | `(n: number, pct: number) => number` | `n * pct / 100` |

### `MathConst` namespace

`MathConst.PI` … `MathConst.HUNDRED_PERCENT` — same values as the flat constants above —
plus `MathConst.clamp`, `MathConst.isBetween`, `MathConst.percentOf`.

> Named `MathConst` (not `Math`) to avoid shadowing the JavaScript global.

---

## Network Ports

### Flat exports

| Constant | Value | Service |
|----------|-------|---------|
| `PORT_FTP` | `21` | FTP |
| `PORT_SSH` | `22` | SSH |
| `PORT_TELNET` | `23` | Telnet |
| `PORT_SMTP` | `25` | SMTP |
| `PORT_DNS` | `53` | DNS |
| `PORT_HTTP` | `80` | HTTP |
| `PORT_POP3` | `110` | POP3 |
| `PORT_HTTPS` | `443` | HTTPS |
| `PORT_MYSQL` | `3306` | MySQL |
| `PORT_POSTGRES` | `5432` | PostgreSQL |
| `PORT_REDIS` | `6379` | Redis |
| `PORT_MONGODB` | `27017` | MongoDB |

### `Ports` namespace

`Ports.FTP`, `Ports.SSH`, `Ports.HTTP`, `Ports.HTTPS`, `Ports.POSTGRES`, … — same values
as the flat exports, under prefix-free keys.

---

## Numeric Maxima

### Flat exports

| Constant | Value | Meaning |
|----------|-------|---------|
| `MAX_UINT8` | `255` | Max unsigned 8-bit integer (2^8 − 1) |
| `MAX_UINT16` | `65535` | Max unsigned 16-bit integer (2^16 − 1) |
| `MAX_UINT32` | `4294967295` | Max unsigned 32-bit integer (2^32 − 1) |
| `RGB_MAX` | `255` | Max 8-bit RGB channel value |
| `ALPHA_MAX` | `255` | Max 8-bit alpha channel value |

### `NumericMax` namespace

`NumericMax.MAX_UINT8`, `NumericMax.MAX_UINT16`, `NumericMax.MAX_UINT32`, `NumericMax.RGB_MAX`,
`NumericMax.ALPHA_MAX` — same values as the flat exports.

> These are **unsigned** maxima. The signed 32-bit max lives in Limits as `MAX_INT_32` (`2147483647`).

---

## Test Framework Defaults

Default magic numbers baked into common test frameworks. Flat exports are framework-prefixed;
namespaces are framework-scoped.

### `JestDefaults` — `JEST_*`

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `JestDefaults.TEST_TIMEOUT_MS` | `JEST_TEST_TIMEOUT_MS` | `5000` | Default `testTimeout` |

### `VitestDefaults` — `VITEST_*`

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `VitestDefaults.TEST_TIMEOUT_MS` | `VITEST_TEST_TIMEOUT_MS` | `5000` | Default `testTimeout` |
| `VitestDefaults.HOOK_TIMEOUT_MS` | `VITEST_HOOK_TIMEOUT_MS` | `10000` | Default `hookTimeout` |

### `PlaywrightDefaults` — `PLAYWRIGHT_*`

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `PlaywrightDefaults.TIMEOUT_MS` | `PLAYWRIGHT_TIMEOUT_MS` | `30000` | Default test timeout |
| `PlaywrightDefaults.EXPECT_TIMEOUT_MS` | `PLAYWRIGHT_EXPECT_TIMEOUT_MS` | `5000` | Default `expect` timeout |
| `PlaywrightDefaults.VIEWPORT_WIDTH` | `PLAYWRIGHT_VIEWPORT_WIDTH` | `1280` | Default viewport width |
| `PlaywrightDefaults.VIEWPORT_HEIGHT` | `PLAYWRIGHT_VIEWPORT_HEIGHT` | `720` | Default viewport height |

### `CypressDefaults` — `CYPRESS_*`

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `CypressDefaults.DEFAULT_COMMAND_TIMEOUT_MS` | `CYPRESS_DEFAULT_COMMAND_TIMEOUT_MS` | `4000` | `defaultCommandTimeout` |
| `CypressDefaults.PAGE_LOAD_TIMEOUT_MS` | `CYPRESS_PAGE_LOAD_TIMEOUT_MS` | `60000` | `pageLoadTimeout` |
| `CypressDefaults.REQUEST_TIMEOUT_MS` | `CYPRESS_REQUEST_TIMEOUT_MS` | `5000` | `requestTimeout` |
| `CypressDefaults.RESPONSE_TIMEOUT_MS` | `CYPRESS_RESPONSE_TIMEOUT_MS` | `30000` | `responseTimeout` |
| `CypressDefaults.VIEWPORT_WIDTH` | `CYPRESS_VIEWPORT_WIDTH` | `1000` | `viewportWidth` |
| `CypressDefaults.VIEWPORT_HEIGHT` | `CYPRESS_VIEWPORT_HEIGHT` | `660` | `viewportHeight` |

---

## React Ecosystem Defaults

Default magic numbers from common React-ecosystem libraries. (React core exposes no stable
public numeric defaults, so it is intentionally excluded.)

### `ReactTestingLibrary` — `RTL_*`

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `ReactTestingLibrary.ASYNC_UTIL_TIMEOUT_MS` | `RTL_ASYNC_UTIL_TIMEOUT_MS` | `1000` | `asyncUtilTimeout` |
| `ReactTestingLibrary.POLL_INTERVAL_MS` | `RTL_POLL_INTERVAL_MS` | `50` | `waitFor` poll interval |

### `ReactQuery` — `RQ_*` (TanStack Query v5)

| Member | Flat export | Value | Meaning |
|--------|-------------|-------|---------|
| `ReactQuery.GC_TIME_MS` | `RQ_GC_TIME_MS` | `300000` | `gcTime` (5 min) |
| `ReactQuery.STALE_TIME_MS` | `RQ_STALE_TIME_MS` | `0` | `staleTime` |
| `ReactQuery.DEFAULT_RETRY` | `RQ_DEFAULT_RETRY` | `3` | Query `retry` count |
| `ReactQuery.RETRY_DELAY_BASE_MS` | `RQ_RETRY_DELAY_BASE_MS` | `1000` | `retryDelay` base |
| `ReactQuery.RETRY_DELAY_MAX_MS` | `RQ_RETRY_DELAY_MAX_MS` | `30000` | `retryDelay` cap |

> v5 renamed v4's `cacheTime` to `gcTime`.

---

## Usage Examples

### Jest (CommonJS)

```javascript
const { HTTP_OK, HTTP_NOT_FOUND, HttpStatus } = require('magic-num');

describe('API response handling', () => {
  test('success response', () => {
    const response = { status: 200 };
    expect(response.status).toBe(HTTP_OK);
    expect(HttpStatus.isSuccess(response.status)).toBe(true);
  });

  test('not found response', () => {
    const response = { status: 404 };
    expect(response.status).toBe(HTTP_NOT_FOUND);
    expect(HttpStatus.isClientError(response.status)).toBe(true);
  });
});

const { FAKE_EMAIL, FAKE_UUID, FAKE_URL } = require('magic-num');

test('creates user with test data', () => {
  const user = createUser({ email: FAKE_EMAIL, id: FAKE_UUID });
  expect(user.email).toBe(FAKE_EMAIL);
});

const { ONE_SECOND_MS, ONE_HOUR_S } = require('magic-num');

test('token expiry is set to 1 hour', () => {
  const token = createToken({ expiresIn: ONE_HOUR_S }); // 3600
  expect(token.expiresIn).toBe(3600);
});

const { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } = require('magic-num');

test('pagination defaults', () => {
  expect(getPage().size).toBe(DEFAULT_PAGE_SIZE); // 20
  expect(getPage({ size: 9999 }).size).toBeLessThanOrEqual(MAX_PAGE_SIZE); // 100
});

const { Retry, Calls, THREE } = require('magic-num');

test('retries with default count', () => {
  const client = createClient({ retries: Retry.DEFAULT }); // 3
  expect(client.retries).toBe(THREE);
});

test('spy called expected number of times', () => {
  expect(mockFn).toHaveBeenCalledTimes(Calls.TWO); // 2
});
```

### Vitest (ESM / TypeScript)

```typescript
import { describe, test, expect } from 'vitest';
import { HTTP_OK, HTTP_NOT_FOUND, HttpStatus } from 'magic-num';

describe('API response handling', () => {
  test('success response', () => {
    const response = { status: 200 as const };
    expect(response.status).toBe(HTTP_OK);
    expect(HttpStatus.isSuccess(response.status)).toBe(true);
  });

  test('not found response', () => {
    const response = { status: 404 as const };
    expect(response.status).toBe(HTTP_NOT_FOUND);
    expect(HttpStatus.isClientError(response.status)).toBe(true);
  });
});

import { FAKE_EMAIL, FAKE_UUID } from 'magic-num';

test('creates user with test data', () => {
  const user = createUser({ email: FAKE_EMAIL, id: FAKE_UUID });
  expect(user.email).toBe(FAKE_EMAIL);
});

import { ONE_SECOND_MS, ONE_HOUR_S } from 'magic-num';

test('polling interval uses one-second delay', () => {
  expect(POLL_INTERVAL).toBe(ONE_SECOND_MS); // 1000
});

test('token expiry is set to 1 hour', () => {
  const token = createToken({ expiresIn: ONE_HOUR_S }); // 3600
  expect(token.expiresIn).toBe(3600);
});

import { Retry, Calls, THREE } from 'magic-num';

test('retries with default count', () => {
  const client = createClient({ retries: Retry.DEFAULT }); // 3
  expect(client.retries).toBe(THREE);
});

test('spy called expected number of times', () => {
  expect(mockFn).toHaveBeenCalledTimes(Calls.TWO); // 2
});

import { NEGATIVE_ONE, EMPTY_STRING, Boundary } from 'magic-num';

test('boundary values', () => {
  expect(findIndex([])).toBe(NEGATIVE_ONE);          // -1
  expect(trimInput('')).toBe(EMPTY_STRING);           // ''
  expect(Boundary.EMPTY_ARRAY_LENGTH).toBe(0);
});

import { MAX_SAFE_INT, ONE_MB, DEFAULT_PAGE_SIZE } from 'magic-num';

test('limits', () => {
  expect(MAX_SAFE_INT).toBe(9007199254740991);
  expect(ONE_MB).toBe(1048576);
  expect(DEFAULT_PAGE_SIZE).toBe(20);
});
```

---

## License

MIT — see [LICENSE](./LICENSE)
