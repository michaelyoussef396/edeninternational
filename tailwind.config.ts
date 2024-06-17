/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'diagonal-split': 'linear-gradient(75deg, red 50%, white 50%)',
      },
      colors: {
        heroRed: '#E11D48', // Assuming this is the red color used in the Hero component
      },
    },
  },
  plugins: [],
};
