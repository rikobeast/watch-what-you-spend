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
    },
    colors: {
      primary: '#0E7C7B',
      secondary: '#17BEBB',
      'light-blue': '#D4F4DD',
      red: '#D62246',
      purple: '#4B1D3F',
    },
    extend: {},
  },
  plugins: [],
};
