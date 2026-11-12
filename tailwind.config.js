/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        lavender: 'rgb(var(--lavender) / <alpha-value>)',
        sky: 'rgb(var(--sky) / <alpha-value>)',
        mint: 'rgb(var(--mint) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        glass: '1.75rem',
      },
      boxShadow: {
        glass: '0 10px 40px -12px rgba(116,101,216,0.18), 0 2px 8px -2px rgba(36,36,58,0.05)',
        lift: '0 24px 60px -16px rgba(116,101,216,0.28), 0 4px 12px -4px rgba(36,36,58,0.06)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(24px,-18px) scale(1.06)' },
        },
        ping2: {
          '75%,100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        floatsm: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrolldot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%,100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
      animation: {
        'float-sm': 'floatsm 4s ease-in-out infinite',
        marquee: 'marquee 45s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 36s linear infinite',
        scrolldot: 'scrolldot 1.8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        ping2: 'ping2 1.8s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
