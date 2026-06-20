import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Aurora Silk Gown",
      size: "M",
      price: 12800,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const subtotal = 12800;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Head>
        <title>Shopping Bag | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              Vanya
            </p>
            <h1 className="font-serif text-5xl">
              Shopping Bag
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-gray-300 pb-8 mb-8"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-52 object-cover"
                  />

                  <div>
                    <h3 className="font-serif text-2xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Size: {item.size}
                    </p>

                    <p className="mt-2 text-gray-600">
                      Qty: {item.qty}
                    </p>

                    <p className="mt-4 text-lg">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 h-fit">
              <h2 className="font-serif text-3xl mb-8">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full mt-8 bg-black text-white py-4 tracking-[2px]">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}