export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap gap-4 border-y py-6">

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            className="border px-4 py-2 bg-white"
          >
            <option value="All">All Categories</option>
            <option value="Dresses">Dresses</option>
            <option value="Ethnic Wear">Ethnic Wear</option>
            <option value="Casual">Casual</option>
            <option value="Party Wear">Party Wear</option>
          </select>

        </div>

      </div>
    </section>
  );
}