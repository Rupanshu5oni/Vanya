const cats = [
  { name: 'Dresses', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80' },
  { name: 'Ethnic Wear', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80' },
  { name: 'Casual', img: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=80' },
  { name: 'Party Wear', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80' }
];
export default function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-4">Shop by Category</p>
            <h2 className="section-title">Find your style.</h2>
          </div>
          <a href="#" className="text-sm tracking-widest uppercase text-ink hover:text-rose">View all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map(c => (
            <a key={c.name} href="#" className="group relative aspect-[3/4] overflow-hidden block">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-serif text-2xl text-cream">{c.name}</h3>
                <span className="text-xs tracking-widest uppercase text-cream/80">Explore →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
