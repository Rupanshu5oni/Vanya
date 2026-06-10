const reviews = [
  { q: 'The fabric, the fit, the finishing — Vanya redefined what I expect from clothing.', n: 'Ananya S.', l: 'Mumbai' },
  { q: 'Every piece feels like it was made just for me. Truly timeless.', n: 'Riya K.', l: 'Delhi' },
  { q: 'Quiet luxury at its best. I get compliments every single time.', n: 'Meera P.', l: 'Bengaluru' }
];
export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Loved by women</p>
          <h2 className="section-title">In their words.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.n} className="bg-sand/40 p-8 hover:bg-sand/70 transition-colors">
              <p className="text-gold text-2xl mb-4">★★★★★</p>
              <p className="font-serif text-lg text-ink/80 leading-relaxed mb-6">"{r.q}"</p>
              <p className="text-sm font-medium text-ink">{r.n}</p>
              <p className="text-xs text-ink/50 uppercase tracking-wider">{r.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
