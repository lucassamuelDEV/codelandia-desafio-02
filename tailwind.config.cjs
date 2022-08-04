/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#F9F9F9',
          200: '#EBE9EA',
        },
        gray: '#474747',
        black: {
          ligth: '#181818',
        },
      },
    },
    fontFamily: {
      sans: "'Montserrat', sans-serif",
    },
  },
  plugins: [],
};
