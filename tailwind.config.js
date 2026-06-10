/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        cream: '#FAF6F1',
        sand: '#EFE6DA',
        ink: '#1A1715',
        rose: '#C9A28A',
        gold: '#B8956A'
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both'
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
      }
    }
  },
  plugins: []
};
