import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuantityControl from './QuantityControl';
import { ICartItem } from '@/interfaces/product';

interface CartItemProps {
  item: ICartItem;
  handleQuantityChange: (
    quantity: number,
    productId: number | undefined
  ) => void;
  removeCartItem: (productId: number) => void;
}

const CartItem = ({
  item,
  handleQuantityChange,
  removeCartItem,
}: CartItemProps) => {
  return (
    <tr key={item.id} className='border-b-2 my-5'>
      <td className='p-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center'>
        <div className='bg-gray-200 p-4'>
          <Image src={item.image} alt={item.title} width={60} height={60} />
        </div>
        <div className='flex flex-col'>
          <Link href={`/products/${item.id}`} className='text-lg'>
            {item.title.toUpperCase()}
          </Link>
          <h4 className='text-gray-500 text-sm'>${item.price}</h4>
          <div className='sm:hidden mt-2'>
            <QuantityControl
              initialQuantity={item.quantity}
              productId={item.id}
              handleQuantityChange={handleQuantityChange}
            />
          </div>
        </div>
      </td>
      <td className='p-2 hidden sm:table-cell'>
        <QuantityControl
          initialQuantity={item.quantity}
          productId={item.id}
          handleQuantityChange={handleQuantityChange}
        />
      </td>
      <td className='p-2'>
        <button
          onClick={() => removeCartItem(item.id)}
          className='text-gray-500'
          aria-label={`Remove ${item.title} from cart`}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
