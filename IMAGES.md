# Photos to add

Drop your photos into `public/images/` using these exact paths. Any slot without a file
shows a labelled grey placeholder so you can see where each image goes.

JPG/PNG/GIF/WebP all work; just keep the filename (extension included) the same, or change
the path in `src/data/site.js` / `src/data/projects.js`.

## Home page (`src/data/site.js`)

| File | Used for | Suggested shape |
| --- | --- | --- |
| `public/images/home/profile.jpg` | Big portrait in the hero (fills its box) | ~6:5, 1600px wide |
| `public/images/home/deco-1.png` | Small decorative image, top-right of hero (fits inside box, transparent PNG or GIF looks best) | square-ish |
| `public/images/home/deco-2.png` | Decorative image between the portrait and the buttons | square-ish |
| `public/images/home/deco-3.png` | Decorative image bottom-right of hero | square-ish |

## Resume page (`src/data/site.js` → `resumePage.photos`)

| File | Shape |
| --- | --- |
| `public/images/resume/photo-1.jpg` | 3:2 landscape |
| `public/images/resume/photo-2.jpg` | 4:5 portrait |
| `public/images/resume/photo-3.jpg` | 4:5 portrait |
| `public/images/resume/photo-4.jpg` | 3:2 landscape |
| `public/Gafney_Nathan_Resume.pdf` | "Download PDF" button |

## Projects (`src/data/projects.js`)

One folder per project: `crosspaths`, `nd-trading-competition`, `garda-capital-partners`,
`pathaware`, `dunne-hall-ra`.

| File | Used for | Shape |
| --- | --- | --- |
| `public/images/<slug>/cover.jpg` | Card on the home carousel and the Projects collage | 3:2 (cropped to 4:5 on the collage) |
| `public/images/<slug>/hero.jpg` | Full-bleed background behind the project title | wide, 2000px+ |
| `public/images/<slug>/card-1.jpg`, `card-2.jpg`, `card-3.jpg` | The three trait cards | 3:2 |
| `public/images/<slug>/reel-1.jpg` … `reel-6.jpg` | Auto-scrolling photo strip | any; landscape looks best |

PathAware and Garda Capital Partners use the simpler overview layout (banner photo, one
photo on the left, text on the right), so each needs only three files:

| File | Used for |
| --- | --- |
| `public/images/<slug>/cover.jpg` | Home carousel and Projects collage |
| `public/images/<slug>/hero.jpg` | Banner behind the project title |
| `public/images/pathaware/team.jpg`, `public/images/garda-capital-partners/chart.jpg` | The photo beside the text |

To switch a project between layouts, give it either an `overview` block or `cards` / `reel` /
`closing` in `src/data/projects.js`.
