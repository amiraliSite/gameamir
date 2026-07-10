import React from 'react';
import { useLang } from '../context/LangContext';
import { FaCertificate, FaHeadset, FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import {ShieldCheck} from 'lucide-react'

export default function Features() {
  const { t } = useLang();

  const items = [
    { icon: <FaShippingFast color='red'/> , title: t.feat1t, desc: t.feat1d },
    { icon: <ShieldCheck size={40} color='green'/> , title: t.feat2t, desc: t.feat2d },
    { icon: <FaHeadset color='blue'/> , title: t.feat3t, desc: t.feat3d },
    { icon: <FaShieldAlt color='yellow' /> , title: t.feat4t, desc: t.feat4d },
  ];

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-display font-extrabold text-3xl text-center mb-12" style={{ color: 'var(--neon-cyan)' }}>
        {t.features}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="neon-card p-6 text-center fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center justify-center text-4xl mb-4">{it.icon}</div>
            <h3 className="font-bold text-lg mb-2">{it.title}</h3>
            <p className="text-sm opacity-70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}