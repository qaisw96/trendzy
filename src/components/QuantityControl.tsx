import React, { useState } from 'react';

interface QuantityControlProps {
  productId: number;
  handleQuantityChange: (
    quantity: number,
    productId?: number | undefined
  ) => void;
  initialQuantity?: number;
}

const QuantityControl = ({
  productId,
  handleQuantityChange,
  initialQuantity = 1,
}: QuantityControlProps) => {
  const [quantityInput, setQuantityInput] = useState<number>(
    () => initialQuantity
  );

  const handleIncrease = () => {
    const newQuantity = quantityInput + 1;
    setQuantityInput(newQuantity);
    handleQuantityChange(newQuantity, productId);
  };

  const handleDecrease = () => {
    if (quantityInput > 1) {
      const newQuantity = quantityInput - 1;
      setQuantityInput(newQuantity);
      handleQuantityChange(newQuantity, productId);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;

    if (!Number.isNaN(value) && value >= 1) {
      setQuantityInput(value);
      handleQuantityChange(value, productId);
    }
  };

  return (
    <div className='border-2 border-gray-300 px-4 py-3 md:w-fit text-gray-500 text-center min-w-[205px]'>
      <span className='mr-8'>Quantity</span>
      <button
        onClick={handleDecrease}
        disabled={quantityInput === 1}
        aria-label='Decrease quantity'>
        &lt;
      </button>
      <input
        type='number'
        className='w-10 text-center mx-2'
        value={quantityInput}
        onChange={handleChange}
        min={1}
      />
      <button onClick={handleIncrease} aria-label='Increase quantity'>
        &gt;
      </button>
    </div>
  );
};

export default React.memo(QuantityControl);
