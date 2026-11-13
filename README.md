# TESTING45

A simple test landing page — a single, responsive hero section — built with
[Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org) 20.9 or newer
- npm (bundled with Node.js)

## Install

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Open <http://localhost:3000>. The page reloads as you edit files.

## Run in production mode

```bash
npm run build
npm start
```

The production server also listens on <http://localhost:3000>.

## Checks

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript type check
```

## Project structure

- `app/layout.tsx` — root layout, fonts, page title and meta description
- `app/page.tsx` — the hero section shown at `/`
- `app/globals.css` — Tailwind import and theme tokens
- `next.config.ts` — Next.js config (Tailwind runs through the Turbopack loader)
