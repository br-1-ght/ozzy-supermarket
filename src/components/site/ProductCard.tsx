import { motion } from "framer-motion";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { fmtNaira, type Product } from "@/lib/catalog";
import { useCart } from "@/hooks/useCart";

export function ProductCard({ product }: { product: Product }) {
  const { qtyOf, add, dec } = useCart();
  const qty = qtyOf(product.id);
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative h-28 sm:h-36 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow opacity-0 group-hover:opacity-100 transition"
        >
          <Heart
            className={`w-4 h-4 transition ${liked ? "fill-brand text-brand scale-110" : "text-gray-500"}`}
          />
        </button>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-xs sm:text-sm leading-snug mb-1 flex-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="font-display font-bold text-brand text-sm sm:text-base mb-3">
          {fmtNaira(product.price)}
        </div>
        {qty > 0 ? (
          <div className="flex items-center justify-between bg-gray-100 rounded-full px-1 py-1">
            <button
              onClick={() => dec(product.id)}
              className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-brand shadow-sm hover:scale-110 transition"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <motion.span
              key={qty}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-sm font-semibold"
            >
              {qty}
            </motion.span>
            <button
              onClick={() => add(product.id)}
              className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-brand shadow-sm hover:scale-110 transition"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => add(product.id)}
            className="w-full bg-ink hover:bg-brand transition text-white text-xs sm:text-sm font-semibold py-2 rounded-full inline-flex items-center justify-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Add to Cart
          </motion.button>
        )}
      </div>
    </motion.article>
  );
}
