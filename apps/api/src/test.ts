import { Request, Response } from "express";
import {envConfig} from './config/env.config';
import { ApiError } from "./utils/api-error";

export const test = (req: Request, res: Response): Promise<void> => {
    throw new ApiError('eroor ',404);
  res.status(200).send("Test success");
};
