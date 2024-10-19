/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepCyan: {
          DEFAULT: "#036980", // Main color
        },
      },
    },
  },
  plugins: [],
};
