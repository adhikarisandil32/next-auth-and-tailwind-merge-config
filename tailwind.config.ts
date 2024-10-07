import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      screens: {
        xl: "1200px",
        sm: "380px",
      },
      center: true,
    },
    extend: {
      fontSize: {
        small: "0.8rem",
        medium: "1rem",
        big: "1.5rem",
      },
      colors: {
        primary: "#abcdef",
        secondary: "#fedcba",
      },
      fontWeight: {
        "w-600": "600",
        "w-700": "700",
      },
    },
  },
  plugins: [],
}
export default config
