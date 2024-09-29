import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#fcfcfc",
        circleBackground: "#c0c1ff",
        yellowBg: "#FFE76D",
        yellowText: "#FF9226",
        blueBg: "#CCE0FF",
        blueText: "#1E7AFC",
        greenBg: "#BBF4DB",
        greenText: "#20A06B",
        redBg: "#FFD5D2",
        redText: "#ff5245",
        pinkText: "#FF57BE",
        lightPinkText: "#ffdef3",
        buttonBackground: "rgb(230, 226, 255)",
        buttonHoverBackground: "rgb(219, 214, 255)",
        buttonText: "#4315fa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
