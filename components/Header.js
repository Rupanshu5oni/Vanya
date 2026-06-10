import { useEffect, useState } from 'react';
const links = [
  { href: '#collection', label: 'Collection' },
  { href: '#categories', label: 'Shop' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];
import Logo from './Logo';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header id="top" className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm tracking-wider uppercase text-ink hover:text-rose transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#newsletter" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-xs">Shop Now</a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-ink" aria-label="Menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} onClick={() => setOpen(false)} href={l.href} className="text-sm tracking-wider uppercase text-ink">{l.label}</a>
            ))}
            <a href="#newsletter" onClick={() => setOpen(false)} className="btn-primary !py-2 text-xs w-full">Shop Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
