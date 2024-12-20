import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mahogany: {
          DEFAULT: "#c44900",
          100: "#270e00",
          200: "#4e1c00",
          300: "#742b00",
          400: "#9b3900",
          500: "#c44900",
          600: "#ff5f02",
          700: "#ff8741",
          800: "#ffaf81",
          900: "#ffd7c0",
        },
        munsell: {
          DEFAULT: "#068d9d",
          100: "#011c1f",
          200: "#02393f",
          300: "#03555e",
          400: "#05727e",
          500: "#068d9d",
          600: "#08cbe0",
          700: "#36e4f8",
          800: "#79edfa",
          900: "#bcf6fd",
        },
        keppel: {
          DEFAULT: "#4ea699",
          100: "#10211f",
          200: "#1f433d",
          300: "#2f645c",
          400: "#3f857b",
          500: "#4ea699",
          600: "#6fbbb0",
          700: "#93ccc3",
          800: "#b7ddd7",
          900: "#dbeeeb",
        },
        aliceblue: {
          DEFAULT: "#e1e5ee",
          100: "#21293b",
          200: "#435277",
          300: "#6b7eac",
          400: "#a6b2cd",
          500: "#e1e5ee",
          600: "#e7ebf2",
          700: "#edf0f5",
          800: "#f3f5f8",
          900: "#f9fafc",
        },
        gunmetal: {
          DEFAULT: "#16262e",
          100: "#040709",
          200: "#090f12",
          300: "#0d161b",
          400: "#111e24",
          500: "#16262e",
          600: "#325769",
          700: "#4f88a5",
          800: "#87b1c5",
          900: "#c3d8e2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
