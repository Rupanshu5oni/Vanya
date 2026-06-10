import Logo from './Logo';
export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <Logo  />
          <p className="text-cream/60 text-sm mt-6 leading-relaxed">Timeless women's fashion, crafted with care and conscience.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">Shop</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream">New Arrivals</a></li>
            <li><a href="#" className="hover:text-cream">Dresses</a></li>
            <li><a href="#" className="hover:text-cream">Ethnic Wear</a></li>
            <li><a href="#" className="hover:text-cream">Sale</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">Help</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream">Shipping</a></li>
            <li><a href="#" className="hover:text-cream">Returns</a></li>
            <li><a href="#" className="hover:text-cream">Size Guide</a></li>
            <li><a href="#contact" className="hover:text-cream">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">Follow</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream">Instagram</a></li>
            <li><a href="#" className="hover:text-cream">Pinterest</a></li>
            <li><a href="#" className="hover:text-cream">Facebook</a></li>
            <li><a href="#" className="hover:text-cream">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Vanya. All rights reserved.</p>
        <div className="flex gap-6"><a href="#" className="hover:text-cream">Privacy</a><a href="#" className="hover:text-cream">Terms</a></div>
      </div>
    </footer>
  );
}
