// @ts-ignore
import { match } from 'ts-pattern';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import PaginationComponent from '../common/Pagination';
import { useProducts } from '../../hooks/useProducts';
import { useState } from 'react';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 12;
  const { products, loading, totalPages } = useProducts(page, productsPerPage);

  return (
    <div>
      {match(loading)
        .with(true, () => (
          <Grid container justifyContent="center" spacing={2} columns={12}>
            {Array.from({ length: 12 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </Grid>
        ))
        .with(false, () => (
          <>
            <Grid container justifyContent="center" spacing={2} columns={12}>
              {products?.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <PaginationComponent
              totalPages={totalPages}
              currentPage={page}
              onPageChange={(_, value) => setPage(value)}
            />
          </>
        ))

        .exhaustive()}
    </div>
  );
};

export default ProductList;
