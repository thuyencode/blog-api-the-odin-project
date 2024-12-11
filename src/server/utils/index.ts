import { HttpStatusCode } from 'axios'

export const httpStatusTextByCode = (code: HttpStatusCode): string =>
  HttpStatusCode[code]
