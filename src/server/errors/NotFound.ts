import { HttpError } from '@/shared/errors'
import { HttpStatusCode } from 'axios'
import { httpStatusTextByCode } from '../utils'

/**
 * Used to create objects representing HTTP status code `404 Not Found`
 *
 * @class NotFound
 * @typedef {NotFound}
 * @extends {HttpError}
 */
export class NotFound extends HttpError {
  constructor() {
    super(
      httpStatusTextByCode(HttpStatusCode.NotFound),
      HttpStatusCode.NotFound
    )
  }
}
