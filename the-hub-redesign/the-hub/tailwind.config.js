/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hub: {
          purple: '#7B35C4',
          'purple-bright': '#9B4FE8',
          'purple-dark': '#4A1A8A',
          'purple-mid': '#6228A8',
          'purple-light': '#B87FFF',
          lavender: '#D4B8FF',
          cream: '#FDF6E3',
          gold: '#FFD700',
          'gold-light': '#FFE97A',
          'gold-dim': '#C9A227',
          bg: '#1A0533',
        },
      },
    },
  },
  plugins: [],
}


