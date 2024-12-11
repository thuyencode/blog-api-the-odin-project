/* eslint-disable @typescript-eslint/no-explicit-any -- This is fine */
import type e from 'express'
import v from '../../shared/validation'
import type { NullableKeys } from '../types/helpers'

export const validateReqBody =
  <T>(
    schema: v.BaseSchema<unknown, unknown, any>
  ): e.RequestHandler<unknown, unknown, NullableKeys<T>, unknown> =>
  (req, _res, next) => {
    try {
      v.parse(schema, req.body)
      next()
    } catch (error) {
      next(error)
    }
  }

export const validateReqQuery =
  <T>(
    schema: v.BaseSchema<unknown, unknown, any>
  ): e.RequestHandler<unknown, unknown, unknown, NullableKeys<T>> =>
  (req, _res, next) => {
    try {
      v.parse(schema, req.query)
      next()
    } catch (error) {
      next(error)
    }
  }
