import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULTS_BY_TAG } from "./data";

const CartContext = createContext();

function makeKey(id, size, color) {
  return `${id}|${size}|${color}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bnw_cart") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bnw_cart", JSON.stringify(items));
  }, [items]);

  /** add(product, { size, color }) */
  const add = (product, sel = {}) => {
    const defaults = DEFAULTS_BY_TAG[product.tag] || { size: "One Size", color: "Black" };
    const size = sel.size || defaults.size;
    const color = sel.color || defaults.color;
    const key = makeKey(product.id, size, color);

    setItems((prev) => {
      const found = prev.find((p) => p.key === key);
      if (found) {
        return prev.map((p) => (p.key === key ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, size, color, key, qty: 1 }];
    });
  };

  const remove = (key) => setItems((prev) => prev.filter((p) => p.key !== key));
  const inc = (key) => setItems((prev) => prev.map((p) => (p.key === key ? { ...p, qty: p.qty + 1 } : p)));
  const dec = (key) =>
    setItems((prev) => prev.map((p) => (p.key === key ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));

  const totals = useMemo(() => {
    const subtotal = items.reduce((s, p) => s + p.price * p.qty, 0);
    return { subtotal, shipping: subtotal > 0 ? 79 : 0, total: subtotal > 0 ? subtotal + 79 : 0 };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, add, remove, inc, dec, totals }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);


