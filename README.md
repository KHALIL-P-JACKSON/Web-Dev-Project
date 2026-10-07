# Web-Dev-Project

Hey this is my web development project for Kennesaw State univeristy.
This file contains HTML, CSS, and Javascript to make a functional website.

Take a look around! Thank you!

## Creativity branch

`creative/site-pop` starts from `develop` and contains the portfolio design update:

- Signature hero with a custom KJ mark, portrait framing, and mint glow.
- Featured D’Luxe Beauty showcase and an iPhone-style GymTracker preview.
- Scroll reveals, button motion, and project-image hover effects that respect reduced motion.
- Career milestones connecting education, leadership, and software development.
- A “Currently building” card.
- Light/dark themes that follow the system initially and remember a visitor’s selection.

## Adding new pictures

Put new photos in `public/photos/` and project images in `public/projects/`. Paths in the data files are relative to `public/`; the components add the GitHub Pages base path automatically.

- **Portrait:** edit `portrait.image`, `portrait.alt`, and `portrait.position` in `src/data/portfolio.ts`. The position controls the crop; the current graduation picture uses `52% 35%`.
- **Project previews:** edit `preview.image` and `preview.alt` in `src/data/projects.ts`.
- **GymTracker screenshot:** add `preview.screenImage` and `preview.screenAlt` to the GymTracker entry. A real screenshot replaces the branded app cover inside the phone frame. A portrait screenshot works best.
- **Current project and career milestones:** edit `currentBuild` and `milestones` in `src/data/portfolio.ts`.

Use compressed JPEG/WebP for photos. Keep descriptive alt text with each new image.

## Development

Run `npm ci`, then `npm run dev`. The local URL uses `/Web-Dev-Project/` to match GitHub Pages.

Checks: `npm run lint`, `npm run format:check`, and `npm run build` (includes TypeScript checking). The Pages workflow publishes `main`; creativity-branch changes can be reviewed before merging.

## Development checks

Run `npm ci`, then `npm run lint`, `npm run format:check`, and `npm run build`.
The build runs `npm run typecheck` before bundling the site.

Type-checking uses TypeScript 7 through the `typescript-native` npm alias.
The regular `typescript` dependency stays on TypeScript 6 because
`typescript-eslint` needs its supported JavaScript API for linting. Use
`npm run typecheck` to select the TypeScript 7 compiler explicitly.

React linting uses `@eslint-react/eslint-plugin`, which supports ESLint 10.
