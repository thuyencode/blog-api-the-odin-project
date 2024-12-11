import type { HttpError } from '@/shared/errors'
import { typeLog, types } from '@hikyu/log'
import type e from 'express'
import { InternalServerError } from '../errors'

export const internalServerErrorLogger: e.ErrorRequestHandler = (
  err: HttpError,
  req,
  res,
  next
) => {
  if (err instanceof InternalServerError) {
    typeLog(types.ERROR, err)
  }

  next(err)
}
