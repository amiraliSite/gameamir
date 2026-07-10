import React, { useMemo, useState } from 'react';
import { useLang } from '../context/LangContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/i18n';
import { CheckoutForm } from '../types';
import { FaXmark } from 'react-icons/fa6';
import { PartyPopper } from 'lucide-react';

interface CheckoutProps {
  open: boolean;
  onClose: () => void;
  onDone: () => void;
}

const EMPTY_FORM: CheckoutForm = { name: '', phone: '', address: '', city: '', card: '', expiry: '', cvv: '' };

export default function Checkout({ open, onClose, onDone }: CheckoutProps) {
  const { lang, t } = useLang();
  const { subtotal } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<CheckoutForm>(EMPTY_FORM);

  const orderCode = useMemo(() => 'NA-' + Math.floor(100000 + Math.random() * 900000), [open]);

  if (!open) return null;

  const steps = [t.stepShipping, t.stepPayment, t.stepDone];

  const handleDone = () => {
    onDone();
    setStep(1);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/70" />
      <div className="relative glass rounded-3xl w-full max-w-lg p-6 sm:p-8 fade-up max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-extrabold text-xl" style={{ color: 'var(--neon-pink)' }}>
            {t.checkoutTitle}
          </h3>
          <button onClick={onClose} className="w-9 h-9 rounded-full glass hover:scale-110 transition-transform">
              <FaXmark />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${step > i ? 'btn-neon' : 'glass'}`}>{i + 1}</div>
                <span className="text-[10px] opacity-70 text-center max-w-[60px]">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-1 rounded-full ${step > i + 1 ? 'checkout-step-line' : 'bg-white/10'}`} />}
            </React.Fragment>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <input
              placeholder={t.fullName}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              placeholder={t.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              placeholder={t.city}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder={t.address}
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none h-24"
            />
            <button onClick={() => setStep(2)} className="btn-neon w-full py-4 rounded-xl font-bold">
              {t.next}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input
              placeholder={t.cardNumber}
              value={form.card}
              onChange={(e) => setForm({ ...form, card: e.target.value })}
              className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 tracking-widest"
            />
            <div className="flex gap-4">
              <input
                placeholder={t.cardExpiry}
                value={form.expiry}
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                className="glass w-1/2 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                placeholder={t.cardCvv}
                value={form.cvv}
                onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                className="glass w-1/2 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex justify-between text-lg font-bold py-3 border-t border-b border-white/10">
              <span>{t.total}</span>
              <span style={{ color: 'var(--neon-gold)' }}>{formatPrice(subtotal, lang)}</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-ghost flex-1 py-4 rounded-xl font-bold">
                {t.back}
              </button>
              <button onClick={() => setStep(3)} className="btn-neon flex-1 py-4 rounded-xl font-bold">
                {t.payNow}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-6">
            <div className="text-6xl mb-4"> <PartyPopper /> </div>
            <h4 className="font-bold text-xl mb-2" style={{ color: 'var(--neon-cyan)' }}>
              {t.orderSuccess}
            </h4>
            <p className="opacity-70 mb-1">{t.orderSuccessSub}</p>
            <p className="font-display font-extrabold text-lg mb-8" style={{ color: 'var(--neon-gold)' }}>
              {orderCode}
            </p>
            <button onClick={handleDone} className="btn-neon w-full py-4 rounded-xl font-bold">
              {t.backHome}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
