import { AnimatePresence, motion } from "framer-motion";
import { Gift, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function FloatingGift() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="See your free gift offer"
        className="fixed bottom-5 right-5 z-40 bg-brand text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center bounce-soft hover:bg-brand-dark transition"
      >
        <Gift className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-gold text-ink text-[10px] font-bold rounded-full px-1.5 py-0.5">
          FREE
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60]"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-labelledby="gift-title"
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl pointer-events-auto relative">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 id="gift-title" className="font-display font-bold text-xl mb-2">
                  Claim your free gift!
                </h3>
                <p className="text-sm text-gray-600 mb-5">
                  Spend ₦25,000 or more and get a complimentary in-store gift plus free delivery within Lagos.
                </p>
                <button
                  onClick={() => {
                    setOpen(false);
                    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-brand hover:bg-brand-dark transition text-white font-semibold py-3 rounded-full text-sm"
                >
                  Start shopping
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
