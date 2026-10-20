/**
 * Resolve a public asset path against the app's base URL.
 *
 * Files in `public/` are served from the site root, which differs between
 * local development (`/`) and the GitHub Pages project site
 * (`/mathubesizwe-high/`). Always wrap public asset paths with this helper
 * so images keep working in both places.
 */
const BASE = import.meta.env.BASE_URL;

export const asset = (path) => `${BASE}${String(path).replace(/^\//, "")}`;
