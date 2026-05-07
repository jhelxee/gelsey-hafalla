# CLAUDE.md — Gelsey Hafalla Portfolio

Project reference file for Claude Code sessions. Updated as decisions are made.

---

## Project Overview
Personal portfolio website for **Gelsey T. Hafalla** — Full Stack Web Developer, Team Leader, Chat Moderator, Technical Support & Customer Support.

**Goal:** Showcase Gelsey's career, skills, and projects to potential employers/clients.  
**Design reference:** https://dixieraizpacheco.com/ — dark theme, bold typography, grid project layout, icon-based skill cards, timeline experience.

---

## Tech Stack
| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript (Vite) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |
| Build | Vite 6 |

---

## Project Structure
```
GelseyIsayas-Portfolio/
├── public/
│   └── assets/
│       ├── profile.png              ← Profile photo
│       └── resume.pdf               ← Gelsey Hafalla.pdf (downloadable)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               ← Sticky nav, mobile hamburger
│   │   ├── Hero.tsx                 ← Full-screen hero, CTA buttons
│   │   ├── About.tsx                ← Profile photo + bio + contact icons
│   │   ├── Experience.tsx           ← Timeline (HRD Singapore 2007–present)
│   │   ├── Skills.tsx               ← 4 category icon-card grid
│   │   ├── Projects.tsx             ← 2-column project card grid
│   │   ├── Education.tsx            ← Education + seminars/training
│   │   └── Contact.tsx              ← Contact cards + footer
│   ├── data/
│   │   └── portfolio.ts             ← ALL content data (single source of truth)
│   ├── App.tsx                      ← Assembles all sections
│   ├── main.tsx                     ← React entry point
│   ├── index.css                    ← Tailwind import + global styles
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── package.json
└── CLAUDE.md                        ← This file
```

---

## Content Source of Truth
All portfolio content lives in **`src/data/portfolio.ts`**.  
To update any text, social links, skills, projects — edit that file only. Components read from it.

### Key exports:
- `personalInfo` — name, email, phone, address, LinkedIn, GitHub, photo, resume paths
- `aboutMe` — bio paragraph(s)
- `experiences` — array of companies → roles → bullet points
- `skills` — 4 categories: Programming, Virtual Assistant, Administration, Additional
- `projects` — 4 projects with title, tags, descriptions (no screenshots — confidential, owned by private company)
- `education` — school + degree
- `trainings` — seminars/training institutions

---

## Design Tokens
| Token | Value |
|-------|-------|
| Background | `#0d0d0d` (main) / `#111` (alternating sections) |
| Card background | `#1a1a1a` |
| Accent (teal) | `#00d4b4` |
| Accent hover | `#00bfa3` |
| Text primary | `white` |
| Text secondary | `#e5e5e5` / `gray-400` |
| Accent bg tint | `#00d4b4/10` |

Sections alternate between `bg-[#0d0d0d]` and `bg-[#111]` for visual rhythm.

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
1. **Navbar** — sticky, logo left, links right, Download CV button
2. **Hero** — name, title, "View Projects" + "Download Resume" CTAs
3. **About** — circular photo, bio, 6 contact links with icons
4. **Experience** — HRD Singapore timeline (Team Leader → Full Stack Dev → Tech Support → Customer Service → Chat Moderator)
5. **Skills** — 4 card grid: Programming / Virtual Assistant / Administration / Additional
6. **Projects** — 2-col grid: Centralized System, Centralized Master, Bundenban Shiyousho, Data Gathering
7. **Education** — Montessori Professional College + 2 seminars
8. **Contact + Footer** — 6 contact cards, copyright

---

## Running the Project
```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Assets (original files kept at root)
| Original | Copied to |
|----------|-----------|
| `Gelsey Picture Profile.png` | `public/assets/profile.png` |
| `Gelsey Hafalla.pdf` | `public/assets/resume.pdf` |
| Project screenshots | Removed — projects are confidential (private company IP); shown as placeholder cards |

---

## Conventions
- One component per file, PascalCase filenames
- No inline styles — Tailwind classes only
- All data in `src/data/portfolio.ts`, never hardcoded in components
- Section IDs match nav hrefs: `#about`, `#experience`, `#skills`, `#projects`, `#education`, `#contact`

---

## Decisions Log
| Date | Decision |
|------|----------|
| 2026-05-06 | Framework: React + TypeScript (Vite) chosen by user |
| 2026-05-06 | Design reference: dixieraizpacheco.com — dark theme, teal accent |
| 2026-05-06 | All content sourced from `Gelsey Hafalla.pdf` (resume) |
| 2026-05-06 | Tailwind CSS v4 with `@tailwindcss/vite` plugin |
