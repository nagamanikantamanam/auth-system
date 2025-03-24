import { Request, Response, NextFunction } from 'express';
import { wrapErrorHandler } from '../../../utils/wrap-async-handler';
import { getPaginatedProducts } from './products-list.service';
import { z } from 'zod';
import { ApiError } from '../../../utils/api-error';

const paginationSchema = z.object({
  page: z
    .string()
    .regex(/^\d+$/, { message: 'Page must be a positive number' })
    .transform(Number)
    .refine((val) => val >= 1, { message: 'Page must be at least 1' }),

  limit: z
    .string()
    .regex(/^\d+$/, { message: 'Limit must be a positive number' })
    .transform(Number)
    .refine((val) => val >= 1 && val <= 100, {
      message: 'Limit must be between 1 and 100',
    }),
});

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit } = paginationSchema.parse(req.query);

  const result = await getPaginatedProducts(page, limit);

  res.status(200).json({
    success: true,
    data: result.products,
    meta: result.meta,
  });
};
