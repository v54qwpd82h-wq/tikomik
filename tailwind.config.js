/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'premium-blue': '#0B132B',
        'neon-purple': '#8A2BE2',
        'modern-black': '#000000',
        'clean-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
