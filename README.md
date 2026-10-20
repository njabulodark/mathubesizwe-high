# Mathubesizwe High School website

The public website for Mathubesizwe High School (Mathubesizwe Senior Secondary
School), Macambini, Nyoni, KwaZulu-Natal.

Built with React and Vite.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173/
npm run build      # production build into dist/
npm run preview    # preview the production build
npm run lint
```

## Deployment (GitHub Pages)

The site is published to GitHub Pages behind the custom domain:

https://mathubesizwe.datafusioncreation.co.za/

```bash
npm run deploy
```

That command builds the site and pushes `dist/` to the `gh-pages` branch. In the
repository, set **Settings → Pages → Build and deployment → Source** to
**Deploy from a branch**, branch **gh-pages**, folder **/ (root)**, and set the
custom domain to `mathubesizwe.datafusioncreation.co.za`.

Notes for Pages:

- The site is served from the domain root, so `SITE_BASE` in `vite.config.js` is
  `/`. If it ever moves back to a project site such as
  `https://njabulodark.github.io/mathubesizwe-high/`, set it to that sub-path.
- `public/CNAME` holds the custom domain; it must ship with every deploy or
  GitHub Pages drops the domain.
- Public assets are referenced through `asset()` from `src/lib/asset.js` so that
  `public/images/...` keeps resolving under whatever base path is in use.
- `npm run build` also writes `dist/404.html` (a copy of `index.html`) so deep
  links such as `/about` still load the app on refresh.
- `public/.nojekyll` stops GitHub Pages from running Jekyll on the build output.
