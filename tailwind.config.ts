import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        casa1Background: "url('../public/Casa1.png')",
        casa2Background: "url('../public/Casa2.png')",
        casa3Background: "url('../public/Casa3.png')",
        casa4Background: "url('../public/Casa4.png')",
        casa5Background: "url('../public/Casa5.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaria: "#e60076",
      },
      backgroundColor: {
        principal: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
