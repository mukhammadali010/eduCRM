/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}', 
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#0e1629',
        },
        secondary: '#3b82f6',
        accent: '#f59e0b',
        danger: '#ef4444',
        success: '#10b981',
        muted: '#94a3b8',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
      },

      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },

  plugins: [
  ],
}
