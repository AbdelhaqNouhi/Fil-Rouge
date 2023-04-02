/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
    colors: {
      // primary and secondary are the dominant colors
      primary: "#4E4A42", // brown (dark)
      secondary: "#D4C7A0", // brown (light)
      green: "#A3DE83", // green (light)
      white: "#FFFFFF", // white
      black: "#000000", // black
      // tertiary: "#364966", // blue (dark)
      // // the rest follow text color when dark mode is enabled you can change the colors to match your theme
      // quaternary: "#111111", // black (dark) -> for text
      // quinary: "white", // white -> for text
      // senary: "#232122", // bg color (dark)
      // gray: "#F4F4F4"
    },
  },
  plugins: [],
};