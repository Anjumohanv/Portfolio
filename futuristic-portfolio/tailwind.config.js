/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0f',
        darker: '#05050a',
        'neon-blue': '#00eeff',
        'neon-cyan': '#00ffff',
        'neon-purple': '#bf00ff',
        'neon-pink': '#ff00ff',
        secondary: '#a0a0b0',
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00eeff, 0 0 10px #00eeff, 0 0 15px #00eeff' },
          '100%': { boxShadow: '0 0 10px #bf00ff, 0 0 20px #bf00ff, 0 0 30px #bf00ff' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 238, 255, 0.5)',
        'glow-purple': '0 0 15px rgba(191, 0, 255, 0.5)',
        'glow-cyan': '0 0 15px rgba(0, 255, 255, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(0, 238, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00eeff 0%, #bf00ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0f 0%, #05050a 100%)',
        'shimmer': 'linear-gradient(to right, #00eeff20 0%, #bf00ff20 50%, #00eeff20 100%)',
      }
    },
  },
  plugins: [],
}