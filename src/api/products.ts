import { IProduct } from '@/interfaces/product';

const fetchFromApi = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? `Error: ${error.message}`
        : 'Unknown error occurred.';
    throw new Error(errorMessage);
  }
};

export const fetchProducts = async (): Promise<IProduct[]> => {
  const url = `${process.env.API_BASE_URL}/products`;
  return fetchFromApi(url);
};

export const fetchProduct = async (productId: number): Promise<IProduct> => {
  const url = `${process.env.API_BASE_URL}/products/${productId}`;
  return fetchFromApi(url);
};
