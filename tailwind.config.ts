import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07182f',
        ink: '#10243e',
        cloud: '#f7f4ee',
        cream: '#fffaf0',
        skysoft: '#dbeafe',
        honey: '#f5c542',
        pollen: '#fff3c2',
        slateblue: '#385a7c',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(7, 24, 47, 0.16)',
        honey: '0 14px 42px rgba(245, 197, 66, 0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
