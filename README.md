# Web-Dev-Project

Hey this is my web development project for Kennesaw State univeristy.
This file contains HTML, CSS, and Javascript to make a functional website.

Take a look around! Thank you!

## Development checks

Run `npm ci`, then `npm run lint`, `npm run format:check`, and `npm run build`.
The build runs `npm run typecheck` before bundling the site.

Type-checking uses TypeScript 7 through the `typescript-native` npm alias.
The regular `typescript` dependency stays on TypeScript 6 because
`typescript-eslint` needs its supported JavaScript API for linting. Use
`npm run typecheck` to select the TypeScript 7 compiler explicitly.

React linting uses `@eslint-react/eslint-plugin`, which supports ESLint 10.
