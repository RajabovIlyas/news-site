import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        light: 'inset 1px 1px 1px rgba(255, 255, 255, 0.45)',
        dark: 'inset 1px 1px 1px rgba(0, 0, 0, 0.45)',
        switch: 'inset 3px -3px 0px 0px #eff6ff',
      },
    },
  },
  plugins: [],
};
export default config;
