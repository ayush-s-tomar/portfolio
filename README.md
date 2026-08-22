# Ayush Tomar — Portfolio

Dark, glassmorphic AI-engineer portfolio with a live Three.js agent-graph hero,
interactive glowing project cards, and scroll-triggered motion — built with
React, Vite, Tailwind CSS v4, Framer Motion, and Three.js.

## Run locally

    npm install
    npm run dev

Opens at http://localhost:5173

## Build for production

    npm run build
    npm run preview

Output goes to `dist/`.

## Deploy (free) — Vercel

1. Push this folder to a GitHub repo.
2. vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Build command: npm run build. Output dir: dist.
4. Deploy.

Netlify works the same way: build command `npm run build`, publish dir `dist`.

## Customize

- src/data.js — all project content, stack tags, metrics. Edit this first.
- src/components/Hero.jsx — headline, subtext, stats line.
- src/components/Contact.jsx — swap in your real email.
- src/index.css — color tokens at the top control the whole palette.
- src/components/AgentGraph.jsx — tweak NODE_COUNT / CONNECT_DIST for hero density.

## Notes

- Update the mailto: address in Contact.jsx and demo links in data.js.
- Respects prefers-reduced-motion.
