import React from 'react';
import { IProduct } from '@/interfaces/product';
import Product from './Product';

interface ProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <section
      id='products'
      className='container grid py-12 md:py-24 gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </section>
  );
};

export default ProductList;
