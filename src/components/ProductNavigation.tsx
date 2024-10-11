import { IProduct } from '@/interfaces/product';
import Link from 'next/link';
import React from 'react';

interface ProductsNavigationProps {
  currentProductId: number;
  products: IProduct[];
}

const ProductsNavigation = ({
  products,
  currentProductId,
}: ProductsNavigationProps) => {
  const currentIndex = products.findIndex((p) => p.id === currentProductId);

  const prevProductIndex =
    currentIndex === 0 ? products.length - 1 : currentIndex - 1;
  const nextProductIndex =
    currentIndex === products.length - 1 ? 0 : currentIndex + 1;

  const prevProduct = products[prevProductIndex].id;
  const nextProduct = products[nextProductIndex].id;

  return (
    <div className='flex justify-between'>
      <Link
        className='py-3 px-7 bg-gray-300 underline'
        href={`/products/${prevProduct}`}
        aria-label='Previous Product'>
        Prev
      </Link>
      <Link
        className='py-3 px-7 bg-gray-300 underline'
        href={`/products/${nextProduct}`}
        aria-label='Next Product'>
        Next
      </Link>
    </div>
  );
};

export default ProductsNavigation;
