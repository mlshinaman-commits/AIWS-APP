# IntelliSource AIWS Website

Premium public website for **IntelliSource AI Workforce Solutions**.

The site positions AIWS around one promise: **Hire at AI speed. Verify every human.** It turns the archived single-page concept into a maintainable Vite, React, TypeScript, and Tailwind foundation for ongoing improvement.

## Quickstart

```bash
npm install
npm run dev
npm test
npm run test:e2e
npm run build
```

## Demo capture

The demo form posts JSON to `VITE_DEMO_FORM_ENDPOINT` when configured. Without that environment variable, it prepares a complete email draft to `hello@intellisource.ai` so the site still has a working handoff on static hosting.

## Architecture

```text
src/
  components/       Shared visual building blocks
  content/site.ts   Structured marketing copy and navigation
  App.tsx           Landing page section composition
  index.css         Brand system and responsive presentation
reference/
  aiws-standalone-static-site.html  Archived standalone site from main
```

## Quality bar

- Keep the page conversion-focused: one primary CTA repeated at meaningful points.
- Keep claims and navigation in `src/content/site.ts` so future iteration is easy.
- Preserve the Fraud Shield differentiator and eleven-layer verification story.
- Run `npm test`, `npm run test:e2e`, and `npm run build` before shipping.

## Next improvement cycles

- Add a real demo/contact form or CRM integration.
- Add customer proof, logos, and case-study cards near CTA moments.
- Add route-level SEO assets, `robots.txt`, and `sitemap.xml`.
- Add Playwright smoke tests for navigation, CTA visibility, and responsive layout.
- Add product-detail pages for RPO, Workforce Intelligence, Talent Communities, and Fraud Shield.
