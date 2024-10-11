import { useCartContext } from '@/context/CartContext';
import Link from 'next/link';
import React, { useMemo } from 'react';

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
              <Link href='/' className='hover:underline focus:underline'>
                HOME
              </Link>
            </li>
            <li className='text-base'>
              <a href='#products'>SHOP</a>
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
