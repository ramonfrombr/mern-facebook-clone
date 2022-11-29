/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./pages/**/*.{html,js, jsx}",
      "./components/**/*.{html,js, jsx}",
      "./routes/*.{html,js,jsx}",
      "../public/*.html",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
