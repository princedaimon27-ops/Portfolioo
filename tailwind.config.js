/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          surface: '#111113',
          card: 'rgba(255, 255, 255, 0.03)',
        },
        brand: {
          orange: '#FF6B1A',
          particle: '#ff8a3d',
          dark: '#0A0A0A',
          charcoal: '#111113',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(255, 107, 26, 0.35)',
        'glow-particle': '0 0 10px 2px rgba(255, 138, 61, 0.5)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(255,107,26,0.25) 0%, rgba(10,10,10,0) 70%)',
      }
    },
  },
  plugins: [],
}
