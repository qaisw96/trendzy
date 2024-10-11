import { ICartItem, IProduct } from '@/interfaces/product';

const CART_KEY = 'cart';

const getCartFromLocalStorage = (): ICartItem[] => {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Failed to fetch cart from localStorage', error);
    return [];
  }
};

const saveCartToLocalStorage = (cart: ICartItem[]) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage', error);
  }
};

export const getCartItems = getCartFromLocalStorage;

export const addItemToCart = (
  product: IProduct,
  quantity: number = 1
): ICartItem[] => {
  const cart = getCartFromLocalStorage();
  const newProduct = { ...product, quantity };
  const updatedCart = [...cart, newProduct];
  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};

export const removeItemFromCart = (cartItemId: number): ICartItem[] => {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.filter((item) => item.id !== cartItemId);
  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};

export const updateCartItemQuantity = (
  cartItemId: number,
  quantity: number
): ICartItem[] => {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.map((item) =>
    item.id === cartItemId ? { ...item, quantity } : item
  );
  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};

export const isProductInCart = (productId: number): boolean => {
  const cart = getCartFromLocalStorage();
  return cart.some((item) => item.id === productId);
};

export const clearCart = (): [] => {
  localStorage.removeItem(CART_KEY);
  return [];
};
