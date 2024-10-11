import { useCartContext } from '@/context/CartContext';
import React, { useCallback } from 'react';
import CartItem from './CartItem';

const CartTable = () => {
  const { removeCartItem, cartItems, updateCartItemQuantity } =
    useCartContext();

  const handleQuantityChange = useCallback(
    (quantity: number, productId: number | undefined) => {
      updateCartItemQuantity(productId as number, quantity);
    },
    [updateCartItemQuantity]
  );

  return (
    <table className='w-full border-collapse mt-12'>
      <tbody>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleQuantityChange={handleQuantityChange}
            removeCartItem={removeCartItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
