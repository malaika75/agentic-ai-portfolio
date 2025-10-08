/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        accent: '#0f172a',
      },
    },
  },
  plugins: [],
}
