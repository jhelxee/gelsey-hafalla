# CLAUDE.md — Gelsey Hafalla Portfolio

Project reference file for Claude Code sessions. Updated as decisions are made.

---

## Project Overview
Personal portfolio website for **Gelsey T. Hafalla** — Full Stack Web Developer, Team Leader, Chat Moderator, Technical Support & Customer Support.

**Goal:** Showcase Gelsey's career, skills, and projects to potential employers/clients.  
**Design reference:** https://dixieraizpacheco.com/ — dark theme, bold typography, split hero layout.

---

## Tech Stack
| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript (Vite) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion v12 |
| Icons | Lucide React |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Utilities | clsx + tailwind-merge → `cn()` |
| Build | Vite 6 |

---

## Project Structure
```
GelseyIsayas-Portfolio/
├── public/
│   ├── favicon.svg                  ← GH lettermark on teal bg
│   └── assets/
│       ├── profile.png              ← Profile photo
│       ├── resume.pdf               ← Downloadable CV
│       └── projects/
│           ├── centralized-system.jpg
│           ├── centralized-master.jpg
│           ├── bundenban-shio.jpg
│           └── data-gathering.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               ← Sticky nav, GH logo, mobile hamburger
│   │   ├── Intro.tsx                ← Splash screen (AnimatePresence exit)
│   │   ├── Hero.tsx                 ← Vortex bg + 3D card profile + stagger text
│   │   ├── About.tsx                ← Profile photo + bio + contact icons
│   │   ├── Experience.tsx           ← Timeline (HRD Singapore 2007–present)
│   │   ├── Skills.tsx               ← 4 category cards + infinite marquee rows
│   │   ├── Projects.tsx             ← 2-column project card grid
│   │   ├── Education.tsx            ← Education + seminars/training
│   │   ├── Contact.tsx              ← Contact cards + footer
│   │   ├── FadeIn.tsx               ← Scroll-triggered animation wrapper (variant: default/zoom/clip)
│   │   └── RevealText.tsx           ← Word-by-word heading reveal component
│   ├── components/ui/
│   │   ├── background-boxes.tsx     ← Aceternity Background Boxes (manual impl)
│   │   ├── 3d-card.tsx              ← Aceternity 3D Card (manual impl)
│   │   ├── hero-parallax.tsx        ← Aceternity Hero Parallax (manual impl)
│   │   ├── container-scroll-animation.tsx ← Aceternity Container Scroll (manual impl)
│   │   └── vortex.tsx               ← Aceternity Vortex (manual impl)
│   ├── lib/
│   │   └── utils.ts                 ← cn() utility (clsx + tailwind-merge)
│   ├── data/
│   │   └── portfolio.ts             ← ALL content data (single source of truth)
│   ├── App.tsx                      ← Assembles all sections, AnimatePresence for Intro
│   ├── main.tsx                     ← React entry point
│   ├── index.css                    ← Tailwind import + global styles + marquee keyframes
│   └── vite-env.d.ts
├── index.html                       ← Google Fonts, favicon link
├── vite.config.ts                   ← server.host: true (LAN access enabled)
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── package.json
└── CLAUDE.md                        ← This file
```

---

## Content Source of Truth
All portfolio content lives in **`src/data/portfolio.ts`**.  
To update any text, social links, skills, projects — edit that file only.

### Key exports:
- `personalInfo` — name, email, phone, address, LinkedIn, GitHub, photo, resume paths
- `aboutMe` — bio paragraph(s)
- `experiences` — array of companies → roles → bullet points
- `skills` — 4 categories: Programming, Virtual Assistant, Administration, Additional
- `projects` — 4 projects with image paths, tags, descriptions
- `education` — school + degree
- `trainings` — seminars/training institutions

---

## Design Tokens
| Token | Value |
|-------|-------|
| Background main | `#0d0d0d` |
| Background alt | `#111` |
| Hero background | `bg-slate-900` (Vortex canvas) |
| Accent (teal) | `#00b4a0` |
| Accent hover | `#009e8c` |
| Text primary | `white` |
| Text secondary | `gray-400` |
| Accent bg tint | `#00b4a0/10` |
| Card border | `border-white/10` |

Sections alternate between `bg-[#0d0d0d]` and `bg-[#111]`.

---

## Personal Info (from resume)
- **Name:** Gelsey T. Hafalla
- **Email:** jhelxee028@gmail.com
- **Phone:** +639192253040
- **Address:** 0101 Purok 7 Bacao II, General Trias City, Cavite
- **LinkedIn:** linkedin.com/in/gelsey-hafalla
- **GitHub:** github.com/gelseyhafalla
- **Live Portfolio:** gelsey-hafalla-profilev2.vercel.app/

---

## Portfolio Sections
1. **Intro** — full-screen splash, GH logo scales in, name + tagline, progress bar, slides up on exit
2. **Navbar** — dark bg, GH logo pill left, nav links right, Download CV teal button
3. **Hero** — Vortex animated particle bg + left text (stagger) + right 3D Card profile photo
4. **About** — profile photo (hover scale) + bio + 6 contact icon links
5. **Experience** — HRD Singapore timeline (Team Leader → Full Stack Dev → Tech Support → Customer Service → Chat Moderator)
6. **Skills** — 4 icon cards (zoom FadeIn) + two-row infinite marquee of all skill tags
7. **Projects** — 2-col grid with zoom FadeIn + hover lift
8. **Education** — Montessori Professional College + 2 seminars/trainings
9. **Contact + Footer** — 6 contact cards + copyright

---

## Aceternity UI Components (all manually implemented — shadcn registry was unavailable)
| Component | File | Used In |
|-----------|------|---------|
| Background Boxes | `src/components/ui/background-boxes.tsx` | (available, not currently active in Hero) |
| 3D Card | `src/components/ui/3d-card.tsx` | Hero profile photo |
| Hero Parallax | `src/components/ui/hero-parallax.tsx` | (available, not currently active) |
| Container Scroll Animation | `src/components/ui/container-scroll-animation.tsx` | (available, not currently active) |
| Vortex | `src/components/ui/vortex.tsx` | Hero background |

> **Note:** All Aceternity components were implemented from source because `npx shadcn@latest add @aceternity/...` registry was down. They match the original API exactly.

---

## Animation System
| Component | Purpose |
|-----------|---------|
| `FadeIn.tsx` | Scroll-triggered wrapper. Props: `direction` (up/left/right/none), `delay`, `variant` (default/zoom/clip) |
| `RevealText.tsx` | Word-by-word slide-up reveal for `<h2>` headings. Uses `whileInView` stagger |
| `Intro.tsx` | Splash screen with `AnimatePresence` exit (slides up) |
| `Vortex` | Canvas particle animation for Hero background |
| `3d-card` | Mouse-tracked 3D tilt effect with layered `translateZ` depth |
| Marquee (CSS) | `animate-marquee-left` / `animate-marquee-right` in `index.css` — Skills section |

### Framer Motion features in use:
`motion`, `useInView`, `useScroll`, `useTransform`, `AnimatePresence`, `variants`, `staggerChildren`, `whileInView`, `whileHover`, `viewport`

---

## Known Patterns & Gotchas
- **Framer Motion v12 TypeScript**: `ease` inside `variants` must use string (`'easeOut'`) not array (`[0.22, 1, 0.36, 1]`). Use `type Variants` import.
- **CSS custom properties**: Tailwind v4 does NOT expose color custom properties like `--sky-300`. Use hex values directly.
- **Aceternity colors**: Use hex values in `backgroundColor` (e.g. `"#7dd3fc"`), never `var(--sky-300)`.
- **3D card absolute children**: Inner `<img>` must NOT use `absolute` positioning inside a non-relative parent — use `w-full h-full` instead.
- **LAN access**: `vite.config.ts` has `server: { host: true }` — run `npm run dev` and use the Network IP for other devices on the same Wi-Fi.

---

## Running the Project
```bash
npm install           # Install dependencies
npm run dev           # Dev server — http://localhost:5173 (also on LAN)
npm run build         # Production build
npm run preview       # Preview production build
```

---

## Assets
| Original | Copied to |
|----------|-----------|
| `Gelsey Picture Profile.png` | `public/assets/profile.png` |
| `Gelsey Hafalla.pdf` | `public/assets/resume.pdf` |
| `Project/centralized system.JPG` | `public/assets/projects/centralized-system.jpg` |
| `Project/centralized master.JPG` | `public/assets/projects/centralized-master.jpg` |
| `Project/bundenban shio.JPG` | `public/assets/projects/bundenban-shio.jpg` |
| `Project/data gathering.JPG` | `public/assets/projects/data-gathering.jpg` |

---

## Conventions
- One component per file, PascalCase filenames
- All data in `src/data/portfolio.ts`, never hardcoded in components
- Section IDs match nav hrefs: `#hero`, `#about`, `#experience`, `#skills`, `#projects`, `#education`, `#contact`
- Aceternity components go in `src/components/ui/`
- `cn()` utility from `src/lib/utils.ts` for conditional Tailwind classes

---

## Decisions Log
| Date | Decision |
|------|----------|
| 2026-05-06 | Framework: React + TypeScript (Vite) |
| 2026-05-06 | Design reference: dixieraizpacheco.com — dark theme, teal accent |
| 2026-05-06 | All content sourced from `Gelsey Hafalla.pdf` (resume) |
| 2026-05-06 | Tailwind CSS v4 with `@tailwindcss/vite` plugin |
| 2026-05-06 | Added Framer Motion, clsx, tailwind-merge |
| 2026-05-06 | Intro splash screen with AnimatePresence |
| 2026-05-06 | Aceternity Background Boxes added to Hero (later replaced) |
| 2026-05-06 | Aceternity 3D Card added to Hero profile photo |
| 2026-05-06 | Aceternity Hero Parallax implemented for Hero (later replaced) |
| 2026-05-06 | Switched Hero background: Background Boxes → Vortex |
| 2026-05-06 | Skills section: infinite CSS marquee added below category cards |
| 2026-05-06 | RevealText component: word-by-word heading reveals on all sections |
| 2026-05-06 | FadeIn extended with variant prop: zoom + clip variants |
| 2026-05-06 | Full dark theme applied site-wide (bg-[#0d0d0d] / #111) |
| 2026-05-06 | vite.config.ts: server.host = true for LAN access |
| 2026-05-06 | Favicon changed from GitHub Octocat SVG to GH lettermark |
