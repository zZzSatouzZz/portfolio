/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', '"DM Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        accent: '#00FF88',
        accent2: '#FF3366',
        surface: '#0A0A0F',
        'surface-2': '#111118',
        'surface-3': '#1A1A24',
        border: 'rgba(255,255,255,0.08)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-accent': 'pulseAccent 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'slide-up-delay': 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both',
        'slide-up-delay2': 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both',
        'fade-in': 'fadeIn 0.5s ease both',
        'marquee': 'marquee 20s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'bounce-x': 'bounceX 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-16px)' } },
        pulseAccent: { '0%,100%': { boxShadow: '0 0 0 0 rgba(0,255,136,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(0,255,136,0)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(32px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        glow: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        bounceX: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(6px)' } },
      },
    },
  },
  plugins: [],
};
