export default function ProductFilters() {
  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-4">

          <select className="border p-3 bg-white">
            <option>Category</option>
            <option>Dresses</option>
            <option>Ethnic Wear</option>
            <option>Casual</option>
            <option>Party Wear</option>
          </select>

          <select className="border p-3 bg-white">
            <option>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <select className="border p-3 bg-white">
            <option>Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
          </select>

          <select className="border p-3 bg-white">
            <option>Price</option>
            <option>₹0 - ₹5000</option>
            <option>₹5000 - ₹10000</option>
            <option>₹10000+</option>
          </select>

        </div>

      </div>
    </section>
  );
}