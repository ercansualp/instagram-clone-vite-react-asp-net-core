/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        HeartButtonAnimation: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(.95)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        HeartButtonAnimation: 'HeartButtonAnimation 1s ease-in-out',
      }
    },
  },
  plugins: [],
}