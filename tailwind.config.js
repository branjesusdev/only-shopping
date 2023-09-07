/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin'
import tailwindcssAnimated  from 'tailwindcss-animated'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    tailwindcssAnimated
  ],
}

