import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";
import { ShoppingBag } from "lucide-react";

const ALL = { id: "all", label: "All Products" };

export function Shop({ search }: { search: string }) {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => active === "all" || p.cat === active);
    const q = search.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
    return list;
  }, [active, search]);

  const tabs = [ALL, ...CATEGORIES];

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-3">Shop by Category</h2>
        <p className="text-gray-600">
          Everything for your home, all in one place. Tap a category or search above to find exactly what you need.
        </p>
      </div>

      <div
        className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
        role="tablist"
        aria-label="Product categories"
      >
        {tabs.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-gray-700 border-gray-200 hover:border-brand"
              }`}
            >
              {c.id === "all" && <ShoppingBag className="w-4 h-4" aria-hidden />}
              {c.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-16">No products found. Try a different search or category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
