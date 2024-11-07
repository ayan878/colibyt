/** @type {import('tailwindcss').Config} */
import clipPath from "tailwind-clip-path";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Axiforma Regular", "sans-serif"],
        heading: ["Axiforma Bold", "sans-serif"],
        solid: ["Font Awesome 6 Pro", "sans-serif"],
        regular: ["Font Awesome 6 Pro", "sans-serif"],
        light: ["Font Awesome 6 Pro", "sans-serif"],
        duotone: ["Font Awesome 6 Duotone", "sans-serif"],
        brands: ["Font Awesome 6 Brands", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        solid: "900",
        duotone: "900",
      },
      clipPath: {
        diamond: "polygon(80% 0px, 100% 20%, 100% 100%, 0px 100%, 0px 0px)",
        sim: "polygon(80% 0px, 100% 30%, 100% 100%, 0px 100%, 0px 0px)",
      },
      // Custom Colors
      colors: {
        body: "#004B72",
        primary: "#00a0f1",
        secondary: "#3DB7F4",
        dark: "#007EBE",
        light: "#E1F4FD",
        info: "#23BABF",
        warning: "#F3A338",
        danger: "#F26F4D",
        success: "#47B16A",
        "primary-rgb": "51, 179, 244",
        "secondary-rgb": "51, 179, 244",
        "dark-rgb": "0, 126, 190",
        "light-rgb": "225, 244, 253",
        "info-rgb": "35, 186, 191",
        "warning-rgb": "243, 163, 56",
        "danger-rgb": "242, 111, 77",
        "success-rgb": "71, 177, 106",
        "primary-bg-subtle": "rgba(0, 68, 235, 0.10)",
        "secondary-bg-subtle": "rgba(244, 67, 128, 0.10)",
        "info-bg-subtle": "rgba(35, 186, 191, 0.10)",
        "warning-bg-subtle": "rgba(243, 163, 56, 0.10)",
        "danger-bg-subtle": "rgba(242, 111, 77, 0.10)",
        "success-bg-subtle": "rgba(71, 177, 106, 0.10)",
        border: "#E3F0FF",
        "border-translucent": "rgba(227, 240, 255, 1)",
      },
      // Custom Border Radius
      borderRadius: {
        DEFAULT: "10px",
        sm: "20px",
        pill: "50px",
      },
      // Custom Transitions
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      container: {
        center: true,
        padding: "4px",
        screens: {
          xs: "0px",
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
        },
      },
      backgroundImage: {
        aboutBackground: "url('/src/assets/images/background/bg_image_2.webp')",
      },
      boxShadow: {
        light: "2px 2px 5px rgba(255, 255, 255, 0.5)",
        dark: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        darker: "4px 4px 15px rgba(0, 0, 0, 0.7)",
        diamond: " 0px 4px 23px 0px rgba(174, 191, 210, 0.3)",
      },
      animation: {
        vibration: "vibrate 0.5s infinite",
        rotateClockwise: "spinClockwise 20s linear infinite",
        rotateAntiClockwise: "spinAntiClockwise 20s linear infinite",
        slideLeft: "slideLeft 15s linear infinite",
        borderExpand: "borderAnimation 2s infinite ease-in-out",
        waveEffect: 'waveEffect 3s ease-out infinite',
        waveEffectDelay: 'waveEffect 3s ease-out infinite 1s',
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
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        vibrate: {
          "0%": { transform: "rotate(0)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(8deg)" },
          "60%": { transform: "rotate(-8deg)" },
          "80%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(0)" },
        },
        waveEffect: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1.5", transform: "scale(0.8)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        waveEffectDelay: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1.5)" }, // Bigger, pill-shaped
          "100%": { opacity: "0", transform: "scale(2)" }, // Continue growing and fading out
        },
      },
    },
  },
  plugins: [clipPath],
};
