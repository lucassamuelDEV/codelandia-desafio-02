/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      white: '#F9F9F9',
      white200: '#EBE9EA',
      gray: '#474747',
      blackLight: '#181818',
    },
    fontFamily: {
      sans: "'Montserrat', sans-serif",
    },
  },
  plugins: [],
};
