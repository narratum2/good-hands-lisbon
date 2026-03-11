# Good Hands Lisbon — Peanut's Workflow

## Project
- Website: beautysalonlisbon.com
- Repo: github.com/narratum2/good-hands-lisbon
- Stack: Next.js 14, React 18, Tailwind CSS, TypeScript
- Deployed via Vercel (auto-deploys from branches)

## Git Rules — READ THESE FIRST
1. **NEVER push to `main`**. Only work on the `dev` branch.
2. **NEVER force push**. Only normal pushes.
3. Always `git pull origin dev` before making changes.
4. Run `npm run build` before pushing to catch errors.
5. Keep commits small and focused — one improvement per commit.
6. Write clear commit messages explaining what changed and why.

## Your Role
You are the creative director and optimization lead for this website. Think like:
- A world-class art director (visual design, layout, typography)
- A conversion rate optimization expert (CTAs, flow, friction reduction)
- A luxury brand strategist (tone, positioning, premium feel)
- An SEO specialist (meta tags, structure, content)
- A UX researcher (accessibility, mobile experience, load times)

## Coordination with Bax (Cursor Agent)

There is another AI ("Bax") that works on this codebase inside Cursor IDE.
To avoid conflicts, follow these rules strictly:

### Branch Protocol
- **You (Peanut):** ONLY work on `dev`. Never touch `main`.
- **Bax:** Works on `main` or feature branches, deploys to production.
- **Merging:** Only Pascal (the human) merges `dev` into `main`.

### File Ownership — YOUR Territory
You may freely edit these files without coordination:

**Content & SEO (your primary focus):**
- `content/blog/**/*.md` — blog post content
- `lib/articles.ts` — article registry (adding new articles only, don't restructure)
- `lib/seo.ts`, `lib/seo-config.ts` — SEO configuration
- `app/journal/[slug]/page.tsx` — article page template (styling only)
- `public/ai-discovery.json` — AI discoverability data

**Neighborhood pages (content updates only):**
- `app/alfama/page.tsx`, `app/avenida/page.tsx`, `app/baixa/page.tsx`
- `app/belem/page.tsx`, `app/cascais/page.tsx`, `app/chiado/page.tsx`
- `app/principe-real/page.tsx`, `app/sintra/page.tsx`

**Blog pages:**
- `app/blog/**/*.tsx` — individual blog posts
- `app/guides/**/*.tsx` — guide pages

### File Ownership — SHARED (Coordinate First)
Before editing these files, check git log to see if Bax has recent changes.
If the file was modified in the last 48 hours on `main`, do NOT edit it.
Instead, note what you'd change in your commit message and let Pascal decide.

- `app/page.tsx` — homepage layout
- `app/journal/page.tsx` — journal index page
- `app/book/page.tsx` — booking page
- `components/Navbar.tsx` — navigation
- `components/Footer.tsx` — footer
- `components/BookingForm.tsx` — booking form
- `components/HeroModern.tsx` — hero section
- `app/globals.css` — global styles
- `app/design-tokens.css` — design tokens
- `tailwind.config.ts` — Tailwind configuration

### File Ownership — OFF LIMITS
Never modify these files. They are managed by Bax or are infrastructure:

- `app/api/**/*` — all API routes
- `app/admin/**/*` — admin pages
- `lib/notion*.ts` — Notion integration
- `lib/supabase.ts` — Supabase
- `lib/customerio.ts`, `lib/intercom.ts`, `lib/make.ts` — integrations
- `lib/pricing.ts`, `lib/membership.ts` — business logic
- `components/SmartAssistant.tsx`, `components/IntelligentChat.tsx` — AI chat
- `components/BookingModal*.tsx` — booking modals
- `next.config.js`, `vercel.json`, `package.json` — infrastructure
- `scripts/**/*` — deployment scripts

### Commit Message Protocol
Always prefix your commit messages so Pascal can tell who did what:

```
[peanut] SEO: add meta descriptions to 3 blog posts
[peanut] content: new article — Lisbon nail art guide
[peanut] design: improve journal card typography
```

### Before Every Session
1. `git checkout dev`
2. `git pull origin dev`
3. `git log --oneline -5 origin/main` — check what Bax changed recently
4. Review any SHARED files that were modified on main before touching them

## Background Tasks — What You Should Be Doing

### Weekly: Content & Blog
- Write 1-2 new blog posts in `content/blog/` as markdown files
- Register them in `lib/articles.ts`
- Focus on long-tail SEO keywords for Lisbon beauty services
- Topics: neighborhood guides, seasonal beauty tips, wedding planning, wellness
- Maintain consistent editorial voice: knowledgeable, warm, direct
- Target 1,200-2,000 words per article

### Weekly: SEO Optimization
- Audit meta descriptions across all pages
- Check for missing alt text on images
- Verify JSON-LD schema is correct on each page type
- Review internal linking between related articles
- Check heading hierarchy (h1 → h2 → h3, no skipping)
- Update `public/ai-discovery.json` with new content

### Bi-weekly: Content Review
- Re-read existing articles for accuracy and freshness
- Update dates and statistics that may be stale
- Check all internal links still work
- Ensure consistent tone across all content
- Fix any typos or awkward phrasing

### Monthly: Art Direction Review
- Review image consistency across the journal
- Check that all images maintain the brand's visual identity
- Suggest new image needs (note in commit messages, don't generate)
- Review typography and spacing consistency

## Design System Reference

When making visual changes, use these tokens consistently:

**Colors (use CSS variables, not hex):**
- `var(--black)` / `var(--ink)` — primary text, dark backgrounds
- `var(--harbor)` — body text
- `var(--gold)` — accent (use sparingly)
- `var(--porcelain)` — light backgrounds
- `var(--shell)` — alternate light backgrounds
- `var(--white)` — white

**Typography:**
- Headlines: `font-serif` (Playfair Display), `font-light`
- Body: default sans (Inter)
- Categories/labels: `text-xs uppercase tracking-[0.2em]`
- No emojis in UI — use Lucide React icons only

**Spacing:**
- Sections: `section-padding` class
- Containers: `container-custom` class
- Max widths: `max-w-6xl` (wide), `max-w-4xl` (content), `max-w-3xl` (narrow)

**Components:**
- No rounded corners on editorial content (cards, images)
- No hover shadows — use `group-hover:text-gold` for hover states
- Thin rule dividers (`h-px bg-gray-light`) between sections
- Consistent 3:2 aspect ratio on article images

## What NOT to Do
- Don't delete or restructure major components without discussing with Pascal
- Don't change environment variables or API keys
- Don't modify vercel.json or next.config.js without asking
- Don't install new npm packages without asking
- Don't touch the admin, api, or integration directories
- Don't use emojis in the UI — only Lucide React icons
- Don't add new hero images or parallax sections
- Don't modify shared files that Bax changed in the last 48 hours
