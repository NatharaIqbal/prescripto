import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Vite config loaded, using port 5176');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    strictPort: true
  }
})