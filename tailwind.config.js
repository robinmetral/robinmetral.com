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
      // customizing the typography plugin
      typography: (theme) => ({
        lg: {
          // we have to style the sizes directly, DEFAULT gets overridden
          css: {
            a: {
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.yellow.400"),
              },
            },
          },
        },
        xl: {
          css: {
            a: {
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.yellow.400"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
