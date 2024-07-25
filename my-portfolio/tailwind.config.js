module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.2)', // semi-transparent white
        'blue-glass': 'rgba(37, 99, 235, 0.2)', // semi-transparent blue
      },
      backdropBlur: {
        'md': '10px', // medium blur
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.8)', // semi-transparent white
      },
      textColor: {
        'glass': 'rgb(255, 255, 255)', // semi-transparent white
      }
    },
  },
  plugins: [],
}
