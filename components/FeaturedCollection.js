const items = [
  { title: 'The Reverie Edit', desc: 'Soft silhouettes in silk and linen', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80' },
  { title: 'Heritage Ethnic', desc: 'Hand-embroidered statement pieces', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Studio Essentials', desc: 'Everyday tailoring, elevated', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80' }
];
export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-24 md:py-32 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Featured Collection</p>
          <h2 className="section-title">The Spring Edit</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <a href="#" key={it.title} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-ink mb-1">{it.title}</h3>
              <p className="text-sm text-ink/60">{it.desc}</p>
              <span className="inline-block mt-3 text-xs tracking-widest uppercase text-rose group-hover:text-ink transition-colors">Shop now →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
