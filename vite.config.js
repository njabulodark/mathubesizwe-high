import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// The site is published to GitHub Pages behind the custom domain
// https://mathubesizwe.datafusioncreation.co.za/ (see public/CNAME), so it is
// served from the root. If it ever moves back to a project site such as
// https://njabulodark.github.io/mathubesizwe-high/, set base to that sub-path.
const SITE_BASE = '/'

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
export default defineConfig({
  base: SITE_BASE,
  plugins: [react(), spaFallback()],
})
