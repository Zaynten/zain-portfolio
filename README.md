# Zain — Portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Lucide. Glassmorphism, light/dark theme.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Make it yours

Everything personal lives in **`src/data/site.ts`**: name, email, location, social links, skills,
projects, experience/education and services. Items marked `PLACEHOLDER` are sample content.

| What | Where |
| --- | --- |
| Profile photo | put `public/profile.jpg`, then set `profileImage` in `site.ts` |
| Resume | replace `public/resume.pdf` (the current file is a placeholder) |
| Project screenshots | currently CSS mockups (`src/components/ProjectPreview.tsx`); swap for `<img>` tags |
| Live demo / repo links | `liveUrl` / `repoUrl` per project in `site.ts` |
| Stats (years, clients) | `stats` in `src/sections/About.tsx` (`null` shows "—") |
| SEO title / description | `index.html` |

## Contact form

Copy `.env.example` to `.env` and set one of:

- `VITE_WEB3FORMS_KEY` — free key from web3forms.com (emails you each message), or
- `VITE_FORM_ENDPOINT` — a Formspree endpoint.

With neither set, the form opens the visitor's email app with the message pre-filled.

## Structure

```
src/
  components/   Navbar, Footer, Background, ScrollProgress, ProjectPreview, ui/*
  sections/     Hero, About, Skills, Projects, Experience, Services, Contact
  hooks/        useTheme, useActiveSection
  data/site.ts  all content
```
