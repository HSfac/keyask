/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'accent-pink': 'var(--accent-pink)',
        'accent-purple': 'var(--accent-purple)',
        'accent-cyan': 'var(--accent-cyan)',
        'accent-red': 'var(--accent-red)',
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-pink': 'var(--neon-pink)',
        'neon-green': 'var(--neon-green)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-rainbow': 'var(--gradient-rainbow)',
      },
      animation: {
        'startup-float': 'startup-float 6s ease-in-out infinite',
        'startup-pulse': 'startup-pulse 2s infinite',
        'startup-glow': 'startup-glow 3s ease-in-out infinite',
        'startup-slide-up': 'startup-slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'startup-bounce': 'startup-bounce 1.5s ease-in-out',
        'startup-rotate-glow': 'startup-rotate-glow 10s linear infinite',
        'gentle-float': 'gentle-float 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      keyframes: {
        'startup-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(1deg)' },
          '50%': { transform: 'translateY(-8px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' },
        },
        'startup-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)' 
          },
        },
        'startup-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' 
          },
        },
        'startup-slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'startup-bounce': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0,0,0)',
          },
          '40%, 43%': {
            transform: 'translate3d(0,-15px,0)',
          },
          '70%': {
            transform: 'translate3d(0,-7px,0)',
          },
          '90%': {
            transform: 'translate3d(0,-2px,0)',
          },
        },
        'startup-rotate-glow': {
          '0%': { 
            transform: 'rotate(0deg)',
            filter: 'hue-rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg)',
            filter: 'hue-rotate(360deg)',
          },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
