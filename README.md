# Ayush Tomar â€” Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-29f6c6?style=flat-square)](https://ayush-s-tomar.vercel.app)
[![Vite](https://img.shields.io/badge/build-vite-646cff?style=flat-square)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-18-61dafb?style=flat-square)](https://react.dev)
[![License](https://img.shields.io/badge/license-restricted-orange?style=flat-square)](#license)

### [â†’ ayush-s-tomar.vercel.app](https://ayush-s-tomar.vercel.app)

A dark, glassmorphic portfolio with a live Three.js agent-graph hero, glowing project cards, and scroll-triggered motion â€” built to show shipped AI/agent work, not just a demo.

![Portfolio preview](public/preview.png)

## Contents

- [Stack](#stack)
- [Run locally](#run-locally)
- [Build for production](#build-for-production)
- [Deploy](#deploy-free--vercel)
- [Customize](#customize)
- [Notes](#notes)
- [License](#license)

## Stack

| Layer | Tech |
|---|---|
| Frontend | React, Vite, Tailwind CSS v4 |
| Motion | Framer Motion, Three.js (animated agent-graph background) |
| Deploy | Vercel |

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy (free â€” Vercel)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) â†’ **New Project** â†’ import the repo.
3. Framework preset: **Vite** Â· Build command: `npm run build` Â· Output dir: `dist`.
4. Deploy.

Netlify works the same way â€” build command `npm run build`, publish dir `dist`.

## Customize

| File | What it controls |
|---|---|
| `src/data.js` | All project content, stack tags, metrics â€” edit this first |
| `src/components/Hero.jsx` | Headline, subtext, stats line |
| `src/components/Contact.jsx` | Email, testimonial, availability line |
| `src/index.css` | Color tokens at the top â€” controls the whole palette |
| `src/components/AgentGraph.jsx` | `NODE_COUNT` / `CONNECT_DIST` â€” hero graph density |

## Notes

- Respects `prefers-reduced-motion` for accessibility.
- Update the `mailto:` address in `Contact.jsx` and demo links in `data.js` before reusing.
- No backend â€” fully static, deploys as a single Vite build.

## License

MIT â€” feel free to fork and adapt the structure for your own portfolio. Please don't copy the content (project write-ups, testimonial, bio) verbatim.

---

Built by [Ayush Tomar](https://github.com/ayush-s-tomar) Â· [LinkedIn](https://www.linkedin.com/in/ayushsinghtomar) Â· [Dev.to](https://dev.to/ayushsinghtomar)
