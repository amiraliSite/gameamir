import React from 'react';
import { useLang } from '../context/LangContext';
import {  MessageCircle } from 'lucide-react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-10 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 clip-hex bg-gradient-to-br from-pink-500 to-cyan-500 shadow-lg shadow-cyan-500/50" />
            <span className="font-display font-extrabold" style={{ color: 'var(--neon-cyan)' }}>
              {t.brand}
            </span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed">{t.footerDesc}</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-cyan-500 rounded-full" />
            {t.quickLinks}
          </h4>
          <ul className="text-sm opacity-70 space-y-2">
            <li className="hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">{t.nav.home}</li>
            <li className="hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">{t.nav.products}</li>
            <li className="hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">{t.nav.about}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-cyan-500 rounded-full" />
            {t.support}
          </h4>
          <ul className="text-sm opacity-70 space-y-2">
            <li className="hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">{t.contactUs}</li>
            <li className="hover:opacity-100 hover:translate-x-1 transition-all cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-cyan-500 rounded-full" />
            Social
          </h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/50 hover:scale-110 transition-all group">
              <FaInstagram size={18} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110 transition-all group">
              <FaTwitter size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 transition-all group">
              <MessageCircle size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* بخش سازنده */}
      <div className="border-t border-white/10 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs opacity-50">© 2026 {t.brand}. {t.footerRights}</div>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-white/10 hover:border-cyan-500/30 transition-all">
           <div className="flex items-center p-8 gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-white/10 hover:border-cyan-500/30 transition-all">
  <div className="w-30 h-20  m-10 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/30 animate-bounce">
    <img 
      src="../../public/-2147483648_-211005.jpg"
      alt="امیرعلی محمدی"
      className="w-full h-full object-cover "
    />
  </div>
  <div className="text-right">
    <p className="text-[10px] opacity-50 mb-0.15">{t.madeBy}</p>
    <a 
      href="https://amirresume.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[20px] font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
    >
      {t.developer}
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}