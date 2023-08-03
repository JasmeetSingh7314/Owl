/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': "['ui-sans-serif', 'system-ui', ...]",
      'serif': "['ui-serif', 'Georgia', ...]",
      'mono': "['ui-monospace', 'SFMono-Regular', ...]",
      'display': "['Oswald', ...]",
      
    },
    extend: {
      fontFamily:{
        primary:'MyFont',
        secondary:'paragraph',
        nunito: ['nunito', 'sans-serif'],
        montserrat:['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}