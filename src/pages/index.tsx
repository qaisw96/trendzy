import { IProduct } from '@/interfaces/product';
import ProductList from '@/components/ProductList';
import Layout from '@/components/Layout';
import { fetchProducts } from '@/api/products';
import { GetStaticProps } from 'next';
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

    const clothingProducts = products.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );

    return { props: { products: clothingProducts } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] },
    };
  }
};

export default HomePage;
