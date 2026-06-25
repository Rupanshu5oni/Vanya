import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

     window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQuantity = (id, qty) => {
  if (qty < 1) return;

  const updatedCart = cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: qty }
      : item
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));
};

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <>
        <Header />

        <main className="bg-[#f5f1ec] min-h-screen flex items-center justify-center">
          <div className="text-center">

            <h1 className="font-serif text-5xl mb-6">
              Your Cart is Empty
            </h1>

            <p className="text-gray-600 mb-8">
              Add some products to continue shopping.
            </p>

            <Link href="/shop">
              <button className="bg-black text-white px-8 py-4 tracking-[2px]">
                CONTINUE SHOPPING
              </button>
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

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

            {/* Cart Items */}
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

                  <div className="flex-1">

                    <h3 className="font-serif text-2xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Category: {item.category}
                    </p>

                    <p className="mt-2 text-gray-600">
                      Size: {item.size}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white"
                      >
                        -
                      </button>

                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white"
                      >
                        +
                      </button>

                    </div>

                    <p className="mt-4 text-lg font-medium">
                      ₹{item.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="mt-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Summary */}
            <div className="bg-white p-8 h-fit">

              <h2 className="font-serif text-3xl mb-8">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>
                    ₹{total.toLocaleString()}
                  </span>
                </div>

              </div>

              <Link href="/checkout">
                <button className="w-full mt-8 bg-black text-white py-4 tracking-[2px] hover:opacity-90">
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