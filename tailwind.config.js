module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#4D0ADB",
        purple2: "#3C06B0",
        yellow: "#C0E914",
        "paragraph-alt": "#A6A6A6",
        paragraph: "#656565",
        blue: "#173EFF",
        border: "#C4C4C4",
        green: "#006D53",
      },
      scale: {
        200: "2",
        300: "100",
      },
      transformOrigin: {
        "top-right-8": "96% 10%",
      },
      borderRadius: {
        50: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
