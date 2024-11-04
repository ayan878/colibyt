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
        light: "2px 2px 5px rgba(255, 255, 255, 0.5)",
        dark: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        darker: "4px 4px 15px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        vibration: "vibrate 0.5s infinite",
        rotateClockwise: "spinClockwise 20s linear infinite",
        rotateAntiClockwise: "spinAntiClockwise 20s linear infinite",
      },
      keyframes: {
        spinClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinAntiClockwise: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        vibrate: {
          "0%": { transform: "rotate(0)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(8deg)" },
          "60%": { transform: "rotate(-8deg)" },
          "80%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
    },
  },
  plugins: [],
};
