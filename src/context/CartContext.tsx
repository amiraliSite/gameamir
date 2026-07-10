import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextValue {
  items: CartItem[];
  addToCart: (p: Product) => void;
  updateQty: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  count: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((p: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === p.id);
      if (existing) {
        return prev.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { product: p, qty: 1 }];
    });
  }, []);

  const updateQty = useCallback((id: number, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.product.id !== id) : prev.map((i) => (i.product.id === id ? { ...i, qty } : i))
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQty, removeItem, clearCart, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
