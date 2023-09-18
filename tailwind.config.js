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
        
"primary": "#E28A00",
        
"secondary": "#2B2A4C",
        
"accent": "#FF9C00",
        
"neutral": "#008000",
        
"base-100": "#4080FF",
        
"info": "#FFF8EE",
        
"success": "#0A6CFF",
        
"warning": "#e29612",
        
"error": "#f53b38",
        },
     
      },
   
    ],
  },
  plugins: [
    require("daisyui")],
}

