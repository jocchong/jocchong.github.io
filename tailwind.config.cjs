/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-5deg)" },
					"25%": { transform: "rotate(5deg)"  },
          "50%": { transform: "rotate(-5deg)" },
					"100%": { transform: "rotate(0deg)"}
        },
      },
    },
  },
  plugins: [],
};
