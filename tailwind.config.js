/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0E1C36',
        'alabaster': '#F1EFE7',
        'sea-green': '#5C946E',
      },
      fontFamily: {
        LS: ['"League Spartan"', 'sans-serif'],
        MT: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'body': ['1.25rem', {lineHeight: '130%', fontWeight: '400'}],
        'sub-subtitle': ['2.25rem', {fontWeight: '400'}],
        'subtitle': ['3rem', {fontWeight: '400'}],
        'h3': ['1.5rem', {letterSpacing: '7%', fontWeight: '600'}],
        'h2': ['4rem', {fontWeight: '700'}],
        'h1': ['8rem', {fontWeight: '700'}],
      },
      gridTemplateColumns: {
        '12': 'repeat(12, 5.5rem)'
      },
      gap: {
        '20': '1.25rem',
      }, 
      width: {
        'fit-content': 'fit-content'
      }
    },
  },
  plugins: [],
}

