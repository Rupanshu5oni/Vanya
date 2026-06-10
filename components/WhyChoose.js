const items = [
  { t: 'Premium Quality', d: 'Only the finest fabrics and finishes.' },
  { t: 'Timeless Style', d: 'Designs that transcend the seasons.' },
  { t: 'Made for Comfort', d: 'Engineered to feel as good as it looks.' },
  { t: 'Artisan Craft', d: 'Hand-finished by skilled craftswomen.' },
  { t: 'Sustainable', d: 'Responsibly sourced, ethically made.' },
  { t: 'Made with Love', d: 'Every piece is a labor of devotion.' }
];
export default function WhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Why Vanya</p>
          <h2 className="font-serif text-4xl md:text-5xl">Crafted with intention.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-cream/10">
          {items.map((it, i) => (
            <div key={it.t} className="bg-ink p-8 hover:bg-ink/70 transition-colors">
              <p className="font-serif text-3xl text-gold mb-4">0{i + 1}</p>
              <h3 className="font-serif text-xl mb-2">{it.t}</h3>
              <p className="text-sm text-cream/60 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
