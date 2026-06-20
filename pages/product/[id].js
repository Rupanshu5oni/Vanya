import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product | Vanya</title>
      </Head>

      <Header />

      <main>
        <ProductDetails />
      </main>

      <Footer />
    </>
  );
}