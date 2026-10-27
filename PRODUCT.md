# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Khalil Jackson's software development work, experience, and qualifications. Their visit should help them assess his work and contact him about an opportunity.

## Product Purpose

Khalil Jackson's personal portfolio brings together his projects, technical skills, education, professional experience, and resume. Success means a visitor can understand what he builds, inspect real examples, and find a clear way to contact him.

## Positioning

The portfolio connects software development with Khalil's experience in team leadership and field testing in restaurant workflows. Real project previews and field photographs support that connection. It showcases both web projects and a native iOS project.

## Operating Context

Visitors navigate a single page through Home, Projects, About, and Contact. They can explore project previews, follow repository and website links, switch between GymTracker screenshots, open original screenshots and field photos, view the full resume, and use email or professional profile links to connect.

## Capabilities and Constraints

- Preserve the real content and existing functionality, as confirmed by the owner during initialization.
- The site uses React, TypeScript, Radix UI, and Vite. GymTracker is a showcased native iOS project; this portfolio remains a web product.
- GitHub Pages uses the `/Web-Dev-Project/` base path. Asset paths in the data files are relative to `public/`; components resolve the base path.
- Maintain the project showcase, current-build section, career milestones, skills, resume, field-testing gallery, and contact destinations.
- Light and dark themes initially follow the system preference and remember a visitor's selection when browser storage is available. The toggle remains usable when storage is blocked.
- Content is maintained in `src/data/portfolio.ts`, `src/data/projects.ts`, and the relevant components. Development uses `npm run dev`.
- Career milestones intentionally use labels rather than dates until exact dates are supplied.
- Open decisions: no hiring metrics or additional product-specific accessibility requirements were established during initialization.

## Brand Commitments

The owner confirmed the current product baseline: Khalil Jackson is an Atlanta software developer, an Information Technology student and Honors Scholar at Kennesaw State University, and a Software Developer Co-op at Chick-fil-A.

Preserve the factual biography, project names, career history, and real assets. Existing copy introduces Khalil in the first person and connects his work with curiosity, care, collaboration, and human-centered design. Visual decisions belong to a separate design record.

## Evidence on Hand

- `src/data/projects.ts` records D'Luxe Beauty, Personal Portfolio, and GymTracker, including descriptions, technologies, highlights, repository links, and available website links.
- `public/projects/` contains website previews and real GymTracker Home, Workout, and Plan screenshots.
- `public/photos/khalil-headshot.jpg` is the portfolio portrait. Other files in `public/photos/` show Chick-fil-A field testing and collaboration; their captions and alt text are in `src/data/portfolio.ts`.
- `public/resume.png` is the existing resume asset.
- `src/components/ContactSection.tsx` contains the email, LinkedIn, Handshake, and Merit Pages destinations.
- `src/data/portfolio.ts` records education, leadership, and software development milestones, plus the current-build content.
- `tests/` contains checks for content assets, theme behavior, animation fallbacks, navigation, responsiveness, and automated accessibility.

These assets and records are the available evidence. Do not invent testimonials, customer endorsements, performance results, or precise career dates. Reconfirm time-sensitive biography and current-build claims when changing them.

## Product Principles

1. Help recruiters and hiring managers evaluate the work and reach Khalil.
2. Ground professional claims in real projects, experience, and supplied evidence.
3. Preserve working access to projects, screenshots, photos, the resume, and contact links.
4. Keep the relationship between people, practical workflows, and software visible in the portfolio's content.

## Accessibility & Inclusion

Preserve the existing responsive layouts, keyboard navigation, skip link, descriptive image alternatives, labeled controls, and reduced-motion behavior. Content visibility must not depend on animation support. Existing browser tests include automated WCAG A/AA checks in both themes; these checks complement manual keyboard and visual review and do not establish complete conformance.
