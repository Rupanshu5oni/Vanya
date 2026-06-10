export default function Promo() {
  return (
    <section className="relative py-32 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative max-w-3xl mx-auto px-6 text-center text-cream">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Limited Time</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">Spring Edit — up to 25% off</h2>
        <p className="text-cream/80 mb-8 text-lg">Discover our newest pieces at an introductory price. Use code <span className="text-gold font-medium">VANYA25</span> at checkout.</p>
        <a href="#collection" className="inline-flex items-center justify-center px-8 py-3 bg-cream text-ink text-sm tracking-widest uppercase hover:bg-rose hover:text-cream transition-colors">Shop the Edit</a>
      </div>
    </section>
  );
}
