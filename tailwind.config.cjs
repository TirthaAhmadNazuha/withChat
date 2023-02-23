/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#f4f4f4',
          sekunder: colors.slate[300],
          head: colors.stone[900],
          sub: colors.slate[700],
          colored: colors.amber[300],
        },
        dark: {
          primary: '#141414',
          sekunder: '#131d1a',
          head: colors.stone[900],
          sub: colors.slate[700],
          colored: colors.emerald[800],
        },
      },
    },
  },
  plugins: [],
};
