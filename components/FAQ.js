import { useState } from 'react';
const faqs = [
  { q: 'What sizes do you offer?', a: 'Vanya is available from XS to XXL. Detailed measurements are listed on each product page.' },
  { q: 'Do you ship internationally?', a: 'Yes — we ship worldwide. International orders typically arrive within 7–10 business days.' },
  { q: 'What is your return policy?', a: 'Easy 14-day returns on all unworn items with tags attached. Just reach out to our care team.' },
  { q: 'How do I care for my pieces?', a: 'Each garment includes care instructions. We generally recommend cold hand-wash or gentle dry cleaning for silks.' },
  { q: 'Can I customize a piece?', a: 'Yes — we offer made-to-measure on select styles. Contact us for details.' }
];
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Help</p>
          <h2 className="section-title">Frequently asked.</h2>
        </div>
        <div className="divide-y divide-sand border-y border-sand">
          {faqs.map((f, i) => (
            <button key={f.q} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left py-6 group">
              <div className="flex items-center justify-between gap-6">
                <span className="font-serif text-lg text-ink">{f.q}</span>
                <span className={`text-rose text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </div>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="text-ink/70 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
