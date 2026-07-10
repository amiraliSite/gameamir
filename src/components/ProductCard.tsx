import React from 'react';
import { Product } from '../types';
import { useLang } from '../context/LangContext';
import { formatPrice } from '../data/i18n';

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const { lang, t } = useLang();
  const name = lang === 'fa' ? product.nameF : product.nameE;
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <div className="neon-card p-5 flex flex-col h-full group">
      {/* بخش تصویر */}
      <div className={`relative h-44 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 overflow-hidden shadow-lg`}>
        {/* افکت شاین پس‌زمینه */}
        <div className="absolute inset-0 shimmer opacity-30" />
        
        {/* تصویر محصول */}
        <img 
          src={product.image} 
          alt={name} 
          className="relative w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
        />

        {/* برچسب تخفیف یا جدید/داغ */}
        {product.tag && (
          <span
            className={`absolute top-3 ${lang === 'fa' ? 'right-3' : 'left-3'} px-3 py-1 rounded-full text-xs font-black z-20 shadow-md ${
              product.tag === 'hot' ? 'bg-red-500 text-white' : 'bg-emerald-400 text-black'
            }`}
          >
            {product.tag === 'hot' ? t.hot : t.new}
          </span>
        )}
        
        {discount > 0 && (
          <span className={`absolute top-3 ${lang === 'fa' ? 'left-3' : 'right-3'} price-tag px-3 py-1 rounded-full text-xs font-black z-20 shadow-md bg-white/90 text-gray-900 backdrop-blur-sm`}>
            %{discount} {t.off}
          </span>
        )}
      </div>

      {/* اطلاعات محصول */}
      <h3 className="font-bold text-lg mb-1 line-clamp-1 text-gray-100">{name}</h3>
      
      <div className="flex items-center gap-1 mb-3 text-sm">
        <span className="rating-star" style={{ color: 'var(--neon-gold)' }}>
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
        </span>
        <span className="opacity-60 text-gray-400">({product.reviews})</span>
      </div>

      {/* قیمت و دکمه */}
      <div className="mt-auto">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display font-extrabold text-xl" style={{ color: 'var(--neon-cyan)' }}>
            {formatPrice(product.price, lang)}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through opacity-40 text-gray-400">
              {formatPrice(product.oldPrice, lang)}
            </span>
          )}
        </div>
        
        <button 
          onClick={() => onAdd(product)} 
          className="btn-neon w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        >
          {t.addToCart}
        </button>
      </div>
    </div>
  );
}