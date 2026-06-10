export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=1200&q=80" alt="About Vanya" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div>
          <p className="eyebrow mb-4">Our Story</p>
          <h2 className="section-title mb-6">A house built on craft & character.</h2>
          <p className="text-ink/70 leading-relaxed mb-6">Vanya was born from a love of timeless silhouettes and the artistry of slow fashion. Every piece is designed in our studio and made by hand using premium, sustainably sourced fabrics.</p>
          <p className="text-ink/70 leading-relaxed mb-8">We believe clothing should feel as good as it looks — pieces that move with you, last for years, and celebrate the woman who wears them.</p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sand">
            {[['10+', 'Years of craft'], ['50K+', 'Happy women'], ['100%', 'Ethically made']].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl text-ink">{n}</p>
                <p className="text-xs uppercase tracking-wider text-ink/60 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
