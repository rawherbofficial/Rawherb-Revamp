import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#080a06',
        bg2:      '#0e110b',
        green:    '#4a7c59',
        greenL:   '#7db891',
        greenXL:  '#b8dfc7',
        amber:    '#c8933a',
        cream:    '#e8dfc8',
        creamDim: '#9e9480',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'marquee':    'marquee 20s linear infinite',
        'spin-slow':  'spin 18s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
