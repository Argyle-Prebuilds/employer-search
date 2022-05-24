const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["CircularXX", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ["40px", "49px"],
        heading: ["28px", "34px"],
        subheading: ["24px", "32px"],
        paragraph: ["16px", "20px"],
        footnote: ["12px", "15px"],
      },
      colors: {
        now: {
          blue: "#4C7CDA",
          grey: "#94959A",
          darkest: "#313439",
          purple: "#696EE3",
          darkorange: "#937F53",
          orange: "#FFA437",
          green: "#4FC464",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
