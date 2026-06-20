import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
      <Head>
        <title>My Account | Vanya</title>
      </Head>

      <Header />

      <main className="bg-[#f5f1ec] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              My Account
            </p>

            <h1 className="font-serif text-5xl">
              Profile
            </h1>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6">
              <ul className="space-y-4">
                <li className="font-medium">Profile</li>
                <li>Orders</li>
                <li>Addresses</li>
                <li>Wishlist</li>
                <li>Logout</li>
              </ul>
            </div>

            <div className="md:col-span-3 bg-white p-8">
              <h2 className="font-serif text-3xl mb-8">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border p-4"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="border p-4"
                />

              </div>

              <button className="mt-8 bg-black text-white px-8 py-4">
                SAVE CHANGES
              </button>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}