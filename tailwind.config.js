module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4 , 0,0.6 , 1) infinite",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
