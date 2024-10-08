/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  darkMode: "class",
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
        "main-background": "var(--main-background)",
        "third-background": "var(--third-background)",
        "second-background": "var(--second-background)",
        "main-text": "var(--main-text)",
        "primary-text": "var(--primary-text)",
        "second-text": "var(--second-text)",
        "btn-background": "var(--btn-background)",
        "btn-background-hover": "var(--btn-background-hover)",
      },
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
