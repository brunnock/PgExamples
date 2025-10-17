import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  path: '', 
  plugins: [react()],

  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
})
