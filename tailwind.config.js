/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'icons-bg' : 'hsla(0,0%,100%,0.2)',
      },
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
          blue6: "#012147",
          blue7: "#0078D4",
          darkBlue1: "#182B46",
          darkBlue2: "#213B63",
          darkBlue3: "#24262B",
          white: "#FEFFFE",
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          lg: '984px',
        },
    },
  },
  plugins: [],
}
};