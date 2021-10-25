module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144':'37.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}