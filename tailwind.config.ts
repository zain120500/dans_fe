import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"),nextui()],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1e73be",

          "secondary": "#fed330",

          "accent": "#1dcdbc",

          "neutral": "#2b3440",

          "base-100": "#ffffff",

          "info": "#3abff8",

          // "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  // theme: {
  //   screens: {
  //     sm: '480px',
  //     md: '768px',
  //     lg: '976px',
  //     xl: '1440px',
  //   },
  //   colors: {
  //     'blue': '#1fb6ff',
  //     'purple': '#7e5bef',
  //     'pink': '#ff49db',
  //     'orange': '#ff7849',
  //     'green': '#13ce66',
  //     'yellow': '#ffc82c',
  //     'gray-dark': '#273444',
  //     'gray': '#8492a6',
  //     'gray-light': '#d3dce6',
  //   },
  //   fontFamily: {
  //     sans: ['Graphik', 'sans-serif'],
  //     serif: ['Merriweather', 'serif'],
  //   },
  //   extend: {
  //     spacing: {
  //       '128': '32rem',
  //       '144': '36rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   }
  // }
};
export default config;
