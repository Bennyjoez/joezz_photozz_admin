/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': "rgba(76, 73, 237, 1)",
        "primary-text": "#343C6A",
        "primary-bg": "#F5F7FA",
      }
    },
  },
  plugins: [],
}

