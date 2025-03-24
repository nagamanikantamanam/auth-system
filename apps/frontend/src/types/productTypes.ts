export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  description:string;
}

export interface ProductResponse {
  products: Product[];
  totalPages: number;
}
