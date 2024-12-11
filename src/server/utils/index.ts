import { HttpStatusCode } from 'axios'

export const httpStatusTextByCode = (code: HttpStatusCode): string =>
  HttpStatusCode[code]

export const getUserNotFoundMessage = (username: string): string =>
  `Username '${username}' not found`
