export default function Fabric() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Fabric & Quality</p>
          <h2 className="section-title mb-6">The story is in the seam.</h2>
          <p className="text-ink/70 leading-relaxed mb-8">From mulberry silk to handwoven cotton, every fabric is chosen for its texture, drape, and longevity. We work directly with weavers and mills to honor traditional techniques.</p>
          <ul className="space-y-4">
            {[['Pure Silk & Linen', 'Naturally breathable, beautifully fluid.'], ['Hand-Woven Cotton', 'Soft, durable, and impossibly comfortable.'], ['Artisan Embroidery', 'Each motif stitched by hand.']].map(([t, d]) => (
              <li key={t} className="flex gap-4 pb-4 border-b border-sand">
                <span className="font-serif text-rose text-xl">✦</span>
                <div>
                  <p className="font-medium text-ink">{t}</p>
                  <p className="text-sm text-ink/60">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80" className="aspect-[3/4] object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=600&q=80" className="aspect-[3/4] object-cover mt-10" alt="" />
        </div>
      </div>
    </section>
  );
}
