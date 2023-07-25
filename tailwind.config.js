/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { 
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        
      },
      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '1000%',
      
    },},
  },
  plugins: [require('flowbite/plugin'),],
}
