import type { HttpStatusCode } from 'axios'
/**
 * The base class representing HTTP response status codes
 *
 * @class HttpError
 * @typedef {HttpError}
 * @extends {Error}
 */
export class HttpError extends Error {
  statusCode: HttpStatusCode
  cause?: unknown

  constructor(message: string, statusCode: HttpStatusCode, cause?: unknown) {
    super(message)
    this.statusCode = statusCode
    this.cause = cause
  }
}
