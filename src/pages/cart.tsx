import { useCartContext } from '@/context/CartContext';
import React, { useMemo } from 'react';
import Layout from '@/components/Layout';
import CartTable from '@/components/CartTable';

const Cart = () => {
  const { cartItems } = useCartContext();

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => item.price * item.quantity + acc, 0);
  }, [cartItems]);

  return (
    <Layout>
      <section className='container mx-auto py-12 md:py-24 h-screen'>
        <h1 className='text-3xl mb-4'>SHOPPING CART</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <CartTable />
            <h2 className='text-lg mt-8'>
              TOTAL AMOUNT{' '}
              <span className='font-semibold'>{totalAmount.toFixed(2)}$</span>
            </h2>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
