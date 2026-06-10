// src/http.ts
// 25 most common HTTP status codes for v1.
// Pattern: private `as const` source object → spread into HttpStatus namespace
// (with helpers) → direct property reference for flat HTTP_* exports.
// Verified by tsc --noEmit --strict during phase 2 research.

const HTTP_CODES = {
  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  PARTIAL_CONTENT: 206,
  // 3xx Redirect
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  // 4xx Client Error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  GONE: 410,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  // 5xx Server Error
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

/** HTTP status codes plus `isInformational` / `isSuccess` / `isRedirect` / `isClientError` / `isServerError` range predicates. */
export const HttpStatus = {
  ...HTTP_CODES,
  /** True for 1xx status codes. */
  isInformational(code: number): boolean {
    return code >= 100 && code < 200;
  },
  /** True for 2xx status codes. */
  isSuccess(code: number): boolean {
    return code >= 200 && code < 300;
  },
  /** True for 3xx status codes. */
  isRedirect(code: number): boolean {
    return code >= 300 && code < 400;
  },
  /** True for 4xx status codes. */
  isClientError(code: number): boolean {
    return code >= 400 && code < 500;
  },
  /** True for 5xx status codes. */
  isServerError(code: number): boolean {
    return code >= 500 && code < 600;
  },
} as const;

/** 200 OK — request succeeded. */
export const HTTP_OK = HTTP_CODES.OK;
/** 201 Created. */
export const HTTP_CREATED = HTTP_CODES.CREATED;
/** 202 Accepted. */
export const HTTP_ACCEPTED = HTTP_CODES.ACCEPTED;
/** 204 No Content. */
export const HTTP_NO_CONTENT = HTTP_CODES.NO_CONTENT;
/** 206 Partial Content. */
export const HTTP_PARTIAL_CONTENT = HTTP_CODES.PARTIAL_CONTENT;
/** 301 Moved Permanently. */
export const HTTP_MOVED_PERMANENTLY = HTTP_CODES.MOVED_PERMANENTLY;
/** 302 Found. */
export const HTTP_FOUND = HTTP_CODES.FOUND;
/** 304 Not Modified. */
export const HTTP_NOT_MODIFIED = HTTP_CODES.NOT_MODIFIED;
/** 307 Temporary Redirect. */
export const HTTP_TEMPORARY_REDIRECT = HTTP_CODES.TEMPORARY_REDIRECT;
/** 308 Permanent Redirect. */
export const HTTP_PERMANENT_REDIRECT = HTTP_CODES.PERMANENT_REDIRECT;
/** 400 Bad Request. */
export const HTTP_BAD_REQUEST = HTTP_CODES.BAD_REQUEST;
/** 401 Unauthorized. */
export const HTTP_UNAUTHORIZED = HTTP_CODES.UNAUTHORIZED;
/** 403 Forbidden. */
export const HTTP_FORBIDDEN = HTTP_CODES.FORBIDDEN;
/** 404 Not Found. */
export const HTTP_NOT_FOUND = HTTP_CODES.NOT_FOUND;
/** 405 Method Not Allowed. */
export const HTTP_METHOD_NOT_ALLOWED = HTTP_CODES.METHOD_NOT_ALLOWED;
/** 409 Conflict. */
export const HTTP_CONFLICT = HTTP_CODES.CONFLICT;
/** 410 Gone. */
export const HTTP_GONE = HTTP_CODES.GONE;
/** 415 Unsupported Media Type. */
export const HTTP_UNSUPPORTED_MEDIA_TYPE = HTTP_CODES.UNSUPPORTED_MEDIA_TYPE;
/** 422 Unprocessable Entity. */
export const HTTP_UNPROCESSABLE_ENTITY = HTTP_CODES.UNPROCESSABLE_ENTITY;
/** 429 Too Many Requests. */
export const HTTP_TOO_MANY_REQUESTS = HTTP_CODES.TOO_MANY_REQUESTS;
/** 500 Internal Server Error. */
export const HTTP_INTERNAL_SERVER_ERROR = HTTP_CODES.INTERNAL_SERVER_ERROR;
/** 501 Not Implemented. */
export const HTTP_NOT_IMPLEMENTED = HTTP_CODES.NOT_IMPLEMENTED;
/** 502 Bad Gateway. */
export const HTTP_BAD_GATEWAY = HTTP_CODES.BAD_GATEWAY;
/** 503 Service Unavailable. */
export const HTTP_SERVICE_UNAVAILABLE = HTTP_CODES.SERVICE_UNAVAILABLE;
/** 504 Gateway Timeout. */
export const HTTP_GATEWAY_TIMEOUT = HTTP_CODES.GATEWAY_TIMEOUT;
