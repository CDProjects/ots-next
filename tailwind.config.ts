/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 2s ease-in-out forwards',
        'fadeOut': 'fadeOut 2s ease-in-out forwards',
        'lightPanGradient': 'lightPanGradient 4s ease-in-out forwards',
        'slideUp': 'slideUp 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': { 
            opacity: '1'
          },
          '100%': { 
            opacity: '0',
            visibility: 'hidden'
          },
        },
        lightPanGradient: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0.7'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backgroundColor: {
        'true-black': '#000000',
      }
    },
  },
  plugins: [],
};