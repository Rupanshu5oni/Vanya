import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#collection', label: 'Collection' },
  { href: '/#categories', label: 'Shop' },
  { href: '/#lookbook', label: 'Lookbook' },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${
    open
      ? 'bg-cream py-3'
      : scrolled
      ? 'bg-cream/95 backdrop-blur shadow-sm py-3'
      : 'bg-transparent py-5'
  }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider uppercase text-ink hover:text-rose transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#newsletter"
          className="hidden md:inline-flex btn-primary !py-2 !px-5 text-xs"
        >
          Shop Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink transition-transform duration-300 hover:scale-110"
          aria-label="Menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream/95 backdrop-blur-md md:hidden transition-all duration-500 ease-in-out ${
          open
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <Logo />

          <button
            onClick={() => setOpen(false)}
            className="text-ink transition-transform duration-300 hover:rotate-90"
            aria-label="Close Menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="px-8 pt-24 pb-12 flex flex-col">
          <nav className="flex flex-col gap-8">
            {links.map((l, index) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-2xl uppercase tracking-widest text-ink font-light transition-all duration-700 ${
                  open
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className={`btn-primary mt-12 text-center transition-all duration-700 ${
              open
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: '500ms'
            }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}