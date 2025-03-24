import { off } from 'process';
import { db } from '../../../db/db';

export const getProductsWithPagination = async (
  limit: number,
  offset: number
) => {
  const query = `
      SELECT *, COUNT(*) OVER() AS total_records
      FROM products
      ORDER BY _id
      LIMIT $<limit> OFFSET $<offset>
    `;

  return db.many(query, { limit, offset });
};
