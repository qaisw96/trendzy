import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext';
import { IProduct } from '@/interfaces/product';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const { addToCart, cartItems } = useCartContext();

  const quantity =
    cartItems.find((item) => item.id === product.id)?.quantity ?? 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className='relative animate-fade-in-up group border-2 border-slate-200 h-full p-2 md:p-12'>
      <div className='w-full h-full'>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className='w-full h-full transition-opacity duration-700 group-hover:opacity-20'
        />
      </div>
      <div className='absolute p-4 inset-0 flex gap-3 flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
        <Link
          href={`/products/${product.id}`}
          className='text-sm md:text-lg font-semibold'>
          {product.title}
        </Link>
        {quantity ? (
          <Link className='underline' href='/cart'>
            VIEW CART
          </Link>
        ) : (
          <button
            onClick={handleAddToCart}
            className='underline'
            aria-label={`Add ${product.title} to cart`}>
            ADD TO CART
          </button>
        )}
        <p className='text-gray-800'>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
