# Junto Event Creator — Madrid

Standalone recruitment landing page for the Junto Event Creator freelance opportunity in
Madrid. This project is fully independent from every other Junto repository, app, or system —
it has no backend, no database, and no connection to Junto production infrastructure.

Flow: **landing → opportunity explanation → application form → video application**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: "export"`), deployable to GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & static export

```bash
npm run build
```

Static output is generated in `out/`. Set `GITHUB_PAGES=true` when building for the GitHub
Pages project site (adds the repo name as `basePath`/`assetPrefix`):

```bash
GITHUB_PAGES=true npm run build
```

## Status: prototype

- The application form and video upload are **fully built and validated client-side only**.
- No form data or video is sent to, or stored on, any backend — see the code comments in
  `src/components/ApplicationForm.tsx` and `src/components/VideoUpload.tsx`.
- The header logo is a placeholder (`src/components/Header.tsx`) pending the official Junto
  logo asset.
- Photography throughout the page is placeholder-only, clearly marked, pending approved Junto
  photos.

## Deployment

Pushing to `main` or `claude/pensive-albattani-us4h6a` builds and publishes the static export to
GitHub Pages via `.github/workflows/deploy.yml`.
