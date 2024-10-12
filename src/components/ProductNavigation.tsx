import React from 'react';
import Link from 'next/link';
import { IProduct } from '@/interfaces/product';

interface ProductsNavigationProps {
  currentProductId: number;
  products: IProduct[];
}

const ProductsNavigation = ({
  products,
  currentProductId,
}: ProductsNavigationProps) => {
  const currentProductIndex = products.findIndex(
    (product) => product.id === currentProductId
  );

  const getSurroundingProductIndexes = (index: number) => {
    const prevIndex = index === 0 ? products.length - 1 : index - 1;
    const nextIndex = index === products.length - 1 ? 0 : index + 1;
    return { prevIndex, nextIndex };
  };

  const { prevIndex, nextIndex } =
    getSurroundingProductIndexes(currentProductIndex);

  const prevProduct = products[prevIndex].id;
  const nextProduct = products[nextIndex].id;

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
