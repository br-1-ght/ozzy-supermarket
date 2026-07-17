import { motion } from "framer-motion";
import { Baby, Check, Droplets, ShoppingBasket, Wheat } from "lucide-react";

const points = [
  { label: "Fresh Stock, Always", sub: "Regularly restocked shelves" },
  { label: "Trusted by Neighbors", sub: "Your local go-to store" },
  { label: "Easy Checkout", sub: "Pay online or via WhatsApp" },
  { label: "Fast Delivery", sub: "Across Lagos, same day" },
];

export function About() {
  return (
    <section id="about" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand font-semibold text-sm tracking-wide">ABOUT US</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 mb-5">
            Groceries you can trust, service you'll love
          </h2>
          <p className="text-gray-600 mb-4">
            Ozzyy Superstores is a Lagos-based retail supermarket built on one simple promise: quality products, great
            prices, and fast, friendly service — whether you walk in or shop from your phone.
          </p>
          <p className="text-gray-600 mb-6">
            From your morning bread and butter to baby essentials, drinks for the weekend, and everyday household needs,
            we stock what real Lagos homes actually use. Order online and we bring the store to your door.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.label} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">{p.label}</div>
                  <div className="text-xs text-gray-500">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-brand rounded-2xl p-6 text-white h-40 flex flex-col justify-end">
            <Wheat className="w-8 h-8 mb-1" />
            <div className="font-semibold text-sm">Fresh Bread Daily</div>
          </div>
          <div className="bg-ink rounded-2xl p-6 text-white h-40 flex flex-col justify-end mt-8">
            <Baby className="w-8 h-8 mb-1" />
            <div className="font-semibold text-sm">Baby Care Essentials</div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 h-40 flex flex-col justify-end">
            <Droplets className="w-8 h-8 mb-1 text-brand" />
            <div className="font-semibold text-sm">Drinks & Beverages</div>
          </div>
          <div className="bg-gold rounded-2xl p-6 h-40 flex flex-col justify-end mt-8">
            <ShoppingBasket className="w-8 h-8 mb-1" />
            <div className="font-semibold text-sm">Household Needs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
