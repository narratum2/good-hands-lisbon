# PEANUT — Good Hands Lisbon AI Coordination Prompt

Paste this into any AI agent working on this repo to ensure coordination.

---

## Project

- **Site:** beautysalonlisbon.com
- **Repo:** github.com/narratum2/good-hands-lisbon
- **Stack:** Next.js 14.2.35, TypeScript, Tailwind CSS, Framer Motion
- **Deployment:** Vercel (auto-deploys from `main` branch)

---

## Coordination Rules (READ FIRST)

1. **Always work on `dev` branch only** — never commit or push directly to `main`
2. **Before starting any session:**
   ```bash
   git checkout dev
   git pull origin dev
   git merge main
   ```
3. **After finishing any session:**
   ```bash
   npm run build  # Must pass before pushing
   git add -A
   git commit -m "descriptive message"
   git push origin dev
   ```
4. **Never use `npx vercel --prod`** — all deploys go through GitHub → Vercel webhook on `main`
5. **Never force push** — always normal pushes
6. **Notify Bax after pushing** — he reviews in Cursor and merges dev → main when approved
7. **Off-limits without asking Bax first:**
   - `vercel.json`, `next.config.js`
   - Any API keys or environment variables
   - Force pushes or pushes to `main`
   - New npm packages

---

## Background Tasks (Run Continuously)

### 1. Blog Content Pipeline
- Write **1-2 articles per week**, published to `content/blog/`
- Format: Markdown frontmatter + body
- Length: **1,200–2,000 words**
- Voice: **Monocle editorial** — refined, specific, never generic
- Topics: Lisbon beauty, neighborhoods, seasonal guides, luxury wellness
- Images: Use existing brand images from `/public/brand-images/` — never Unsplash
- After writing: update `lib/articles.ts` to include the new article

### 2. SEO Optimization
- Every page should have: unique title, meta description, canonical URL, OG tags
- JSON-LD schemas: `BeautySalon`, `LocalBusiness`, `Article`, `FAQPage` where appropriate
- Internal linking: each page should link to 2-3 related pages
- Alt text: all images must have descriptive alt text
- Heading hierarchy: one H1 per page, logical H2/H3 structure

### 3. Content Review
- Monthly pass through all pages checking:
  - Factual accuracy (prices, neighborhoods, services)
  - Freshness (dates, seasonal references)
  - Typos and grammar
  - Tone consistency (luxury, warm, expert — never salesy)
  - "Request Service" language (not "Book Now")

### 4. Art Direction Consistency
- **Hero images:** Full-bleed, indirect/atmospheric, no smiling faces directly at camera
- **Image overlays:** Minimum `bg-black/50` for text readability
- **Typography:** Playfair Display (serif) for headlines, Inter (sans) for body
- **Colors:** ink (#1a1a1a), porcelain (#f8f6f3), gold (#c9a961), sage (#a8b5a5)
- **Image ratios:** 16:9 for heroes, 1:1 for cards, 4:3 for blog thumbnails
- **Icons:** Lucide React only — no mixing icon libraries

---

## Key Files to Know

```
app/page.tsx              — Homepage
app/layout.tsx            — Root layout (fonts, GA, navbar, footer)
app/services/page.tsx     — Services listing
app/book/page.tsx         — Booking/request form
components/HeroModern.tsx — Homepage hero
components/Lookbook.tsx   — Gallery (data from /public/lookbook/lookbook.json)
lib/articles.ts           — Blog article registry
lib/seo.ts                — SEO helper functions
lib/seo-config.ts         — Site-wide SEO config and templates
public/brand-images/      — All brand photography (100+ images)
content/blog/             — Markdown blog articles
```

---

## What Was Recently Changed (March 9-10, 2026)

These changes are live on `main` — do not revert:

- Hero image: `homepage-hero-alternative.png` (atmospheric, indirect)
- All Unsplash images replaced with local brand images
- `app/narratum/` deleted (internal dashboard removed from public site)
- Next.js upgraded: 13.5.6 → 14.2.35
- Security headers added: CSP, HSTS, X-Frame-Options
- Canonical URLs added to all sub-pages
- `/contact` redirects to `/#booking`
- Blog hero overlays strengthened for readability
- `GoogleAnalytics` component: dynamic import with `ssr: false`
- `useSearchParams` wrapped in `<Suspense>` in services and book pages

---

## Known Issues (Don't Fix Without Telling Bax)

- www redirect is 307 (should be 301) — needs DNS/Vercel config change
- Lookbook section may show empty on first load (JS timing) — monitor
- Hero source PNG is 1.2MB uncompressed — needs optimization before re-upload
- GitHub repo still public — Bax needs to change to private

---

*Last updated: March 11, 2026 by Peanut*
