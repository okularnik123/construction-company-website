/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        primary10: "rgba(0, 127, 255, 0.4)",
        background: "#F7FAFF",
        accent: "#FF6F00",
        black: "#151617",
        black5: "rgba(21, 22, 23, 0.05)",
        black10: "rgba(21, 22, 23, 0.10)",
        black90: "rgba(21, 22, 23, 0.9)",
        black60: "rgba(21, 22, 23, 0.6)",
      },
    },
  },
  plugins: [],
};
