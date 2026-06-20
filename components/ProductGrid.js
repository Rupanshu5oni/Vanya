import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <p className="text-gray-600">
            Showing {products.length} Products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}