/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Anek Latin"', 'sans-serif'],
      },
      fontSize: {
        h1: '2rem',
        xs: '0.7rem',
        md: '1.1rem',
        lg: '1.5rem',
        xl: '1.9rem',
      },
      colors: {
        dark: {
          primary: '#2a2b2d',
          primaryAccent: '#494a4d',
          secondary: '#D9D9D9',
          accent: '#f5021b',
          error: '#d9514ef',
        },
      },
    },
  },
  plugins: [],
};
