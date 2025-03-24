import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../utils/api-error';
import { z } from 'zod';
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.instanceof);
  if (err instanceof z.ZodError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Invalid input data',
      errors: err.format(),
    });
  }
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }
  if (err instanceof SyntaxError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid JSON format',
    });
  }
  if (err.type === 'entity.too.large') {
    res.status(StatusCodes.REQUEST_TOO_LONG).json({
      error: 'JSON payload too large',
    });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: 'Internal Server Error',
  });
};

export const jsonErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Middleware executed');

  if (err instanceof SyntaxError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid JSON format',
    });
  }

  if (err.type === 'entity.too.large') {
    res.status(StatusCodes.REQUEST_TOO_LONG).json({
      error: 'JSON payload too large',
    });
  }

  next(err);
};
