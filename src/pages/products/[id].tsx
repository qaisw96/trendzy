import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchProduct, fetchProducts } from '@/api/products';
import { IProduct } from '@/interfaces/product';
import { filterClothingProducts } from '@/utils/product';
import ProductOverview from '@/components/ProductOverview';
import Layout from '@/components/Layout';

interface ProductPageProps {
  product: IProduct;
  products: IProduct[];
}

const ProductPage = ({ product, products }: ProductPageProps) => {
  return (
    <Layout>
      <ProductOverview product={product} products={products} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const products: IProduct[] = await fetchProducts();

    const paths = filterClothingProducts(products).map((product) => ({
      params: { id: product.id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params!;

    const [product, products] = await Promise.all([
      fetchProduct(Number(id)),
      fetchProducts(),
    ]);

    const clothingProducts = filterClothingProducts(products);

    if (!product) {
      return { notFound: true };
    }

    return {
      props: { product, products: clothingProducts },
    };
  } catch (error) {
    console.error('Error fetching product or products:', error);
    return { notFound: true };
  }
};

export default ProductPage;
