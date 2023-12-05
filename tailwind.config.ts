import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // global
      primaryColor: "#8E2CE3",
      // text
      primaryText: "var(--color-text-primary)",
      secondaryText: "var(--color-text-secondary)",
      tertiaryText: "var(--color-text-tertiary)",
      quatenaryText: "var(--color-text-quatenary)",
      // background
      navBg: "var(--color-navbar-bg)",
      navItemBg: "var(--color-navitem-bg)",
      //black + white
      black: "#000000",
      white: "#ffffff",
      //gray
      gray: "#6c757d",
      graywhite: "#fefefe",
      gray10: "#f7f9fb",
      gray25: "#f0f3f8",
      gray50: "#e5e9f0",
      gray100: "#d2d8e2",
      gray200: "#b6bdcb",
      gray300: "#9ca5b4",
      gray500: "#798395",
      gray600: "#727a8b",
      gray800: "#3c4554",
      graydark: "#343a40",
    },
    screens: {
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
    },
    fontSize: {
      fs12: "0.75rem",
      fs14: "0.875rem",
      fs16: "1rem",
      fs18: "1.125rem",
      fs20: "1.25rem",
      fs22: "1.375rem",
      fs24: "1.5rem",
      fs26: "1.625rem",
      fs28: "1.75rem",
      fs30: "1.875rem",
      fs32: "2rem",
      fs34: "2.125rem",
      fs36: "2.25rem",
      fs38: "2.375rem",
      fs40: "2.5rem",
      fs42: "2.625rem",
      fs44: "2.75rem",
      fs46: "2.875rem",
      fs48: "3rem",
    },
    extend: {
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
