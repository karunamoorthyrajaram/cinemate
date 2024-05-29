module.exports = {
    content: ["./src/**/*.{html,js}"],
    drakMode:'class',
    theme: {
      extend: {
        screens: {
          'other': {'min': '320px', 'max': '1200px'},
        },
        maxHeight: {
          '128': '62rem',
        }
      },
    },
    plugins: [],
  }