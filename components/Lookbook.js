const imgs = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80'
];
export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 md:py-32 bg-sand/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Lookbook</p>
          <h2 className="section-title">Style Inspiration</h2>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto">Editorial moments from our Spring/Summer journal — curated to inspire your own story.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className={`overflow-hidden ${i % 2 === 0 ? 'md:translate-y-8' : ''}`}>
              <img src={src} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
