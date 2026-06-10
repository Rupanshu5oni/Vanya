const imgs = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=80'
];
export default function Instagram() {
  return (
    <section className="py-24 md:py-32 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">@vanya.studio</p>
          <h2 className="section-title">Follow our story.</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {imgs.map((src, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 text-sm">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
