# The Hub — Website

A Next.js website for The Hub, the events organizing body at our church.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Archivo Black + DM Sans)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
the-hub/
├── app/
│   ├── page.tsx              # Homepage
│   ├── events/
│   │   ├── page.tsx          # Events listing
│   │   └── [slug]/page.tsx   # Individual event page
│   ├── gallery/page.tsx      # Photo gallery
│   ├── about/page.tsx        # About The Hub
│   └── globals.css           # Global styles + fonts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EventCard.tsx
│   └── HubLogo.tsx
├── lib/
│   └── events.ts             # ← ALL event data lives here
└── public/
    └── images/
        └── gallery/          # ← Add event photos here
```

## Adding a New Event

Open `lib/events.ts` and add a new entry to the `events` array:

```ts
{
  slug: 'your-event-slug',           // URL: /events/your-event-slug
  title: 'Your Event Title',
  date: 'March 2025',
  month: 'March',
  year: 2025,
  category: 'social',                // sports | social | professional | worship | community
  status: 'upcoming',                // upcoming | past
  shortDescription: 'Short blurb for cards.',
  fullDescription: `Full description.\n\nCan have multiple paragraphs.`,
  location: 'Winnipeg',
  registrationFormUrl: 'https://docs.google.com/forms/...',  // Google Form embed URL
  coverColor: '#5C3D6E',             // Card background color
  emoji: '🎉',
  highlights: ['Point 1', 'Point 2'],
}
```

## Adding the Football Tournament Registration

1. Create a Google Form for registration
2. Get the embed URL: Form → Send → Embed → copy the `src` URL
3. In `lib/events.ts`, find `football-tournament-2025` and set `registrationFormUrl` to the embed URL

## Adding Photos to Gallery

1. Drop photos into `/public/images/gallery/`
2. Open `app/gallery/page.tsx`
3. Replace the placeholder `<div>` with:
```tsx
import Image from 'next/image'
// ...
<Image src="/images/gallery/your-photo.jpg" alt="Description" fill className="object-cover" />
```

## Deploying to Vercel (Free)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done ✅

Vercel auto-deploys on every push to `main`.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `hub-purple` | `#5C3D6E` | Primary brand |
| `hub-purple-dark` | `#3D2449` | Dark sections |
| `hub-purple-light` | `#8B6BA0` | Accents |
| `hub-cream` | `#F2EFE6` | Primary text |
| `hub-lavender` | `#B8A9C9` | Secondary text |
| `hub-black` | `#0F0F0F` | Background |
