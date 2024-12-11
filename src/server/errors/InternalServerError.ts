import { HttpError } from '@/shared/errors'
import { HttpStatusCode } from 'axios'
import { httpStatusTextByCode } from '../utils'

/**
 * Used to create objects representing HTTP status code `500 Internal Server Error`
 *
 * @class InternalServerError
 * @typedef {InternalServerError}
 * @extends {HttpError}
 */
export class InternalServerError extends HttpError {
  constructor(cause: Error | string) {
    super(
      httpStatusTextByCode(HttpStatusCode.InternalServerError),
      HttpStatusCode.InternalServerError,
      cause
    )
  }
}
