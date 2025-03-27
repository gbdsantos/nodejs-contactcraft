import { env } from '@/env'
import { AppError } from '@/use-cases/errors/app-error'
import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export function errorHandling(
  error: any,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: {
        code: error.errorCode || 'APP_ERROR',
        message: error.message,
      },
    })
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: 'validation error', issues: error.format() })
  }

  return response.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'unknown error',
    },
  })
}
