import React, { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Newsletter() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
  };

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="neon-card p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 30%, var(--neon-pink), transparent 60%)' }} />
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-2 relative z-10" style={{ color: 'var(--neon-gold)' }}>
          {t.newsletterTitle}
        </h2>
        <p className="opacity-70 mb-6 relative z-10">{t.newsletterSub}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={t.newsletterPlaceholder}
            className="glass flex-1 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="btn-neon px-6 py-3 rounded-xl font-bold">{t.subscribe}</button>
        </form>
        {sent && <p className="mt-4 text-emerald-400 font-bold relative z-10">✓</p>}
      </div>
    </section>
  );
}
