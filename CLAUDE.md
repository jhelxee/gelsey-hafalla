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
│   │   ├── Services.tsx             ← "What I Bring to Your Team" — 4 value-prop cards
│   │   ├── Experience.tsx           ← Timeline (HRD Singapore 2007–present), per-role icons
│   │   ├── Skills.tsx               ← 5 category cards + infinite marquee rows
│   │   ├── Projects.tsx             ← Filterable grid (category chips + show more)
│   │   ├── Education.tsx            ← Education + seminars/training
│   │   ├── Contact.tsx              ← Two-column: photo/CTA + contact cards + footer
│   │   ├── FadeIn.tsx               ← Scroll-triggered animation wrapper (variant: default/zoom/clip)
│   │   └── RevealText.tsx           ← Word-by-word heading reveal component
│   ├── components/ui/
│   │   ├── background-boxes.tsx     ← Aceternity Background Boxes (manual impl)
│   │   ├── 3d-card.tsx              ← Aceternity 3D Card (manual impl)
│   │   ├── hero-parallax.tsx        ← Aceternity Hero Parallax (manual impl)
│   │   ├── container-scroll-animation.tsx ← Aceternity Container Scroll (manual impl)
│   │   └── vortex.tsx               ← Aceternity Vortex (manual impl)
│   ├── lib/
│   │   ├── utils.ts                 ← cn() utility (clsx + tailwind-merge)
│   │   └── roleIcons.tsx            ← roleIcon(title) — maps a role title to a lucide icon, shared by About + Experience
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
- `valueProposition` — one-line client-facing hook shown in Hero
- `stats` — `{ years, projects, teamLed, systems }`, single source of truth for numbers shown in Hero
- `aboutMe` — bio paragraph(s)
- `experiences` — array of companies → roles → bullet points
- `services` — 4 "what I bring" cards (icon name + title + description) rendered by `Services.tsx`
- `skills` — 5 categories: Programming, Virtual Assistant, Administration, Additional Skills, AI-Assisted Development
- `projects` — 25 projects (24 NDA internal systems + 1 public), each with a `category` (`ProjectCategory`) used by the Projects filter grid
- `projectCategories` — the 4 category values used as filter chips
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
2. **Navbar** — dark bg, GH logo pill left, nav links right (incl. Services), Download CV teal button
3. **Hero** — Vortex animated particle bg + left text (stagger, value prop line) + right circular photo cutout with gradient ring + floating social icon bubbles (Mail/GitHub/LinkedIn)
4. **About** — profile photo (hover scale) + bio + 6 contact icon links + "At a Glance" condensed two-column snapshot (Academic Qualification / Career Highlights with per-role icons)
5. **Services** — "What I Bring to Your Team" — 4 value-prop cards (Full-Stack Dev, Team Leadership, Technical/Customer Support, AI-Assisted Development)
6. **Experience** — HRD Singapore timeline (Team Leader → Full Stack Dev → Tech Support → Customer Service → Chat Moderator), each role has an icon via `roleIcon()`
7. **Skills** — 5 icon cards (zoom FadeIn, incl. AI-Assisted Development) + two-row infinite marquee of all skill tags
8. **Projects** — filterable grid (All / Centralized Systems / Automation & Monitoring / Data & Reporting / Public) with "Show more" pagination, zoom FadeIn + hover lift
9. **Education** — Montessori Professional College + 2 seminars/trainings
10. **Contact + Footer** — two-column (photo + availability badge + CTA/CV download | 6 contact cards) + copyright

---

## Aceternity UI Components (all manually implemented — shadcn registry was unavailable)
| Component | File | Used In |
|-----------|------|---------|
| Background Boxes | `src/components/ui/background-boxes.tsx` | (available, not currently active in Hero) |
| 3D Card | `src/components/ui/3d-card.tsx` | (available, not currently active — Hero now uses a circular photo cutout instead) |
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
| 2026-07-18 | Structural redesign per client's `5.png` reference — kept dark/teal brand and existing animation system, borrowed layout ideas only (no contact form, per user's choice) |
| 2026-07-18 | Hero: replaced 3D tilt card with a circular photo cutout + gradient ring + floating social icon bubbles; added `valueProposition` line and data-driven `stats` |
| 2026-07-18 | Added `Services.tsx` ("What I Bring to Your Team") between About and Experience — explicit value-prop section for clients/recruiters |
| 2026-07-18 | Added "AI-Assisted Development" skills category (Claude, Perplexity, Prompt Engineering) — grounded in resume's existing Tools line |
| 2026-07-18 | Projects: replaced 3-card autoplay carousel with a filterable grid (`ProjectCategory` + "Show more" pagination) to better showcase 24+ systems |
| 2026-07-18 | About: added condensed "At a Glance" two-column snapshot (Academic Qualification / Career Highlights) below the bio |
| 2026-07-18 | Extracted `roleIcon()` to `src/lib/roleIcons.tsx`, shared by About's Career Highlights and Experience's timeline |
| 2026-07-18 | Contact: restyled into two columns (photo + availability badge + CTA | contact link cards) — no working form by design |
