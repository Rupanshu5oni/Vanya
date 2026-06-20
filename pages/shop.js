import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen">

        <section className="py-24 text-center">
          <p className="tracking-[4px] text-[#c5a47e] uppercase mb-4">
            Collection
          </p>

          <h1 className="text-6xl font-serif">
            Shop All Products
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Discover timeless pieces crafted for the
            modern woman.
          </p>
        </section>

        <ProductFilters />

        <ProductGrid />

      </main>

      <Footer />
    </>
  );
}