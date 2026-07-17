import { motion } from "framer-motion";
import { MapPin, MessageCircle, ShoppingBag } from "lucide-react";
import { CONFIG } from "@/lib/catalog";

const heroImage =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

export function Hero() {
  return (
    <section id="home" className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-1.5 bg-brand text-white text-xs font-bold tracking-wide px-3 py-1 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" /> Lagos · Shop Online Today
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            Your Trusted <span className="text-brand">Neighborhood</span> Supermarket, Now Online
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg">
            From drinks and pastries to baby essentials and household items — shop everything you need, delivered fast
            across Lagos. Quality products. Great prices. Fast service.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark transition text-white font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base"
            >
              <ShoppingBag className="w-4 h-4" /> Start Shopping
            </a>
            <a
              href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hi Ozzyy Superstores, I'd like to place an order",
              )}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 transition text-white font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-300">
            <div>
              <span className="text-white font-bold text-lg">80+</span> Products
            </div>
            <div>
              <span className="text-white font-bold text-lg">163+</span> Happy Followers
            </div>
            <div>
              <span className="text-white font-bold text-lg">Same-day</span> Lagos Delivery
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white shadow-2xl overflow-hidden float-slow">
            <img
              src={heroImage}
              alt="Fresh groceries in a shopping basket"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -left-2 sm:left-0 bg-white text-ink rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-brand" />
            <div className="text-left">
              <div className="font-bold text-sm leading-tight">Shop with ease,</div>
              <div className="text-xs text-gray-500 leading-tight">every time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
