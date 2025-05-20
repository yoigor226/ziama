import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  darkmode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        brandyellow: "#fdc62e",
        brandgreen: "#2dcc6f",
        brandblue: "#1376f4",
        brandwhite: "#eeeeee"
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],

  build: {
    outDir: 'build',
  },
  
})
