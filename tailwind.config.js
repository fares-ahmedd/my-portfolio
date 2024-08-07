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
        "highlight-link": "var(--highlight-link)",
        "main-background-color": "var(--main-background-color)",
        "second-background": "var(--second-background)",
        "main-text": "var(--header-background)",
      },
    },
  },
  plugins: [],
};
