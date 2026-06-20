import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function OrderDetails() {
  return (
    <>
      <Head>
        <title>Order Details | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl">
              Order #1001
            </h1>
          </div>

          <div className="bg-white p-10">

            <h2 className="font-serif text-3xl mb-8">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Aurora Silk Gown</span>
                <span>₹12,800</span>
              </div>

              <div className="border-t pt-4">
                <p>
                  Status: Delivered
                </p>
              </div>

              <div className="border-t pt-4">
                <p>
                  Shipping Address:
                </p>

                <p className="text-gray-600 mt-2">
                  123 Fashion Street,
                  Indore, Madhya Pradesh
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}