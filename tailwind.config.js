/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        background: "#F7FAFF",
        accent: "#FF6F00",
        black: "#151617",
        black5: "rgba(21, 22, 23, 0.05)",
      },
    },
  },
  plugins: [],
};
