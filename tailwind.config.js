/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
      },
    },
    screens: {
      sm: "640px", // mobile → tablet
      md: "768px", // tablet
      lg: "1024px", // small laptop
      xl: "1280px", // large desktop
      "2xl": "1536px", // very large screens
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
