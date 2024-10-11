import React from 'react';
import { IProduct } from '@/interfaces/product';
import Rating from './Rating';

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <h2 className='text-3xl font-semibold'>{product.title}</h2>
      <span className='text-lg'>{product.price}$</span>
      <div className='my-12'>
        <Rating count={product.rating.count} rate={product.rating.rate} />
        <p className='text-gray-400 leading-loose mt-3'>
          {product.description}
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
