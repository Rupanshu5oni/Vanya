import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Orders() {
  const orders = [
    {
      id: 1001,
      date: "18 June 2026",
      status: "Delivered",
      total: "₹12,800",
    },
    {
      id: 1002,
      date: "10 June 2026",
      status: "Processing",
      total: "₹8,999",
    },
  ];

  return (
    <>
      <Head>
        <title>My Orders | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl">
              My Orders
            </h1>
          </div>

          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-8 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-serif text-2xl">
                    Order #{order.id}
                  </h3>

                  <p>{order.date}</p>
                  <p>{order.status}</p>
                </div>

                <div className="text-right">
                  <p className="mb-3">
                    {order.total}
                  </p>

                  <Link href={`/order/${order.id}`}>
                    <button className="border px-6 py-2">
                      View Order
                    </button>
                  </Link>
                </div>
              </div>
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}