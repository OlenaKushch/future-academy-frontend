import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use repository path in production for GitHub Pages.
  base: mode === 'production' ? '/future-academy-frontend/' : '/',
  plugins: [react()],
}))
