import { fetchProduct, fetchProducts } from '@/api/products';
import Layout from '@/components/Layout';
import ProductOverview from '@/components/ProductOverview';
import { IProduct } from '@/interfaces/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

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
  const products: IProduct[] = await fetchProducts();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  try {
    const [product, products] = await Promise.all([
      fetchProduct(parseInt(id as string, 10)),
      fetchProducts(),
    ]);

    const clothingProducts = products.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );

    if (!product) {
      return { notFound: true };
    }

    return {
      props: { product, products: clothingProducts },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching product or products:', error);
    return { notFound: true };
  }
};

export default ProductPage;
