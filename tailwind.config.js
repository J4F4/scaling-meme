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
        // الألوان الرسمية لمحمد الحبيشي العقارية
        navy: {
          50:  '#eef2fa',
          100: '#d5def2',
          200: '#aabde6',
          300: '#7f9cd9',
          400: '#547bcc',
          500: '#2d5ab8',
          600: '#1f4a9e',
          700: '#173B73',  // اللون الأساسي الرسمي #173B73
          800: '#112d58',
          900: '#0a1f3d',
          950: '#060f1e',
        },
        gold: {
          300: '#e8c97a',
          400: '#d4a843',
          500: '#c9a96e',
          600: '#b8913a',
          700: '#9a7a2e',
        },
        silver: {
          100: '#f0f1f3',
          200: '#d8dae0',
          300: '#B8BDC7',  // الفضي الرسمي
          400: '#9ca3af',
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
        // التدرج الرئيسي باللون الأساسي #173B73
        'gradient-navy': 'linear-gradient(135deg, #0a1f3d 0%, #173B73 60%, #1f4a9e 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a96e 0%, #b8913a 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(23,59,115,0.2) 0%, rgba(23,59,115,0.85) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px -10px rgba(23, 59, 115, 0.4)',
        'card': '0 4px 30px rgba(23, 59, 115, 0.08)',
        'card-hover': '0 20px 60px rgba(23, 59, 115, 0.18)',
        'gold': '0 4px 20px rgba(201, 169, 110, 0.5)',
      },
    },
  },
  plugins: [],
};
