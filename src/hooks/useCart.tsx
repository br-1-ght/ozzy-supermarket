import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "@/lib/catalog";
import { toast } from "sonner";

export type CartItem = Product & { qty: number };
type CartMap = Record<string, CartItem>;

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  qtyOf: (id: string) => number;
  add: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "ozzyy_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartMap>({});
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const add = useCallback((id: string) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    setCart((c) => ({ ...c, [id]: { ...p, qty: (c[id]?.qty || 0) + 1 } }));
    toast.success(`Added ${p.name}`);
  }, []);

  const dec = useCallback((id: string) => {
    setCart((c) => {
      const cur = c[id];
      if (!cur) return c;
      const nextQty = cur.qty - 1;
      const next = { ...c };
      if (nextQty <= 0) delete next[id];
      else next[id] = { ...cur, qty: nextQty };
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setCart((c) => {
      const n = { ...c };
      delete n[id];
      return n;
    });
  }, []);

  const clear = useCallback(() => setCart({}), []);

  const items = useMemo(() => Object.values(cart), [cart]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((s, i) => s + i.qty * i.price, 0), [items]);

  const value: CartCtx = {
    items, count, subtotal,
    qtyOf: (id) => cart[id]?.qty || 0,
    add, dec, remove, clear,
    isOpen, setOpen,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
