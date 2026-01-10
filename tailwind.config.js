/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uth: {
          green: '#00A650', // El Verde oficial (aprox)
          neon: '#39FF14',  // Verde "Hacker" para bordes/brillos
          blue: '#003366',  // Azul Institucional Profundo
          dark: '#050A14',  // Fondo casi negro (mejor contraste)
          surface: '#0F172A', // Para las tarjetas
        }
      },
      fontFamily: {
        'press': ['"Press Start 2P"', 'cursive'], // Solo para Tu Nombre
        'nunito': ['"Nunito"', 'sans-serif'], // Para TODO el texto de lectura
        'code': ['"Fira Code"', 'monospace'], // Para etiquetas técnicas
      },
      boxShadow: {
        'hud': '0 0 10px rgba(0, 166, 80, 0.5)', // Brillo verde tecnológico
        'neon-hover': '0 0 20px rgba(57, 255, 20, 0.6)',
      }
    },
  },
  plugins: [],
}