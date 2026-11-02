/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#020617',
          surface: '#050B1B',
          card: 'rgba(255, 255, 255, 0.03)',
        },
        brand: {
          blue: '#1B76FF',
          orange: '#1B76FF',
          particle: '#3B8BFF',
          dark: '#020617',
          charcoal: '#050B1B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(27, 118, 255, 0.45)',
        'glow-blue': '0 0 30px -5px rgba(27, 118, 255, 0.45)',
        'glow-particle': '0 0 10px 2px rgba(59, 139, 255, 0.6)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(27,118,255,0.25) 0%, rgba(2,6,23,0) 70%)',
      }
    },
  },
  plugins: [],
}
