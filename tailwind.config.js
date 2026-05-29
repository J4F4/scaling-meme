/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e6',
          200: '#9eb0d4',
          300: '#7690c2',
          400: '#5878b5',
          500: '#3a60a8',
          600: '#2d5299',
          700: '#1e3a5f',
          800: '#1a2f4d',
          900: '#0A1628',
          950: '#060d1a',
        },
        gold: {
          300: '#e8c97a',
          400: '#d4a843',
          500: '#c9a96e',
          600: '#b8913a',
          700: '#9a7a2e',
        },
        cream: {
          50:  '#fefefe',
          100: '#f8f6f0',
          200: '#f2ede0',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A1628 0%, #1e3a5f 50%, #1a2744 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a96e 0%, #b8913a 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.8) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px -10px rgba(10, 22, 40, 0.3)',
        'card': '0 4px 30px rgba(10, 22, 40, 0.08)',
        'card-hover': '0 20px 60px rgba(10, 22, 40, 0.15)',
        'gold': '0 4px 20px rgba(201, 169, 110, 0.4)',
      },
    },
  },
  plugins: [],
};
