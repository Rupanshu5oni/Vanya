import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";
import { products } from "../../data/products";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return null;

  return (
    <>
      <Head>
        <title>{product.name} | Vanya</title>
      </Head>

      <Header />

      <main>
        <ProductDetails product={product} />
      </main>

      <Footer />
    </>
  );
}