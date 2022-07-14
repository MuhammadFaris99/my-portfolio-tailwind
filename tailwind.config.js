/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#65a30d',
        secondary: '#f59e0b',
        dark: '#0f172a',
        neutral: '#525252',
        dire: '#44505f',
      },
      screens: {
        '2xl': '1120px',
      },
    },
  },
  plugins: [],
}
