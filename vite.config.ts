import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Default production build targets root hosting (e.g. Vercel).
  // Use --mode gh-pages for GitHub Pages path-based hosting.
  base: mode === 'gh-pages' ? '/future-academy-frontend/' : '/',
  plugins: [react()],
}))
