/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      serif: "Poppins, sans-serif",
      body: "Poppins, sans-serif"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      primary: {
        300: "#6680db",
        500: "#4c67c7",
        900: "#243778"
      },
      danger: {
        500: "#ff5555"
      }
    },
    extend: {
      fontSize: {
        h1: ["2.5rem"],
        h2: ["2rem"],
        h3: ["1.8rem"],
        h4: ["1.5rem"],
        h5: ["1.3rem"],
        h6: ["1.1rem"]
      }
    }
  },
  plugins: []
};
