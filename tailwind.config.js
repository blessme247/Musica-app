/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'playlist1': "linear-gradient(rgba(0,0,0,0.452)),url('../src/assets/Images/Rectangle 14.png')"
      },
      backgroundImage: {
        'cover-image':
          "linear-gradient(to right, rgba(0,0,0, 0.452), rgba(0, 0, 06, 0.452))",
      },
    },
  },
  plugins: [],
}
