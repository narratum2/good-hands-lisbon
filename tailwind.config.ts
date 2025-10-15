import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],      // 12px
        sm: ['0.875rem', { lineHeight: '1.5' }],     // 14px
        base: ['1rem', { lineHeight: '1.7' }],       // 16px
        lg: ['1.125rem', { lineHeight: '1.6' }],     // 18px
        xl: ['1.25rem', { lineHeight: '1.6' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.5' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '1.4' }],  // 30px
        '4xl': ['2.25rem', { lineHeight: '1.3' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],      // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],   // 60px
      },
      spacing: {
        // 8pt grid system
        px: '1px',
        0: '0',
        0.5: '0.125rem',  // 2px
        1: '0.25rem',     // 4px
        2: '0.5rem',      // 8px
        3: '0.75rem',     // 12px
        4: '1rem',        // 16px
        5: '1.25rem',     // 20px
        6: '1.5rem',      // 24px
        8: '2rem',        // 32px
        10: '2.5rem',     // 40px
        12: '3rem',       // 48px
        16: '4rem',       // 64px
        20: '5rem',       // 80px
        24: '6rem',       // 96px
        32: '8rem',       // 128px
      },
      colors: {
        black: '#1a1a1a',
        white: '#ffffff',
        'off-white': '#f5f5f5',
        gold: {
          DEFAULT: '#c9a961',
          light: '#e5d4a8',
          dark: '#b08d45',
        },
        'gray-light': '#e5e5e5',
        'gray-medium': '#999999',
        'gray-dark': '#4a4a4a',
        // Keep legacy colors for backward compatibility
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#404040',
        },
        porcelain: {
          DEFAULT: '#f8f6f3',
          dark: '#f5f5f4',
          darker: '#e7e5e4',
        },
        sage: {
          DEFAULT: '#a8b5a0',
          light: '#c4d4bc',
          dark: '#8a9882',
        },
        shell: '#ede8e0',
        harbor: '#5a6d7c',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

