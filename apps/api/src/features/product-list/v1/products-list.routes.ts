import { Router } from 'express';
import { getProducts } from './products-list.controller';
import { wrapErrorHandler } from '../../../utils/wrap-async-handler';
const productsRouter = Router();

productsRouter.get('/', wrapErrorHandler(getProducts));

export default productsRouter;
