module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F2F5F9",
        secondary200: "#F2F5F9",
      },
      gridTemplateRows: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridRow: {
        "span-22": "span 22 / span 22",
      },
    },
  },
  plugins: [],
};
