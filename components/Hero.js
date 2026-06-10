export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80" alt="Vanya hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/50 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow mb-6">New Season · Spring/Summer 2025</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-ink mb-6">Timeless elegance, <em className="text-rose">redefined</em>.</h1>
          <p className="text-lg text-ink/70 mb-10 leading-relaxed">Crafted for the modern woman. Vanya brings together fine fabrics, considered silhouettes, and quiet luxury for every moment of your life.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#collection" className="btn-primary">Explore Collection</a>
            <a href="#lookbook" className="btn-outline">View Lookbook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
