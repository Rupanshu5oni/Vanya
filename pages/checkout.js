import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              Secure Checkout
            </p>

            <h1 className="font-serif text-5xl">
              Checkout
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <h2 className="font-serif text-3xl mb-8">
                Shipping Details
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border p-4 bg-white"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-4 bg-white"
                />

                <textarea
                  placeholder="Address"
                  rows="4"
                  className="w-full border p-4 bg-white"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="w-full border p-4 bg-white"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="w-full border p-4 bg-white"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full border p-4 bg-white"
                />

              </div>
            </div>

            <div className="bg-white p-8 h-fit">

              <h2 className="font-serif text-3xl mb-8">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Aurora Silk Gown</span>
                  <span>₹12,800</span>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹12,800</span>
                </div>

              </div>

              <button className="w-full mt-8 bg-black text-white py-4 tracking-[2px]">
                PLACE ORDER
              </button>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}