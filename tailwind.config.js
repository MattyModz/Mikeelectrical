module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Default padding
        sm: "2rem",
        md: "2rem", // Padding for small screens and up
        lg: "2rem", // Padding for large screens and up (adjusted to 0.5rem)
      },
    },
    extend: {
      padding: { "fluid-video": "56.25%" },
      colors: {},
      fontfamily: {
        "shadows-into-light": ['"Shadows Into Light"'],
      },

      screens: {
        screens: {
          xs: "320px",
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "768px",
          // => @media (min-width: 768px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }
          ml: "1186px",
          xl: "1291px",
          // => @media (min-width: 1291px) { ... }

          xll: "1440px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }

          "3xl": "1920px",
          // => @media (min-width: 1920px) { ... }
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
