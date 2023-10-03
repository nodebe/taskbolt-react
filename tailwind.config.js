/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5720DD',
        'primary-transparent': 'rgba(87, 32, 221, 0.1)',
        'secondary': '#252525',
        'secondary-grey': '#333333',
        'secondary-light-grey': '#767676',
        'button-secondary': '#252525',
        'button-primary': '#5720DD',
      },
    },
  },
  plugins: [],
}