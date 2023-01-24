/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      Mobile: "1440px",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Fraunces: ["Fraunces", "serif"],
    },
    colors: {
      "Dark-cyan": "hsl(158, 36%, 37%)",
      Cream: "hsl(30, 38%, 92%)",
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      White: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
