module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#F5865A' },
        green: { DEFAULT: '#008156' },
        gray: { DEFAULT: '#1f1e1f' },
        purple: { DEFAULT: '#766ABF' },
      },
      fontSize: {
        '10xl': '166px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
