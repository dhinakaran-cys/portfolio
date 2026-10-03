/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0a',
          light: '#1a1a1a',
          accent: '#00f0ff',
          green: '#00ff41'
        }
      }
    },
  },
  plugins: [],
}
