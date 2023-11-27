/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/react");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `var(${variableName}, ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: {
          900: withOpacity("--color-bluePrimary-900"),
          800: withOpacity("--color-bluePrimary-800"),
          700: withOpacity("--color-bluePrimary-700"),
          600: withOpacity("--color-bluePrimary-600"),
          500: withOpacity("--color-bluePrimary-500"),
          400: withOpacity("--color-bluePrimary-400"),
          300: withOpacity("--color-bluePrimary-300"),
          200: withOpacity("--color-bluePrimary-200"),
          100: withOpacity("--color-bluePrimary-100"),
          50: withOpacity("--color-bluePrimary-50"),
        },
        zincSecondary: {
          900: withOpacity("--color-zincSecondary-900"),
          800: withOpacity("--color-zincSecondary-800"),
          700: withOpacity("--color-zincSecondary-700"),
          600: withOpacity("--color-zincSecondary-600"),
          500: withOpacity("--color-zincSecondary-500"),
          400: withOpacity("--color-zincSecondary-400"),
          300: withOpacity("--color-zincSecondary-300"),
          200: withOpacity("--color-zincSecondary-200"),
          100: withOpacity("--color-zincSecondary-100"),
          50: withOpacity("--color-zincSecondary-50"),
        }
      },
      fontFamily: {
        sans: ["var(--font-iranyekan)", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      animation: {
        'arrow-left': 'arrow-left 1.5s ease-out infinite',
        'spin2' : ' spin 1.2s linear infinite'
      },
      keyframes: {
        'arrow-left': {
          '0%': { transform: 'translateX(15px)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': {  transform: 'translateX(15px)' },
        },
      },
      boxShadow: {
        "input-focus": "0 12px 24px -8px var(--color-bluePrimary-300)",
      }
    },
  },
  plugins: [nextui()],
}
