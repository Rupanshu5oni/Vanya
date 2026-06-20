import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">

        <div className="overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="mt-4">
          <h3 className="font-serif text-xl text-black">
            {product.name}
          </h3>

          <p className="text-gray-500 mt-1">
            {product.category}
          </p>

          <p className="mt-2 text-lg">
            ₹{product.price.toLocaleString()}
          </p>
        </div>

      </div>
    </Link>
  );
}