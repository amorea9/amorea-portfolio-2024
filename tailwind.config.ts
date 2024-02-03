import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mintGreen: "#64efbc",
        limeGreen: "#71f424",
      },
    },
  },
  plugins: [],
  corePlugins: { animation: false },
  animations: { smiley_tr: "smiley_tr 3000ms linear infinite normal" },
};
export default config;
