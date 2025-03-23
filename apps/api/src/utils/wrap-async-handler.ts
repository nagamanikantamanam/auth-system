import { Request, Response, NextFunction } from 'express';

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const wrapErrorHandler = (controller: AsyncController) => {
    console.log("wrapper called")
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: any) {
        console.log("catch called")
      next(error);
    }
  };
};
