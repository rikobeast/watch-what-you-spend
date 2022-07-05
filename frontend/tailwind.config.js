/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: 'Roboto, sans-serif',
    },
    fontSize: {
      h1: '2rem',
      xs: '0.7rem',
      md: '0.9rem',
      lg: '1.5rem',
      xl: '1.9rem',
    },
    colors: {
      primary: '#0E7C7B',
      'primary-30': 'rgba(14, 124, 123,0.3)',
      secondary: '#17BEBB',
      'light-blue': '#D4F4DD',
      red: '#D62246',
      purple: '#4B1D3F',
    },
    extend: {},
  },
  plugins: [],
};