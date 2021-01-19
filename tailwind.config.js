module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bitter: ["Bitter", "serif"],
      },
      screens: {
        xs: "415px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
