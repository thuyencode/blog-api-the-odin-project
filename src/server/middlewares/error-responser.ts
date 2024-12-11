import type { HttpError } from '@/shared/errors'
import type { ErrorRequestHandler } from 'express'
import { InternalServerError } from '../errors'

export const errorResponser: ErrorRequestHandler = (
  err: HttpError,
  req,
  res,
  next
) => {
  const error = {
    statusCode: err.statusCode,
    message: err.message,
    cause: err.cause
  }

  if (err instanceof InternalServerError) {
    const { cause, ...rest } = error

    return res.status(err.statusCode).json(rest)
  }

  res.status(err.statusCode).json(error)
}
