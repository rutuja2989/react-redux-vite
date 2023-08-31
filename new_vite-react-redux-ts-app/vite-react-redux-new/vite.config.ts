import {defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  },
  build:{
    rollupOptions:{
     input:'src/main.tsx',
     output:{
      format:'es',
      dir:'dist',
     }
    }
  }
})
