/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-dark": "var(--primary-color-dark)",
        "secondary-color": "var(--secondary-color)",
        "secondary-color-dark": "var(--secondary-color-dark)",
        "scores-green": "var(--scores-green)",
        "scores-red": "var(--scores-red)",
        "scores-yellow": "var(--scores-yellow)",
      },
    },
  },
  plugins: [],
};
