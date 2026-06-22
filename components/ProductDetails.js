import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductDetails({ product }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState(product.image);

  useEffect(() => {
    setMainImage(product.image);
    setSelectedSize("M");
  }, [product]);

  const addToCart = () => {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) =>
      item.id === product.id &&
      item.size === selectedSize
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  //alert("Added To Cart");
};

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <section className="bg-[#f5f1ec] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}
          <div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[700px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="pt-6">

            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              {product.category}
            </p>

            <h1 className="text-5xl font-serif text-black">
              {product.name}
            </h1>

            <p className="text-3xl mt-6 text-[#c9a26d] font-medium">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description ||
                "Crafted with timeless elegance and modern sophistication."}
            </p>

            {/* Size */}
            <div className="mt-10">
              <h3 className="font-medium mb-4">
                Select Size
              </h3>

              <div className="flex gap-3 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 border transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white"
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
                className="border px-4 py-3 w-24 bg-white"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10 flex-wrap">

             

             <button
  onClick={addToCart}
  className="bg-black text-white px-10 py-4 tracking-wider"
>
  ADD TO CART
</button>

              <button className="border border-black px-10 py-4 tracking-wider hover:bg-black hover:text-white transition">
                BUY NOW
              </button>

            </div>

            {/* Extra Info */}
            <div className="mt-12 border-t pt-8 space-y-4">

              <div>
                <h4 className="font-medium">
                  Category
                </h4>
                <p className="text-gray-600">
                  {product.category}
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Shipping
                </h4>
                <p className="text-gray-600">
                  Free shipping on all orders.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Returns
                </h4>
                <p className="text-gray-600">
                  Easy 7-day returns.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Recommended Products */}
        <div className="mt-28">

          <div className="text-center mb-12">
            <p className="uppercase tracking-[4px] text-[#c9a26d] mb-3">
              You May Also Like
            </p>

            <h2 className="text-4xl font-serif">
              Recommended Products
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
              >
                <div className="group cursor-pointer">

                  <div className="overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="font-serif text-xl">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.category}
                    </p>

                    <p className="mt-2 font-medium">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}