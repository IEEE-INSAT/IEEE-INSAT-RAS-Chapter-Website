/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/activitiesnew/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: '#activities', // Scope Tailwind to only #activities wrapper
  corePlugins: {
    preflight: false, // Disable Tailwind's base reset to avoid conflicts with Bootstrap
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
