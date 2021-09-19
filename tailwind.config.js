module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      letterSpacing: {
        widest: '0.12em'
      },
      colors: {
        orange: '#fe5f15'
      }
    }
  },
}
