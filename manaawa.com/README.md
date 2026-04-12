# Manaawa — Website

Single-page website for the Manaawa DJ/producer project.

## Stack
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **react-icons** (fa6) for social icons
- **Google Fonts** — Cormorant Garamond (headings) + Inter (body)

## Design
- Color palette: `#F5F0E8` / `#E8DFD0` / `#D4C4A8` (beige) + `#1a1a1a` (dark)
- Grain texture overlay via CSS SVG filter
- Scroll fade-in animations via `hooks/useScrollFade.ts` (Intersection Observer)
- Hero letter-spacing reveal animation via CSS keyframes

## Sections
1. **Hero** — Full-viewport, animated ambient orbs, "MANAAWA" reveal
2. **Featured Set** — Dark section, YouTube embed (`MCwwfDH-mWs`)
3. **Connect** — Press kit grid: YouTube, Instagram, Spotify, TikTok
4. **Footer** — © Manaawa 2026

## Social links
- YouTube: https://www.youtube.com/@manaawa.project
- Instagram: https://www.instagram.com/manaawa.project/
- Spotify: https://open.spotify.com/intl-de/artist/0DuSv6WDqfozjWVK47Cejj
- TikTok: https://www.tiktok.com/@manaawa.project

## Branch strategy
- `dev` — active development (you are here)
- `main` — production

Merge `dev` → `main` when ready to deploy.

## Dev server
```bash
npm run dev
# → http://localhost:3000
```
