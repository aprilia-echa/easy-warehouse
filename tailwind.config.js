/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        serifDisplay: ['"Cormorant Garamond"', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
      }, 
       plugins: [require("daisyui")],
      colors: {
        red: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-in-right': 'fadeInRight 0.9s ease-out 0.2s both',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'float-med': 'floatMed 3.5s ease-in-out infinite 0.8s',
        'float-fast': 'floatFast 3s ease-in-out infinite 0.4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        floatMed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins:  [daisyui],
}
