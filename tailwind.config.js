/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // This line is important for purging unused styles
  theme: {
    extend: {},
  },
  plugins: [],
};
