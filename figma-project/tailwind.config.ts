import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myDPink: "#F98585",
        myLPink: "#F4E2E2",
        myblack: "#21243D",
        footer: "#FAF5F5",
        background: "#f7f1f1",
        foreground: "var(--foreground)",
        imgBack: "#e1d8d8",
      },
      boxShadow:{
        btnShadow: "0px 4px 4px 0px #a29e9e"
      }
    },
  },
  plugins: [],
} satisfies Config;
