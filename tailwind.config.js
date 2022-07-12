/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
        "85vh": "85vh",
      },
    },
    minHeight: {
      "[860px]": "860px",
      "[920px]": "92px",
      "[1100px]": "1100px",
      "[150px]": "150px",
    },
    fontSize: {
      xxs: ".50rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: "1.100",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2/5xl": "1.7rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".15em",
      widest: ".25em",
    },
    screens: {
      xs: "560px",
      sm: "1100px",
      md: "980px",
      lg: "1100px",
      xl: "1100px",
    },
    container: {
      center: true,
      md: "",
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {},
    borderColor: {
      ...colors,
      primary: "#0095f6",
      gold: "#EBD59D",
    },
    textColor: {
      ...colors,
      primary: "#0095f6",
    },
    backgroundColor: {
      ...colors,
      primary: "#0095f6",
    },
    fill: ({ theme }) => ({
      disabled: "#0095f6",
    }),
  },
  plugins: [],
};
