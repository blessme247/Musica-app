/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      dropShadow: {
        "custom": "0px -25px 100px rgb(16, 16, 16)",
      },
    },
  },
  plugins: [],
}
