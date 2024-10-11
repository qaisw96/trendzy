import React from 'react';
import QuantityControl from './QuantityControl';

interface ProductActionsProps {
  productId: number;
  handleQuantityChange: (quantity: number) => void;
  handleAddToCart: () => void;
}

const ProductActions = ({
  productId,
  handleQuantityChange,
  handleAddToCart,
}: ProductActionsProps) => {
  return (
    <div className='flex flex-col md:flex-row gap-6 tracking-wider'>
      <QuantityControl
        handleQuantityChange={handleQuantityChange}
        productId={productId}
      />
      <button
        onClick={handleAddToCart}
        className='bg-stone-700 py-3 px-10 text-white text-sm'
        aria-label='Add to cart'>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductActions;
