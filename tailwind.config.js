/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'playlist1': "linear-gradient(rgba(0,0,0,0.452)),url('../src/assets/Images/Rectangle 14.png')"
      }
    },
  },
  plugins: [],
}
