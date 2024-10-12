import React, { useCallback, useState } from 'react';
import { IProduct } from '@/interfaces/product';
import { useCartContext } from '@/context/CartContext';
import { isProductInCart } from '@/utils/cart';
import ProductNavigation from './ProductNavigation';
import ZoomableImage from './ZoomableImage';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';
import Notification from './Notification';

interface ProductOverviewProps {
  product: IProduct;
  products: IProduct[];
}

const ProductOverview = ({ product, products }: ProductOverviewProps) => {
  const { updateCartItemQuantity, addToCart, cartItems } = useCartContext();

  const currentCartItemQuantity =
    cartItems.find((item) => item.id === product.id)?.quantity ?? 0;

  const [quantity, setQuantity] = useState<number>(1);
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  const handleQuantityChange = useCallback((quantity: number) => {
    setQuantity(quantity);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (isProductInCart(product.id)) {
      updateCartItemQuantity(product.id, currentCartItemQuantity + quantity);
    } else {
      addToCart(product, quantity);
    }
    setNotificationMessage(`${quantity} items Added to cart!`);
  }, [
    product.id,
    quantity,
    updateCartItemQuantity,
    addToCart,
    currentCartItemQuantity,
  ]);

  const closeNotification = () => {
    setNotificationMessage('');
  };

  return (
    <section className='container py-12 md:py-24'>
      <Notification
        message={notificationMessage}
        isVisible={!!notificationMessage}
        onClose={closeNotification}
      />
      <ProductNavigation products={products} currentProductId={product.id} />
      <div
        key={product.id}
        className={`flex flex-col md:flex-row gap-20 py-12 shrink animate-fade-in`}>
        <div className='flex-1 p-6 md:p-12 lg:p-24 bg-gray-100'>
          <ZoomableImage
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className='flex-1'>
          <ProductDetails product={product} />
          <ProductActions
            handleQuantityChange={handleQuantityChange}
            productId={product.id}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
