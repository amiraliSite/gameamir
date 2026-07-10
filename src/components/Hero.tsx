import React, { useState } from 'react';
import { useLang } from '../context/LangContext';
import Starfield from './Starfield';
import { FaGamepad, FaXbox } from 'react-icons/fa';
import { BsXbox } from 'react-icons/bs';

interface HeroProps {
  onShop: () => void;
}

export default function Hero({ onShop }: HeroProps) {
  const { t } = useLang();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const stats: [string, string][] = [
    ['120K+', t.statUsers],
    ['3,400+', t.statProducts],
    ['98%', t.statRating],
  ];
  const statColors = ['var(--neon-pink)', 'var(--neon-cyan)', 'var(--neon-gold)'];

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Starfield />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{ background: 'var(--neon-pink)', top: '-10%', left: '10%', transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
        style={{ background: 'var(--neon-cyan)', bottom: '-5%', right: '10%', transform: `translate(${mouse.x * -30}px, ${mouse.y * -30}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center w-full">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-bold mb-6" style={{ color: 'var(--neon-gold)' }}>
             {t.hot} — SEASON SALE
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            <span className="block glow-text" style={{ color: 'var(--neon-pink)' }}>
              {t.heroTitle1}
            </span>
            <span className="block" style={{ color: 'var(--neon-cyan)' }}>
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-lg opacity-80 mb-8 max-w-lg">{t.heroSub}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={onShop} className="btn-neon px-8 py-4 rounded-xl font-bold font-display text-white">
              {t.heroCta}
            </button>
            <button className="btn-ghost px-8 py-4 rounded-xl font-bold font-display">{t.heroCta2}</button>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {stats.map(([num, label], i) => (
              <div key={i}>
                <div className="font-display font-extrabold text-2xl" style={{ color: statColors[i] }}>
                  {num}
                </div>
                <div className="text-xs opacity-60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center fade-up" style={{ animationDelay: '.2s' }}>
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 animate-spinSlow" style={{ borderColor: 'var(--neon-cyan)' }} />
            <div className="absolute inset-8 rounded-full border-2 border-dashed opacity-20 animate-spinSlowReverse" style={{ borderColor: 'var(--neon-pink)' }} />
            <div className="absolute inset-0 flex items-center justify-center text-[180px] float"> <FaXbox className='animate-bounce' /> </div>
          </div>
        </div>
      </div>
    </section>
  );
}
