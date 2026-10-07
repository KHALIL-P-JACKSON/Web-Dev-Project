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

- **Portrait:** edit `portrait.image`, `portrait.alt`, `portrait.position`, `portrait.width`, and `portrait.height` in `src/data/portfolio.ts`. The position controls the crop; the headshot uses `50% 40%`.
- **Field-testing gallery:** edit `fieldPhotos` in `src/data/portfolio.ts`. Each photo has an image path, alt text, title, and caption; the full original opens when selected.
- **Project previews:** edit `preview.image` and `preview.alt` in `src/data/projects.ts`.
- **GymTracker screenshots:** edit `preview.screenshots` in `src/data/projects.ts`. Each screen has an `id`, `label`, image path, alt text, and intrinsic width/height. Visitors can switch between Home, Workout, and Plan and open the selected original at full size. Screenshots include the iPhone status bar, so the preview does not add a second notch or home indicator.
- **Current project and career milestones:** edit `currentBuild` and `milestones` in `src/data/portfolio.ts`.

Use compressed JPEG/WebP for photos. Keep descriptive alt text with each new image.

## Development

Run `npm ci`, then `npm run dev`. The local URL uses `/Web-Dev-Project/` to match GitHub Pages.

Checks: `npm run lint`, `npm run format:check`, and `npm run build` (includes TypeScript checking for the site and tests).

## Reliability tests

- `npm run test:unit` checks system/saved themes, blocked browser storage, animation fallbacks, observer cleanup, and the content/asset manifest.
- Run `npx playwright install --with-deps chromium firefox webkit` once, then `npm run test:e2e`. The suite starts a production build at `/Web-Dev-Project/` and tests Chrome, Firefox, and mobile Safari.
- Browser checks cover navigation, skip links, all configured images, theme persistence, screenshot selection and keyboard controls, full-size photo/resume links, responsive layouts, reduced motion, JavaScript errors, and automated WCAG A/AA accessibility checks in both themes. Automated accessibility checks complement manual keyboard and visual review.
- `npm test` runs both suites; `npm run test:unit:watch` and `npm run test:e2e:ui` are available during development. Browser reports and failure traces are saved as CI artifacts.

The `Site CI` workflow runs quality checks, unit tests, and all three browser projects. Its final **Reliability gate** fails if any dependency fails, is skipped, or is canceled. Configure that GitHub Actions check as required for **both `develop` and `main`**, with branches required to be up to date before merge. Workflow YAML alone cannot enforce branch protection; the rule must be active in GitHub repository settings.

CodeRabbit automatically reviews non-draft PRs targeting `develop` and `main`. Address its findings and confirm its review applies to the latest commit before merging. GitHub Pages deploys the production artifact from a successful `Site CI` push run on `main`, so failed CI cannot publish the site.

## Development checks

Run `npm ci`, then `npm run lint`, `npm run format:check`, and `npm run build`.
The build runs `npm run typecheck` before bundling the site.

Type-checking uses TypeScript 7 through the `typescript-native` npm alias.
The regular `typescript` dependency stays on TypeScript 6 because
`typescript-eslint` needs its supported JavaScript API for linting. Use
`npm run typecheck` to select the TypeScript 7 compiler explicitly.

React linting uses `@eslint-react/eslint-plugin`, which supports ESLint 10.
