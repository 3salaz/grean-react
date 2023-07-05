/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myshadow1: '4.1px -5px 0 0 white',
        myshadow2: '-4.1px -5px 0 0 white'
      }
    },
  },
  plugins: [],
}
