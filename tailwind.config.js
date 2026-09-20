/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Theme driven tokens — values live in src/index.css */
        base: 'rgb(var(--c-base) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--c-line-strong) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        active: 'rgb(var(--c-active) / <alpha-value>)',
        onactive: 'rgb(var(--c-on-active) / <alpha-value>)',
        /* Fixed brand palette */
        brand: {
          DEFAULT: '#7B2FF7',
          violet: '#5E5CFF',
          cyan: '#22D3EE',
          pink: '#F107A3',
        },
        ok: '#34D399',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 28px 90px rgba(0, 0, 0, 0.35)',
        'card-light': '0 28px 90px rgba(15, 23, 42, 0.08)',
        glow: '0 12px 30px rgba(123, 47, 247, 0.35)',
        'glow-lg': '0 20px 60px rgba(123, 47, 247, 0.45)',
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg, #7B2FF7 0%, #5E5CFF 50%, #22D3EE 100%)',
        'brand-grad-soft':
          'linear-gradient(135deg, rgba(123,47,247,0.16) 0%, rgba(34,211,238,0.16) 100%)',
        'brand-text': 'linear-gradient(90deg, #7B2FF7 0%, #22D3EE 50%, #F107A3 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        float: 'float 3.2s ease-in-out infinite alternate',
        'float-slow': 'float 3.8s ease-in-out 0.6s infinite alternate',
        'float-mid': 'float 2.6s ease-in-out 0.3s infinite alternate',
        'fade-in': 'fade-in 0.3s ease-out both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
