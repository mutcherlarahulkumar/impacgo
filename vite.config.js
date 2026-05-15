import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use root path for production (Vercel), subpath for local dev only
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/' : '/impacgo-solutions/',
}))