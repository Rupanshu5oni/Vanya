const items = [
  { name: 'Aurora Silk Gown', price: '₹12,800', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80' },
  { name: 'Maya Linen Set', price: '₹6,400', img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=700&q=80' },
  { name: 'Reverie Wrap Dress', price: '₹8,900', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80' },
  { name: 'Saira Embroidered Kurta', price: '₹5,200', img: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=700&q=80' }
];
export default function NewArrivals() {
  return (
    <section className="py-24 md:py-32 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Just In</p>
          <h2 className="section-title">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(it => (
            <div key={it.name} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-sand">
                <img src={it.img} alt={it.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-lg text-ink">{it.name}</h3>
              <p className="text-sm text-ink/60 mt-1">{it.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
