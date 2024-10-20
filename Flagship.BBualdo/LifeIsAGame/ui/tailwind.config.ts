import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./shadcn/**/*.{ts,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xl: "1400px",
      lg: "886px",
      md: "768px",
      sm: "400px",
      xs: "100px",
    },
    extend: {
      backgroundImage: {
        achievements: "url('/assets/images/achievements-background.avif')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 0 16px var(--tw-shadow-color)",
        xl: "0 0 32px var(--tw-shadow-color)",
      },

      colors: {
        "cp-cyan": "#00f0ff",
        "cp-red": "#ef4444",
        "cp-red-hover": "#eb5e5e",
        "cp-yellow": "#fcee0a",
        "cp-pink": "#d600ff",
        "cp-green": "#6bf516",
        "light-silver": "#ccdaf0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
