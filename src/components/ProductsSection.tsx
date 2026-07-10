import React, { useMemo, useState } from 'react';
import { useLang } from '../context/LangContext';
import { PRODUCTS } from '../data/products';
import { Category, Product } from '../types';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  onAdd: (p: Product) => void;
}

type CategoryFilter = Category | 'all';
type SortOption = 'popular' | 'priceLow' | 'priceHigh' | 'new';

export default function ProductsSection({ onAdd }: ProductsSectionProps) {
  const { t } = useLang();
  const [cat, setCat] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortOption>('popular');
  const [search, setSearch] = useState('');

  const cats: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'console', label: t.catConsole },
    { id: 'pc', label: t.catPC },
    { id: 'accessory', label: t.catAccessory },
    { id: 'chair', label: t.catChair },
    { id: 'headset', label: t.catHeadset },
  ];

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => cat === 'all' || p.cat === cat);
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((p) => p.nameF.includes(search) || p.nameE.toLowerCase().includes(s));
    }
    switch (sort) {
      case 'priceLow':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'new':
        list = [...list].sort((a, b) => (b.tag === 'new' ? 1 : 0) - (a.tag === 'new' ? 1 : 0));
        break;
      default:
        list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [cat, sort, search]);

  return (
    <section id="products-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-10 fade-up">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-2" style={{ color: 'var(--neon-pink)' }}>
          {t.sectionFeatured}
        </h2>
        <p className="opacity-70">{t.sectionFeaturedSub}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${cat === c.id ? 'btn-neon' : 'glass hover:scale-105'}`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="glass px-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-500 w-full md:w-56"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="glass px-4 py-2 rounded-full text-sm outline-none"
          >
            <option value="popular">{t.sortPopular}</option>
            <option value="priceLow">{t.sortPriceLow}</option>
            <option value="priceHigh">{t.sortPriceHigh}</option>
            <option value="new">{t.sortNew}</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p, i) => (
          <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <ProductCard product={p} onAdd={onAdd} />
          </div>
        ))}
      </div>
      {filtered.length === 0 && <div className="text-center opacity-60 py-20">😢</div>}
    </section>
  );
}
