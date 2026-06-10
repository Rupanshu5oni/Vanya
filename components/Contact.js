export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="section-title mb-6">We'd love to hear from you.</h2>
          <p className="text-ink/70 mb-10 leading-relaxed">For styling advice, made-to-measure inquiries, or wholesale opportunities, drop us a line.</p>
          <div className="space-y-5 text-sm">
            <div><p className="uppercase tracking-wider text-ink/50 text-xs mb-1">Email</p><a href="mailto:hello@vanya.com" className="text-ink hover:text-rose">hello@vanya.com</a></div>
            <div><p className="uppercase tracking-wider text-ink/50 text-xs mb-1">Phone</p><a href="tel:+919999999999" className="text-ink hover:text-rose">+91 99999 99999</a></div>
            <div><p className="uppercase tracking-wider text-ink/50 text-xs mb-1">Studio</p><p className="text-ink">14 Atelier Lane, Mumbai 400001</p></div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will reach out shortly.'); }} className="space-y-4">
          <input required placeholder="Your name" className="w-full px-5 py-3 bg-sand/40 border border-transparent focus:border-ink outline-none text-sm" />
          <input required type="email" placeholder="Email address" className="w-full px-5 py-3 bg-sand/40 border border-transparent focus:border-ink outline-none text-sm" />
          <input placeholder="Subject" className="w-full px-5 py-3 bg-sand/40 border border-transparent focus:border-ink outline-none text-sm" />
          <textarea required rows="5" placeholder="Your message" className="w-full px-5 py-3 bg-sand/40 border border-transparent focus:border-ink outline-none text-sm" />
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
