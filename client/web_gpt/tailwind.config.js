/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        Jost: ['Jost', "sans-serif"] 
      },
      colors:{
        'main' : "#10054D",
        'navy' : "#151F62",
        'black' : "#202123",
        'main-gray' : "#9ca3af"
      }
    },
  },
  plugins: [],
}