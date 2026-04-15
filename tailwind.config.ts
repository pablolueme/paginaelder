import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Cinzel", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      colors: {
        abyss: "#08080e",
        steel: "#141621",
        rune: "#d1ac67",
        blood: "#7f2530",
        frost: "#4a6b9a"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(209, 172, 103, 0.4), 0 10px 32px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "ring-pattern":
          "radial-gradient(circle at 20% 20%, rgba(209,172,103,0.08) 0%, transparent 35%), radial-gradient(circle at 80% 10%, rgba(74,107,154,0.10) 0%, transparent 30%), radial-gradient(circle at 20% 80%, rgba(127,37,48,0.1) 0%, transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
