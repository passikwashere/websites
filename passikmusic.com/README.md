# PASSIK — Website

One-page portfolio for PASSIK (DJ & Producer, Zürich). Built for bookers and fans.

## Stack
- Next.js 16 (App Router, TypeScript), Tailwind CSS v4
- Fonts: **Unbounded ExtraBold** (display, self-hosted in `app/fonts/`, same as the Fernweh livesets) + Inter (body)
- Booking form → `app/api/booking/route.ts` → Resend → hello@passikmusic.com

## Content
Everything editable lives in `lib/site.ts`: bio, live sets (YouTube IDs), stats, socials, booking email.

## Design
- Black `#0B0A08` / bone `#EDE6D9` / sand `#D9CCB4` / tan `#B8A584` (matches Manaawa & Fernweh)
- All photos toned to warm monochrome (`.tone`) with film grain (`.grain-photo` + animated page grain)

## Booking email setup (Vercel env vars)
- `RESEND_API_KEY` — resend.com API key; verify the domain `passikmusic.com` in Resend (DNS records)
- `BOOKING_FROM` — optional, defaults to `PASSIK Website <website@passikmusic.com>`

Without the key the form shows an error with a mailto fallback.


## Source material
`_source/` holds the raw press kit (videos, print-res photos, logos, bio PDF) and is gitignored.
Web versions are in `public/images/`.

## Dev
```bash
npm run dev   # → http://localhost:3000
```
