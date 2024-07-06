/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        logo: {
          blue1: "#1B2F4F",
          blue2: "#0476D1",
          blue3: "#56E2F4",
          blue4: "#2f67f8",
          blue5: "#2f67f8",
          darkBlue1: "#182B46",
          darkBlue2: "#213B63",
          white: "#FEFFFE",
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px', 
        },
    },
  },
  plugins: [],
}
};