/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      spacing: {
        '100': '25rem', // Add custom value (e.g., 100 = 25rem)
        '128': '32rem', // Another custom value (128 = 32rem)
        // Add as many as you need
      },
    },
  },
  plugins: [require('daisyui')],
}

