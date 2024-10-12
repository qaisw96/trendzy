import React, { useMemo } from 'react';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext';

const Header = () => {
  const { cartItems } = useCartContext();

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
  }, [cartItems]);

  return (
    <header className='py-6 md:py-8'>
      <div className='container flex justify-between items-center'>
        <Link href='/' className='text-slate-700 font-bold text-2xl'>
          Trendzy
        </Link>
        <nav>
          <ul className='flex gap-8'>
            <li className='text-base'>
              <Link
                href='/#products'
                className='hover:underline focus:underline'>
                SHOP
              </Link>
            </li>
            <li className='text-base flex gap-1'>
              <Link href='/cart' className='hover:underline focus:underline'>
                CART
              </Link>
              <h3 aria-label={`Cart contains ${cartCount} items`}>
                ({cartCount})
              </h3>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
