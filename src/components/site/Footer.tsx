import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { CATEGORIES, CONFIG } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="32" height="32" viewBox="0 0 100 100" aria-hidden>
              <circle cx="50" cy="50" r="48" fill="#fff" />
              <path d="M64 22a32 32 0 100 56 25 25 0 110-56z" fill="#D62828" />
            </svg>
            <span className="font-display font-black text-white text-lg">OZZYY</span>
          </div>
          <p className="text-xs leading-relaxed">
            Your trusted neighborhood supermarket. Quality products, great prices, fast service.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Shop</h3>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href="#shop" className="hover:text-white transition">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Company</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#location" className="hover:text-white transition">Store Location</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-sm">Get in Touch</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Lagos, Nigeria</li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-white transition">
                {CONFIG.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" />
              <a href={CONFIG.instagram} target="_blank" rel="noopener" className="hover:text-white transition">
                @ozzyy_superstores
              </a>
            </li>
            <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Daily · 8:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Ozzyy Superstores. All rights reserved.
      </div>
    </footer>
  );
}
