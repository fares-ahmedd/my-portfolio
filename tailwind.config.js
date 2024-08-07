/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "btn-color": "var(--btn-color)",
        "btn-color-hover": "var(--btn-color-hover)",
      },
    },
  },
  plugins: [],
};
