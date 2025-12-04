/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFBA00',
          dark: '#FFA500',
          light: '#FFD700',
        },
        background: {
          dark: '#2B2B3D',
          darker: '#1E1E2E',
          card: '#33334D',
          overlay: '#282838',
          light: '#3D3D5A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E0E8',
          muted: '#A0A0B0',
          dark: '#6B6B80',
        },
        ui: {
          border: '#44445A',
          hover: '#3D3D5A',
        },
        accent: {
          blue: '#4285F4',
          linkedIn: '#0A66C2',
          meta: '#1877F2',
          slack: '#4A154B',
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['Ubuntu Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 186, 0, 0.4)',
        'glow-strong': '0 0 40px rgba(255, 186, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(255, 186, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 186, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}