/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    // container: {
    //   center: true,
    //   padding: '4rem'
    // },

    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
    // colors: {
    //   primary: "blue-500",
    //  secondary: "red-500",
    // },

  },
  plugins: [],
}
