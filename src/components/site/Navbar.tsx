import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/hooks/useCart";

const links = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Store Location" },
  { href: "#contact", label: "Contact" },
];

type Props = {
  search: string;
  onSearch: (v: string) => void;
};

export function Navbar({ search, onSearch }: Props) {
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <a href="#home" aria-label="Ozzyy Superstores home">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm" aria-label="Main navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search products…"
                aria-label="Search products"
                className="w-full border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm bg-gray-50 focus:bg-white transition"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" aria-hidden />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => openCart(true)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingCart className="w-6 h-6" aria-hidden />
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                {count}
              </span>
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm bg-gray-50"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" aria-hidden />
          </div>
        </div>

        <nav
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pb-4 font-medium text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 rounded hover:bg-gray-50"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
