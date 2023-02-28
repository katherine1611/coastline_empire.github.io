/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'brand' : 'Outfit, sans-serif'
      },
      backgroundColor : {
        'primary' : '#1e96fc',
        'secondary' : '#ffcb07',
        'gray-v1' : '#fafaf9',
        'gray-v2' : '#f8f9f9',
        'gray-v3' : 'rgba(250, 250, 250, 0.32)',
        'primary-light' : '#e6f0ff',
        'primary-dark' : '#180395',
        'shadow-normal' : 'rgba(111, 121, 133, 0.13)',
        'overlay' : 'rgba(0,0,0,.3)'
      },
      colors : {
        'text' : '#023047',
        'primary' : '#1e96fc',
        'secondary' : '#ffcb07',
        'gray-v1' : '#fafaf9',
        'gray-v2' : '#f8f9f9',
      },
      boxShadow : {
        'default' : '0px 1px 4px rgba(111, 121, 133, 0.13)'
      }
    },
  },
  plugins: [],
}
