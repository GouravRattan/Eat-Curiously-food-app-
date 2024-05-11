/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gravitas: ['Gravitas One', 'sans-serif'],
        rammetto: ['Rammetto One', 'Georgia' ],
        georgia: ['Georgia'],
        roboto: ['Roboto'],
        dela: ['DDela Gothic One'],
        archivo: ['Archivo']
      },
    },
  },
  plugins: [],
}