import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Served as a GitHub Pages project site:
// https://njabulodark.github.io/mathubesizwe-high/
const PAGES_BASE = '/mathubesizwe-high/'

/**
 * GitHub Pages has no SPA rewrites, so unknown paths (e.g. /about) fall back to
 * 404.html. Serving a copy of index.html there lets the router take over.
 */
function spaFallback() {
  return {
    name: 'spa-fallback',
    apply: 'build',
    closeBundle() {
      const index = resolve(import.meta.dirname, 'dist/index.html')
      if (existsSync(index)) {
        copyFileSync(index, resolve(import.meta.dirname, 'dist/404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? PAGES_BASE : '/',
  plugins: [react(), spaFallback()],
}))
