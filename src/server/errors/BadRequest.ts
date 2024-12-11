import { HttpError } from '@/shared/errors'
import { HttpStatusCode } from 'axios'
import { httpStatusTextByCode } from '../utils'

/**
 * Used to create objects representing HTTP status code `400 Bad Request`
 *
 * @class BadRequest
 * @typedef {BadRequest}
 * @extends {HttpError}
 */
export class BadRequest extends HttpError {
  constructor(cause: unknown) {
    super(
      httpStatusTextByCode(HttpStatusCode.BadRequest),
      HttpStatusCode.BadRequest,
      cause
    )
  }
}
