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

The site is published to GitHub Pages at:

https://njabulodark.github.io/mathubesizwe-high/

```bash
npm run deploy
```

That command builds the site and pushes `dist/` to the `gh-pages` branch. In the
repository, set **Settings → Pages → Build and deployment → Source** to
**Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.

Notes for Pages:

- `vite.config.js` sets the production base path to `/mathubesizwe-high/`, so the
  app must live at that URL. If the site moves to a custom domain or a user page,
  change `PAGES_BASE` there.
- Public assets are referenced through `asset()` from `src/lib/asset.js` so that
  `public/images/...` keeps resolving under the base path.
- `npm run build` also writes `dist/404.html` (a copy of `index.html`) so deep
  links such as `/mathubesizwe-high/about` still load the app on refresh.
- `public/.nojekyll` stops GitHub Pages from running Jekyll on the build output.
