import React, { useRef, useState } from 'react';
import { LangProvider, useLang } from './context/LangContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import Toast from './components/Toast';
import ScrollBar from './components/ScrollBar';
import { Product } from './types';

type Section = 'home' | 'products' | 'about';

function StoreExperience() {
  const { t } = useLang();
  const { addToCart, clearCart } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAdd = (p: Product) => {
    addToCart(p);
    setToast(t.added);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  const scrollTo = (section: Section) => {
    if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else if (section === 'products') document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'about') document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg" />
      <ScrollBar />
      <Toast message={toast} />
      <Header onCartClick={() => setCartOpen(true)} onNav={scrollTo} />
      <Hero onShop={() => scrollTo('products')} />
      <ProductsSection onAdd={handleAdd} />
      <Features />
      <Newsletter />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />
      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onDone={() => {
          setCheckoutOpen(false);
          clearCart();
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <CartProvider>
          <StoreExperience />
        </CartProvider>
      </ThemeProvider>
    </LangProvider>
  );
}
