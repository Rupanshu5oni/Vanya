export default function Logo({ dark = false }) {
  return (
    <a href="#top" className="flex items-center gap-2 group">
      <span className={`w-10 h-10 flex items-center justify-center font-serif text-lg border ${dark ? 'border-cream text-cream' : 'border-ink text-ink'} group-hover:bg-rose group-hover:border-rose group-hover:text-cream transition-colors`}><img src="/images/vanya-logo.png" alt="Vanya Logo" className="w-full h-full object-cover" /></span>
      <span className={`font-serif text-2xl tracking-widest ${dark ? 'text-cream' : 'text-ink'}`}>VANYA</span>
    </a>
  );
}
