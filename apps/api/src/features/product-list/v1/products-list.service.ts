import { getProductsWithPagination } from './products-list.repository';

export const getPaginatedProducts = async (page: number, limit: number) => {
  const start = (page - 1) * limit;

  const products = await getProductsWithPagination(limit, start);
  const totalRecords = products[0].total_records;
  const totalPages = Math.ceil(totalRecords / limit);

  return {
    products,
    meta: {
      totalRecords,
      totalPages,
      currentPage: page,
      perPage: limit,
    },
  };
};
