import React from 'react';
import { useLang } from '../context/LangContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/i18n';
import { ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { lang, t } = useLang();
  const { items, updateQty, removeItem, subtotal } = useCart();

  const closedTransform = lang === 'fa' ? 'translateX(100%)' : 'translateX(-100%)';

  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div
        className={`absolute top-0 ${lang === 'fa' ? 'right-0' : 'left-0'} h-full w-full sm:w-[420px] glass shadow-2xl flex flex-col transition-transform duration-500 ease-out`}
        style={{ transform: open ? 'translateX(0)' : closedTransform }}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h3 className="font-display font-extrabold text-lg">{t.cartTitle}</h3>
          <button onClick={onClose} className="w-9 h-9 rounded-full glass hover:scale-110 transition-transform">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-20 opacity-70">
              <div className="text-5xl mb-4"> <ShoppingCart /> </div>
              <p className="mb-6">{t.cartEmpty}</p>
              <button onClick={onClose} className="btn-neon px-6 py-3 rounded-xl font-bold">
                {t.cartEmptyBtn}
              </button>
            </div>
          )}
          {items.map((it) => {
            const name = lang === 'fa' ? it.product.nameF : it.product.nameE;
            return (
              <div key={it.product.id} className="neon-card p-3 flex gap-2 items-center">
                <div className='w-16 h-20 rounded'>
                   <img className='rounded-xl' src={it.product.image} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm line-clamp-1">{name}</div>
                  <div className="text-sm opacity-70">{formatPrice(it.product.price, lang)}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(it.product.id, it.qty - 1)} className="w-7 h-7 rounded-full glass font-bold">
                      -
                    </button>
                    <span className="w-6 text-center">{it.qty}</span>
                    <button onClick={() => updateQty(it.product.id, it.qty + 1)} className="w-7 h-7 rounded-full glass font-bold">
                      +
                    </button>
                    <button
                      onClick={() => removeItem(it.product.id)}
                      className="text-xs opacity-60 hover:opacity-100 hover:text-red-400 transition ms-auto"
                    >
                      {t.remove}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 space-y-2">
            <div className="flex justify-between text-sm opacity-80">
              <span>{t.subtotal}</span>
              <span>{formatPrice(subtotal, lang)}</span>
            </div>
            <div className="flex justify-between text-sm opacity-80">
              <span>{t.shipping}</span>
              <span className="text-emerald-400">{t.freeShipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-white/10">
              <span>{t.total}</span>
              <span style={{ color: 'var(--neon-gold)' }}>{formatPrice(subtotal, lang)}</span>
            </div>
            <button onClick={onCheckout} className="btn-neon w-full py-4 rounded-xl font-bold mt-3">
              {t.checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
