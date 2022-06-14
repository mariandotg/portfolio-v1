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
        'section-title': ['24px', '20px'],
        'section-subtitle': ['20px', '24px'],
      },
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#E8E6F2',
          'card-bg': '#FFFFFF',
          accent: '#7F47E7',
          'accent-hover': '#5B34B9',
          text: '#000000',
        },
        dark: {
          bg: '#080C19',
          'card-bg': '#1D1D2F',
          accent: '#947EB0',
          'accent-hover': '#685896',
          text: '#FFFFFF',
        },
        disabled: '#9E9E9E',
      },
    },
  },
  plugins: [],
};
