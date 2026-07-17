import { MessageCircle } from "lucide-react";
import { CONFIG } from "@/lib/catalog";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
        "Hi Ozzyy Superstores, I'd like to place an order",
      )}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-40 bg-whatsapp text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center pulse-ring hover:opacity-90 transition"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
