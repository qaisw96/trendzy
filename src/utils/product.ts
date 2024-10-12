import { IProduct } from '@/interfaces/product';

export const filterClothingProducts = (products: IProduct[]): IProduct[] => {
  return products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );
};
