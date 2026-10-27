/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        philosophy: {
          ivory: '#F8F3E7',
          'deep-teal': '#063E3B',
          emerald: '#0A876B',
          'muted-gold': '#B88A46',
          'pale-teal': '#E8F4F2',
          'deep-teal-border': '#063E3B',
          'dark-teal-text': '#063E3B',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
