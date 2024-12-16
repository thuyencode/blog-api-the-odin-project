import { HttpError } from '@/shared/errors'
import { httpStatusTextByCode } from '@/shared/utils'
import { HttpStatusCode } from 'axios'

/**
 * Used to create objects representing HTTP status code `401 Unauthorized`
 *
 * @class Unauthorized
 * @typedef {Unauthorized}
 * @extends {HttpError}
 */
export class Unauthorized extends HttpError {
  constructor(
    cause:
      | Error
      | string = `${httpStatusTextByCode(HttpStatusCode.Unauthorized)} request`
  ) {
    super(
      httpStatusTextByCode(HttpStatusCode.Unauthorized),
      HttpStatusCode.Unauthorized,
      cause
    )
  }
}
