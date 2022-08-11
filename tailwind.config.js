module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        base: '16px',
      },
      fontSize: {
        base: ['16px', '20px'],
        lg: ['20px', '24px'],
        xl: ['24px', '28px'],
        '2xl': ['28px', '32px'],
        '3xl': ['32px', '36px'],
        button: ['16px', '16px'],
      },
      fontFamily: {
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        light: {
          bg: '#F4F3FA',
          'card-bg': '#FFFFFF',
          primary: '#5B0ED6',
          'primary-disabled': '#9A73D9',
          'primary-hover': '#490BAB',
          secondary: '#4C5562',
          text: '#000000',
        },
        dark: {
          bg: '#080C19',
          'card-bg': '#141428',
          primary: '#A494FF',
          'primary-disabled': '#807B99',
          'primary-hover': '#8376CC',
          secondary: '#A1A0AA',
          text: '#FFFFFF',
        },
        error: '#F8333C',
      },
    },
  },
  plugins: [],
};
