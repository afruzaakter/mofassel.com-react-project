/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#F99900",
        
"secondary": "#2A4Cb8",
        
"accent": "#008000",
        
"neutral": "#4080FF",
        
"base-100": "#ffffff",
        
"info": "#000000",
        
"success": "#133196",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

