/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          accent: "hsl(var(--primary-accent))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        main: {
          DEFAULT: "hsl(var(--main))",
          foreground: "hsl(var(--main-foreground))",
          accent: "hsl(var(--main-accent))",
        },
        checked: {
          DEFAULT: "hsl(var(--checked))",
        },
        cMediumGrey: {
          DEFAULT: "hsl(var(--c-medium-grey))",
        },
        cRed: {
          DEFAULT: "hsl(var(--c-red))",
          accent: "hsl(var(--c-red-accent))",
        },
        cLightGreyBg: {
          DEFAULT: "hsl(var(--c-light-grey-bg))",
        },
        cLightGreyStroke: {
          DEFAULT: "hsl(var(--c-light-grey-stroke))",
        },
        cDarkGrey: {
          DEFAULT: "hsl(var(--c-dark-grey))",
        },
        cBlueGraph: {
          DEFAULT: "hsl(var(--c-blue-graph))",
        },
        cWhiteGrey: {
          DEFAULT: "hsl(var(--c-white-grey))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      textColor: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
