import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#082b53", ink: "#09213d", gold: "#c99a3a", sand: "#f6f1e8" },
      boxShadow: { luxe: "0 18px 50px rgba(8,43,83,.12)" },
      fontFamily: { display: ["Georgia", "serif"] }
    }
  },
  plugins: []
} satisfies Config;
