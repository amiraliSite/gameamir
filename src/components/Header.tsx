import React, { useEffect, useState } from 'react';
import { useLang } from '../context/LangContext';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { Moon, ShoppingCart, Sun, Home, ShoppingBag, Info } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
  onNav: (section: 'home' | 'products' | 'about') => void;
}

export default function Header({ onCartClick, onNav }: HeaderProps) {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'about'>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section: 'home' | 'products' | 'about') => {
    setActiveSection(section);
    onNav(section);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-fuchsia-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="relative w-11 h-11 clip-hex bg-gradient-to-br from-pink-500 via-violet-600 to-cyan-500 flex items-center justify-center font-display font-black text-xl float">
                N
              </div>
              <span className="font-display font-extrabold text-xl tracking-wide" style={{ color: 'var(--neon-cyan)' }}>
                {t.brand}
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium">
              <button onClick={() => handleNav('home')} className="hover:text-pink-400 transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => handleNav('products')} className="hover:text-pink-400 transition-colors">
                {t.nav.products}
              </button>
              <button onClick={() => handleNav('about')} className="hover:text-pink-400 transition-colors">
                {t.nav.about}
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
                className="px-3 py-2 rounded-full glass text-sm font-bold hover:scale-105 transition-transform"
                title="Language"
              >
                {lang === 'fa' ? 'EN' : 'فا'}
              </button>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform text-lg"
                title={t.themeToggle}
              >
                {theme === 'dark' ? <Moon /> : <Sun />}
              </button>
              <button
                onClick={onCartClick}
                className="relative w-10 h-10 rounded-full btn-neon flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ShoppingCart />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-xs font-black rounded-full w-5 h-5 flex items-center justify-center badge-pulse">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation - فقط در موبایل */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 shadow-lg shadow-black/20">
        <div className="flex items-center justify-around h-16 px-2">
          <button
            onClick={() => handleNav('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeSection === 'home' 
                ? 'text-cyan-400 scale-110' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home size={24} className={activeSection === 'home' ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : ''} />
            <span className="text-xs font-bold">{t.nav.home}</span>
            {activeSection === 'home' && (
              <div className="absolute bottom-1 w-8 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            )}
          </button>

          <button
            onClick={() => handleNav('products')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeSection === 'products' 
                ? 'text-pink-400 scale-110' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <ShoppingBag size={24} className={activeSection === 'products' ? 'drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]' : ''} />
            <span className="text-xs font-bold">{t.nav.products}</span>
            {activeSection === 'products' && (
              <div className="absolute bottom-1 w-8 h-0.5 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
            )}
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeSection === 'about' 
                ? 'text-violet-400 scale-110' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Info size={24} className={activeSection === 'about' ? 'drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]' : ''} />
            <span className="text-xs font-bold">{t.nav.about}</span>
            {activeSection === 'about' && (
              <div className="absolute  bottom-1 w-8 h-0.5 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}