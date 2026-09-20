# IB Afridi — Portfolio

A professional portfolio for **IB Afridi (Ishaq Afridi)** — Cybersecurity Specialist, Python security-tool developer and 3D web developer from Peshawar, Pakistan.

Built as a typed React application with a three-theme design system, scroll-reveal motion, accessible navigation and production-ready deployment config.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://ib-afridi.netlify.app)

**Live:** https://ib-afridi.netlify.app · **GitHub:** https://github.com/afridi017

---

## Features

- **Three themes** — `luxury` (violet, default), `classic` (navy/cyan) and `light`, driven by CSS variables on `<html data-theme>`, persisted in `localStorage` and synced to the browser UI colour.
- **Design system in code** — semantic colour tokens (`base`, `panel`, `card`, `line`, `ink`, `active`) exposed to Tailwind as `rgb(var(--c-*) / <alpha-value>)`, so every opacity utility keeps working in every theme.
- **Sections** — hero with 3D tilt card, about + animated stat counters, four service cards, experience timeline, bento project grid, recognition cards, contact panel with a validated mailto form.
- **Accessible** — skip link, semantic landmarks, `aria-current` navigation, labelled form fields, `aria-live` status text, keyboard-operable drawer (Escape to close, scroll lock) and visible focus rings.
- **Motion that respects people** — all reveal, counter, marquee and tilt animation is disabled under `prefers-reduced-motion`.
- **Fast** — no UI framework, no animation library; the whole site is ~62 kB gzipped JS + ~7 kB gzipped CSS with self-hosted-free Google fonts and lazy-loaded imagery.
- **SEO ready** — descriptive meta, Open Graph / Twitter cards, canonical URL, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`, web manifest and a `<noscript>` fallback.

---

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| UI         | React 18 + TypeScript (strict)                |
| Build      | Vite 5                                        |
| Styling    | Tailwind CSS 3 + CSS custom properties        |
| Icons      | lucide-react                                  |
| Quality    | ESLint 9 (type-aware TS + react-hooks), Prettier |
| Deployment | Netlify (`netlify.toml`), CI via GitHub Actions |

---

## Project structure

```text
.
├── index.html                 # Vite entry: SEO meta, fonts, JSON-LD, favicon
├── netlify.toml               # Build, SPA redirect, security + cache headers
├── eslint.config.js           # Flat ESLint config
├── tailwind.config.js         # Tokens, fonts, shadows, keyframes
├── vite.config.ts             # Alias @/*, dev/preview host, HMR proxy support
├── public/                    # favicon.svg, robots.txt, sitemap.xml, manifest
├── src/
│   ├── main.tsx               # React root
│   ├── App.tsx                # Layout composition + active-section state
│   ├── index.css              # Theme tokens + component classes
│   ├── data/profile.ts        # ← ALL CONTENT LIVES HERE
│   ├── hooks/                 # theme, active section, in-view, count-up, tilt, scroll lock
│   └── components/
│       ├── layout/            # Sidebar, mobile dock, drawer, header controls, footer
│       ├── sections/          # Hero, About, Services, Experience, Projects, Recognition, Contact
│       └── ui/                # Reveal, SectionHeading, Marquee, StatGrid
└── legacy/                    # Original HTML-only portfolio (kept for reference)
```

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build + local preview
npm run build
npm run preview
```

### Available scripts

| Script              | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                       |
| `npm run build`     | Type-check then build to `dist/`               |
| `npm run preview`   | Serve the production build locally             |
| `npm run typecheck` | `tsc --noEmit` only                            |
| `npm run lint`      | ESLint over the whole project                  |
| `npm run format`    | Prettier for `src/**/*.{ts,tsx,css}`           |

### Running behind a proxy (Codespaces, sandboxes, tunnels)

If the dev server sits behind an HTTPS proxy, expose the HMR socket on the proxy port:

```bash
VITE_HMR_CLIENT_PORT=443 npm run dev
```

---

## Editing content

Everything visitor-facing lives in **`src/data/profile.ts`** — name, headline, availability, socials, stats, services, experience, projects and recognition cards. Update that file and every section follows; no component edits required.

A few common changes:

```ts
// Add your photo: place the file in public/ and point at it.
photoUrl: '/profile.jpg',

// Add a resume: place it in public/ and it becomes a download button.
resumeUrl: '/ib-afridi-resume.pdf',
```

If `photoUrl` fails to load, the hero automatically falls back to an `IA` monogram card, so the layout never breaks.

---

## Deployment

### Netlify (current)

`netlify.toml` already defines the build:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Connect the repository in Netlify (or run `netlify deploy --prod`) and it builds on every push to `main`.

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

Set `base: '/<repo-name>/'` in `vite.config.ts` when deploying to a project page.

---

## Accessibility & performance notes

- All interactive elements are real `button`/`a` elements with visible focus and descriptive labels.
- Colour contrast is maintained across all three themes; the light theme swaps active states to dark-on-light automatically through tokens.
- Images are lazy-loaded with explicit dimensions to avoid layout shift; the hero visual is pure CSS.
- CI runs `lint`, `typecheck` and `build` on every push and pull request.

---

## Legacy version

`legacy/` holds the original **HTML-only** portfolio built during the Corvit Systems HTML module
(`legacy/index.html`, plus its screenshots and media). It is kept as a learning record and is not
part of the build. Open it directly in a browser if you want to compare the two versions.

---

## Author

**IB Afridi** (Ishaq Afridi) — Developer · Ethical Hacker · Creator

- Website: https://ib-afridi.netlify.app
- GitHub: https://github.com/afridi017
- LinkedIn: https://linkedin.com/in/ishaqafridi017
- Email: ishaqafridi898@gmail.com
- WhatsApp: +92 333 2149829
- Location: Peshawar, Khyber Pakhtunkhwa, Pakistan

---

## License

MIT © IB Afridi. Content, copy and branding belong to the author — please ask before reusing them.
