/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}" // Critical for PrimeVue Unstyled
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

