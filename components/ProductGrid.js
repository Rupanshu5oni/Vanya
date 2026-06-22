import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid({
  selectedCategory,
}) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="mb-8 text-gray-600">
          Showing {filteredProducts.length} Products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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