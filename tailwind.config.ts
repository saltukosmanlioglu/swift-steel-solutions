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
      },
      height: {
        "90vh": "90vh",
        "85vh": "85vh",
        "80vh": "80vh"
      },
      textColor: {
        "00006": 'rgb(0, 0, 0, 0.6)'
      },
      animation: {
        "mil-lines": "bounce 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
