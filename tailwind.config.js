/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  important: true,
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }
}

