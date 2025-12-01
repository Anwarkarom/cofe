// src/context/CartContext.js
import React, { createContext, useContext, useMemo, useState } from "react";
import menuData from "../data/menu";

const CartContext = createContext();

function computeUnitPrice(product, sizeId, addOns = []) {
  let base = product.price;

  if (product.sizes && sizeId) {
    const size = product.sizes.find((s) => s.id === sizeId);
    if (size) {
      base += size.priceModifier || 0;
    }
  }

  const addOnsTotal = addOns.reduce((sum, a) => sum + (a.price || 0), 0);

  return base + addOnsTotal;
}

function buildConfigKey(id, sizeId, addOns = []) {
  const addOnIds = addOns.map((a) => a.id).sort().join("|");
  return `${id}__${sizeId || "BASE"}__${addOnIds || "NONE"}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (id, config = {}) => {
    const product = menuData.find((m) => m.id === id);
    if (!product) return;

    const { sizeId, sizeLabel, addOns = [], unitPrice } = config;
    const key = buildConfigKey(id, sizeId, addOns);
    const pricePerUnit =
      typeof unitPrice === "number"
        ? unitPrice
        : computeUnitPrice(product, sizeId, addOns);

    setItems((prev) => {
      const existing = prev.find((p) => p.key === key);
      if (existing) {
        return prev.map((p) =>
          p.key === key ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        {
          key,
          id,
          name: product.name,
          category: product.category,
          sizeId: sizeId || null,
          sizeLabel: sizeLabel || null,
          addOns,
          unitPrice: pricePerUnit,
          quantity: 1
        }
      ];
    });
  };

  const removeItem = (key) => {
    setItems((prev) => prev.filter((p) => p.key !== key));
  };

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key);
      return;
    }
    setItems((prev) =>
      prev.map((p) => (p.key === key ? { ...p, quantity } : p))
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0
    );
    return { totalItems, totalPrice };
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totals
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
