import { IProduct } from '@/interfaces/product';
import React, { useCallback, useState } from 'react';
import Rating from './Rating';
import QuantityControl from './QuantityControl';
import ProductNavigation from './ProductNavigation';
import { useCartContext } from '@/context/CartContext';
import { isProductInCart } from '@/utils/cart';
import ZoomableImage from './ZoomableImage';
import { motion } from 'framer-motion';
import { fadeIn } from '@/motion/motionSettings';
import ProductDetails from './ProductDetails';
import ProductActions from './ProductActions';

interface ProductOverviewProps {
  product: IProduct;
  products: IProduct[];
}

const ProductOverview = ({ product, products }: ProductOverviewProps) => {
  const { updateCartItemQuantity, addToCart, cartItems } = useCartContext();

  const currentCartItemQuantity =
    cartItems.find((item) => item.id === product.id)?.quantity ?? 0;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = useCallback((quantity: number) => {
    setQuantity(quantity);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (isProductInCart(product.id)) {
      updateCartItemQuantity(product.id, currentCartItemQuantity + quantity);
    } else {
      addToCart(product, quantity);
    }
  }, [
    product.id,
    quantity,
    updateCartItemQuantity,
    addToCart,
    currentCartItemQuantity,
  ]);

  return (
    <section className='container py-12 md:py-24'>
      <ProductNavigation products={products} currentProductId={product.id} />
      <motion.div
        {...fadeIn}
        key={product.id}
        className='flex flex-col md:flex-row gap-20 py-12 shrink'>
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
      </motion.div>
    </section>
  );
};

export default ProductOverview;
