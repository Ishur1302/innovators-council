const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6', // light blue
        },
        accent: {
          500: '#ec4899', // pink
        },
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          300: '#5eead4',
          500: '#14b8a6',
          700: '#0f766e',
        },
        grape: {
          100: '#ede9fe',
          300: '#a78bfa',
          500: '#7c3aed',
          700: '#5b21b6',
        },
        soft: {
          100: '#f8fafc',
          200: '#f1f5f9',
        },

        glass: 'rgba(255,255,255,0.7)',
      },
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        '3d': '0 8px 32px 0 rgba(124, 58, 237, 0.15)',
        'glass': '0 4px 32px 0 rgba(20, 184, 166, 0.10)',
        'neon': '0 0 8px #14b8a6, 0 0 16px #7c3aed',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
