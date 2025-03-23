import { getRequest } from '../utils/api';
import { ProductResponse } from '../types/productTypes';

export const getProducts = async (page: number, limit: number): Promise<ProductResponse>=> {
  const response = await getRequest(`/products?page=${page}&limit=${limit}`);
  console.log(response.data)
  return {"products":response.data.data,totalPages:Number(response.data.meta.totalPages)};
};
