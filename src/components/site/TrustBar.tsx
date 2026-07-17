import { CreditCard, MessageCircle, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Truck, label: "Fast Lagos Delivery" },
  { icon: ShieldCheck, label: "Quality Guaranteed" },
  { icon: CreditCard, label: "Secure Paystack Checkout" },
  { icon: MessageCircle, label: "Order via WhatsApp" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <Icon className="w-6 h-6 mb-2 text-brand" aria-hidden />
            <div className="font-semibold text-sm">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
