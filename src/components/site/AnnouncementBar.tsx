import { Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-white text-xs sm:text-sm text-center py-2 px-4 flex items-center justify-center gap-2">
      <Truck className="w-4 h-4 shrink-0" aria-hidden />
      <span>
        Free delivery within Lagos on orders above ₦25,000 &nbsp;|&nbsp; Order via WhatsApp or pay online with Paystack
      </span>
    </div>
  );
}
