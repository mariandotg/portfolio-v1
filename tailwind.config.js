module.exports = {
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
          secondary: '#4C5562',
          text: '#000000',
        },
        dark: {
          bg: '#080C19',
          'card-bg': '#141428',
          primary: '#A494FF',
          secondary: '#A1A0AA',
          text: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
