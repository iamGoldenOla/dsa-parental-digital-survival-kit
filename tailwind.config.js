/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E8EDE',    // Reliable Blue
        secondary: '#A8DADC',  // Calming Aqua
        accent: '#F4A261',     // Warm Orange
        background: '#F9FAFB', // Soft Gray
        text: '#1F2937',       // Deep Gray
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 