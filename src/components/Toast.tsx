import React from 'react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] toast-anim">
      <div className="btn-neon px-6 py-3 rounded-full font-bold shadow-2xl">{message}</div>
    </div>
  );
}
