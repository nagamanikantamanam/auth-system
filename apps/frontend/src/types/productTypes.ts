export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    discount: number;
  }
  
  export interface ProductResponse {
    products: Product[];
    totalPages: number;
  }
  