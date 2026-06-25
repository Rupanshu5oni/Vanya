import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/#collection", label: "Collection" },
  { href: "/shop", label: "Shop" },
  { href: "/#lookbook", label: "Lookbook" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
  const updateCart = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartCount(cart.length);
  };

  updateCart();

  window.addEventListener("cartUpdated", updateCart);

  return () => {
    window.removeEventListener(
      "cartUpdated",
      updateCart
    );
  };
}, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${
        open
          ? "bg-cream py-3"
          : scrolled
          ? "bg-cream/95 backdrop-blur shadow-sm py-3"
          : "bg-transparent py-5"
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

        {/* Desktop Ecommerce Links */}
        <div className="hidden md:flex items-center gap-5">
  {/* Orders */}
  <a
    href="/orders"
    className="text-ink hover:text-rose transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5h6M9 9h6M5 5h.01M5 9h.01M5 13h.01M9 13h6M5 17h.01M9 17h6"
      />
    </svg>
  </a>

  {/* Cart */}
  <a
  href="/cart"
  className="relative text-ink hover:text-rose transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center">
      {cartCount}
    </span>
  )}
</a>

  {/* Profile */}
  <a
    href="/profile"
    className="text-ink hover:text-rose transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </a>
</div>

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
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
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
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile Ecommerce Links */}
          <div className="mt-12 pt-8 border-t border-sand">
            <div className="flex flex-col gap-6">
              <a
                href="/orders"
                onClick={() => setOpen(false)}
                className="text-xl uppercase tracking-widest text-ink"
              >
                Orders
              </a>

              <a
                href="/cart"
                onClick={() => setOpen(false)}
                className="text-xl uppercase tracking-widest text-ink"
              >
                Cart
              </a>

              <a
                href="/profile"
                onClick={() => setOpen(false)}
                className="text-xl uppercase tracking-widest text-ink"
              >
                Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}