import { IProduct } from '@/interfaces/product';

const fetchFromApi = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    return await res.json();
  } catch (error: unknown) {
    console.error('Fetch error:', error);
    throw new Error('Error fetching data');
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
