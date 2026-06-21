export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8b5e34',
          dark: '#5e3f24',
          accent: '#b98f67'
        },
        surface: {
          DEFAULT: '#090b10',
          muted: '#11151c',
          panel: '#0d1118'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
