import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import * as Cart from '@/utils/cart';
import { IProduct, ICartItem } from '@/interfaces/product';

interface CartContextType {
  cartItems: ICartItem[];
  addToCart: (product: IProduct, quantity?: number) => void;
  removeCartItem: (productId: number) => void;
  updateCartItemQuantity: (cartItemId: number, quantity: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (product: IProduct, quantity: number = 1) => {
    const updatedCart = Cart.addItemToCart(product, quantity);
    setCartItems(updatedCart);
  };

  const updateCartItemQuantity = (cartItemId: number, quantity: number) => {
    const updatedCart = Cart.updateCartItemQuantity(cartItemId, quantity);
    setCartItems(updatedCart);
  };

  const removeCartItem = (productId: number) => {
    const updatedCart = Cart.removeItemFromCart(productId);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    setCartItems(Cart.getCartItems());
  }, []);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeCartItem,
      updateCartItemQuantity,
    }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used in CartProvider');
  }
  return context;
};

export default CartProvider;
