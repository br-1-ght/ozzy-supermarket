import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { CONFIG, fmtNaira } from "@/lib/catalog";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

export function CartDrawer() {
  const { isOpen, setOpen, items, subtotal, add, dec, remove, clear } = useCart();

  const whatsappHref = () => {
    const lines = items.map((i) => `• ${i.name} × ${i.qty} — ${fmtNaira(i.price * i.qty)}`).join("%0A");
    const msg = `Hi Ozzyy Superstores! I'd like to order:%0A%0A${lines}%0A%0ASubtotal: ${fmtNaira(subtotal)}`;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-display font-bold text-lg">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <ShoppingCart className="w-14 h-14 text-gray-300 mb-3" />
                <p className="font-semibold text-gray-700">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add products to get started</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {items.map((it) => (
                  <div key={it.id} className="flex gap-3 items-center">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-50 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold line-clamp-2">{it.name}</div>
                      <div className="text-xs text-brand font-bold">{fmtNaira(it.price)}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => dec(it.id)}
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{it.qty}</span>
                        <button
                          onClick={() => add(it.id)}
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                          aria-label="Increase"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => remove(it.id)}
                          className="ml-auto text-gray-400 hover:text-brand"
                          aria-label={`Remove ${it.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={clear}
                  className="text-xs text-gray-500 hover:text-brand underline"
                >
                  Clear cart
                </button>
              </div>
            )}

            <div className="border-t border-gray-100 px-5 py-5 space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-ink">{fmtNaira(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-400">
                Delivery fee calculated at checkout based on location. Free above ₦25,000.
              </p>
              <a
                href={items.length ? whatsappHref() : undefined}
                target="_blank"
                rel="noopener"
                onClick={(e) => {
                  if (!items.length) {
                    e.preventDefault();
                    toast.error("Your cart is empty");
                  }
                }}
                className="w-full bg-whatsapp text-white font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
              <button
                onClick={() => toast.info("Paystack checkout coming soon")}
                className="w-full bg-brand text-white font-semibold py-3.5 rounded-full text-sm hover:bg-brand-dark transition"
              >
                Pay Online with Paystack
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
