/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0a0118',
          2: '#150726',
          3: '#1e0d34',
        },
        neon: {
          pink: '#ff2e88',
          cyan: '#00f0ff',
          violet: '#a742ff',
          gold: '#ffd60a',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        spinSlow: 'spin 20s linear infinite',
        spinSlowReverse: 'spin 15s linear infinite reverse',
        shimmer: 'shimmer 2.5s infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease both',
        toastIn: 'toastIn 0.4s cubic-bezier(0.2,0.9,0.3,1.3), toastOut 0.4s ease 2.6s forwards',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,46,136,0.6)' },
          '50%': { boxShadow: '0 0 0 8px rgba(255,46,136,0)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        toastIn: {
          from: { opacity: 0, transform: 'translateY(-20px) scale(0.9)' },
          to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        toastOut: {
          to: { opacity: 0, transform: 'translateY(-10px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
