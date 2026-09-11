# Nathan Gafney — Portfolio

React (Vite + React Router) portfolio modelled on the layout, typography and colour theme
of a Squarespace 7.1 portfolio site.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Edit content

| What | Where |
| --- | --- |
| Site title, nav, social links, hero text, home/resume photos | `src/data/site.js` |
| Resume text | `src/data/resume.js` |
| Projects (cards on the home page, Projects collage, each project page) | `src/data/projects.js` |
| Photos | `public/images/…` — see `IMAGES.md` for every expected filename |
| Resume PDF | `public/Gafney_Nathan_Resume.pdf` |
| Colours, fonts, spacing | CSS variables at the top of `src/index.css` |

## Pages

- `/` — hero (portrait, intro, LinkedIn / Projects / Resume buttons) + project carousel
- `/resume` — intro, resume rendered as a card with a Download PDF button, four photos
- `/projects` — staggered photo collage with title labels
- `/<project-slug>` — photo hero, three trait cards, auto-scrolling photo reel, closing story

## Deploy

`npm run build` produces a static site in `dist/`. It uses client-side routing, so the host
needs to serve `index.html` for unknown paths (Netlify: add a `_redirects` file with
`/* /index.html 200`; Vercel: it is automatic for Vite projects; GitHub Pages: copy
`index.html` to `404.html`).
