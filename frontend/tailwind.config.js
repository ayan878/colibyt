/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coliColor: "#007ebe",
      },
      container: {
        center: true,
        padding: "4px",
        // screens: {
        //   sm: "500px", // Reduced small screen max width
        //   md: "600px", // Reduced medium screen max width
        //   lg: "800px", // Reduced large screen max width
        //   xl: "1000px", // Reduced extra large screen max width
        //   "2xl": "1200px", // Reduced 2x extra large screen max width
        // },
      },
        boxShadow: {
        light: '2px 2px 5px rgba(255, 255, 255, 0.5)',
        dark: '2px 2px 10px rgba(0, 0, 0, 0.2)',
        darker: '4px 4px 15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
