/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F3173',
        indigo: '#35348A',
        purple: '#5F5CAC',
        violet: '#55389F',
        lilac: '#A169C9',
        periwinkle: '#A1A4D5',
        lavender: '#E3DFF2',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 40px -24px rgba(31, 49, 115, 0.45)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top right, rgba(161, 105, 201, 0.18), transparent 60%), radial-gradient(circle at 10% 10%, rgba(95, 92, 172, 0.15), transparent 45%)',
      },
    },
  },
  plugins: [],
}
