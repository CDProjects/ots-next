/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'lightPan': 'lightPan 2s ease-in-out',
        'lightPanGradient': 'lightPanGradient 2s ease-in-out',
        'fadeOut': 'fadeOut 1s ease-in-out forwards',
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        lightPan: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        lightPanGradient: {
          '0%': { transform: 'translateX(-100%)', opacity: '0.5' },
          '100%': { transform: 'translateX(100%)', opacity: '0.5' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};