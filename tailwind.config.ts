import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        orange: '#ff9800',
        "fff06": 'rgb(255, 255, 255, 0.6)',
        "00006": 'rgb(0, 0, 0, 0.6)',
        gray: '#f2f2f2',
      },
      borderColor: {
        "fff01": 'rgb(255, 255, 255, 0.1)',
        "00007": 'rgb(0, 0, 0, 0.7)',
      },
      borderWidth: {
        0.5: "0.5px"
      },
      height: {
        "90vh": "90vh",
        "85vh": "85vh",
        "80vh": "80vh",
        0.5: "0.5px"
      },
      textColor: {
        orange: '#ff9800',
        "00006": 'rgb(0, 0, 0, 0.6)',
        "fff01": "rgba(255, 255, 255, .1)",
        "fff04": "rgba(255, 255, 255, .4)",
        "fff06": 'rgb(255, 255, 255, .6)',
        "fff09": "rgba(255, 255, 255, .9)",
      },
      animation: {
        "mil-lines": "bounce 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
