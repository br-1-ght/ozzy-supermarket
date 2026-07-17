import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { CONFIG } from "@/lib/catalog";

export function Location() {
  return (
    <section id="location" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-brand font-semibold text-sm tracking-wide">VISIT US</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 mb-5">Find us in Lagos</h2>
          <p className="text-gray-600 mb-6">
            Prefer to shop in person? Stop by the store — or get directions straight to our door.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand" /> Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand" /> Open Daily · 8:00 AM – 9:00 PM
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand" />
              <a href={`tel:${CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                {CONFIG.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-brand" />
              <a href={CONFIG.instagram} target="_blank" rel="noopener" className="hover:text-brand">
                @ozzyy_superstores
              </a>
            </li>
          </ul>
          <a
            href={CONFIG.maps}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-7 bg-brand text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-brand-dark transition"
          >
            Get Directions <MapPin className="w-4 h-4" />
          </a>
        </div>
        <a
          href={CONFIG.maps}
          target="_blank"
          rel="noopener"
          className="block rounded-2xl h-72 sm:h-96 relative overflow-hidden group shadow-lg"
          aria-label="Open Ozzyy Superstores location on Google Maps"
        >
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80"
            alt="Lagos storefront"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition" />
              <div className="font-semibold text-sm">Tap to open in Google Maps</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
