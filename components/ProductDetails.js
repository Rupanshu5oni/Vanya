import { useState } from "react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "Aurora Silk Gown",
    price: "12,800",
    description:
      "Crafted from premium silk with timeless elegance and effortless sophistication. Designed for the modern woman who values luxury and comfort.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <section className="bg-[#f5f1ec] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Images */}
          <div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[700px] object-cover"
            />

            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className="cursor-pointer h-28 w-full object-cover border border-gray-200 hover:border-black transition"
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="pt-6">

            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              New Arrival
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              {product.name}
            </h1>

            <p className="text-2xl md:text-3xl mt-6 text-[#c9a26d] font-medium">
              ₹{product.price}
            </p>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mt-10">
              <h3 className="font-medium mb-4">
                Select Size
              </h3>

              <div className="flex gap-3 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 border border-gray-300 transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-10">
              <h3 className="font-medium mb-4">
                Quantity
              </h3>

              <input
                type="number"
                defaultValue={1}
                min={1}
                className="border border-gray-300 px-4 py-3 w-24 bg-white"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-black text-white px-10 py-4 tracking-[2px] hover:opacity-90 transition">
                ADD TO CART
              </button>

              <button className="border border-black px-10 py-4 tracking-[2px] hover:bg-black hover:text-white transition">
                BUY NOW
              </button>

            </div>

            {/* Product Details */}
            <div className="mt-12 border-t border-gray-300 pt-8 space-y-6">

              <div>
                <h4 className="font-medium text-black">
                  Fabric
                </h4>
                <p className="text-gray-600">
                  Premium Silk Blend
                </p>
              </div>

              <div>
                <h4 className="font-medium text-black">
                  Shipping
                </h4>
                <p className="text-gray-600">
                  Free shipping on all orders.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-black">
                  Returns
                </h4>
                <p className="text-gray-600">
                  Easy 7-day returns.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products */}
        <div className="mt-28">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              You May Also Like
            </p>

            <h2 className="font-serif text-4xl text-black">
              Related Products
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {product.images.map((img, index) => (
              <div key={index} className="group cursor-pointer">

                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <h3 className="mt-4 font-serif text-xl">
                  Vanya Collection
                </h3>

                <p className="text-gray-600 mt-2">
                  ₹8,999
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}