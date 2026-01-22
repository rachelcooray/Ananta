/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ananta: {
          bg: "#0b1e15", // Extracted Deep Forest Green
          gold: "#caab65", // Extracted Muted Gold
          silver: "#C0C0C0",
          text: "#F5F5F5",
          muted: "#A3A3A3",
        }
      },
      fontFamily: {
        serif: ["'Inter'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
