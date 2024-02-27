/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1340px",
        xl: "1340px",
        "2xl": "1340px",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
        pt_serif: ["PT Serif", "serif"],
      },

      width: {
        "388px": "428px",
        "500px": "500px",
      },
      height: {
        "1px": "1.26px",
        "350px": "350px",
        "80vh": "80vh",
        "615px": "615px",
        "633.2px": "633.2px",
        "211px": "211.2px",
        "250px": "250",
      },
      colors: {
        "main-gradient-black": "rgba(0, 0, 0, 0.8)",
        "main-gradient-end": "rgba(0, 0, 0, 0.1)",
        "gradient-blue": "#6E8FE8",
        "main-blue": "#3da5ff",
        "different-white": "#f7f7f7",
        "grey-tone": "#F4F6F3",
        "different-black": "#052639",
        "grey-blue": "#266980",
      },

      spacing: {
        "2px": "2px",
      },
    },
  },
  plugins: [],
};
