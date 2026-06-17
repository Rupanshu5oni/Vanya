import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="text-cream/60 text-sm mt-6 leading-relaxed max-w-xs">
            Timeless women's fashion, crafted with care and conscience.
          </p>
        </div>

        {/* Shop */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">
            Shop
          </p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Dresses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Ethnic Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">
            Help
          </p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Size Guide
              </a>
            </li>
            <li>
            <a href="/contact" className="hover:text-cream transition-colors">
              Contact
            </a>
          </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-5">
            Follow
          </p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Vanya. All rights reserved.
        </p>

       <div className="flex flex-wrap justify-center gap-6">
  <a
    href="/privacy-policy"
    className="hover:text-cream transition-colors"
  >
    Privacy Policy
  </a>

  <a
    href="/terms-and-conditions"
    className="hover:text-cream transition-colors"
  >
    Terms & Conditions
  </a>

  <a
    href="/refund-policy"
    className="hover:text-cream transition-colors"
  >
    Refund Policy
  </a>

  <a
    href="/contact"
    className="hover:text-cream transition-colors"
  >
    Contact
  </a>
</div>
      </div>
    </footer>
  );
}