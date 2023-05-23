/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: '1.5rem',
      },
      fontFamily: {
        principal: ['Caveat Brush', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: '#00235C',
        secondary: '#116CEF',
        white: '#FFFFFF',
        'background-editor': '#116CEF',
        'save-button': '#FF8552',
        'yellow-button': '#FFE600',
        'delete-button': '#EE3C3C',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
