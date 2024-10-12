import React from 'react';
import { GetStaticProps } from 'next';
import { IProduct } from '@/interfaces/product';
import { fetchProducts } from '@/api/products';
import { filterClothingProducts } from '@/utils/product';
import ProductList from '@/components/ProductList';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';

interface HomeProps {
  products: IProduct[];
}

const HomePage = ({ products }: HomeProps) => {
  return (
    <Layout>
      <Banner />
      <ProductList products={products} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products: IProduct[] = await fetchProducts();

    const clothingProducts = filterClothingProducts(products);

    return { props: { products: clothingProducts } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] },
    };
  }
};

export default HomePage;
