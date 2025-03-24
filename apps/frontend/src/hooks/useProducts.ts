import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import { Product } from '../types/productTypes';

export const useProducts = (page: number, limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, settotalPages] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getProducts(page, limit);
        settotalPages(res.totalPages);
        setProducts(res.products);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return { products, loading, totalPages };
};
