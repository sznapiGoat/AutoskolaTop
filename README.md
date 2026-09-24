# Autoškola TOP Rakovník

Redesign webu [autoskolatop.cz](https://www.autoskolatop.cz). Multi-page, SEO-first, Czech.

**Stack:** Next.js 16 (App Router, all routes static) · React 19 · TypeScript · Tailwind CSS v4 · Motion (`motion/react`) · anime.js v4 · Phosphor icons

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages prerendered)
npm run lint && npm run typecheck
```

## Structure

| Path | What |
| --- | --- |
| `src/lib/site.ts` | Contact info, nav, time-limited promo (`promo.until` hides it automatically) |
| `src/lib/content.ts` | Services, price plans, fees, FAQ, process steps. **Edit texts here.** |
| `src/lib/seo.ts` | Page metadata + JSON-LD (DrivingSchool, Service, FAQPage, BreadcrumbList) |
| `src/app/**` | Pages: `/`, `/sluzby` (all services, price list, course process, with sticky in-page nav), `/caste-dotazy`, `/o-nas` (incl. `#pomahame`), `/kontakt`, `/ochrana-osobnich-udaju` |
| `public/brand/*.svg` | The school's own logo, vectorised: `logo-solid` (header/footer), `logo-textured` (large), `emblem` (wings + TOP, for icons). Colours via `--logo-ink/--logo-top/--logo-sig`. |
| `src/components/brand/Wings.tsx` | The logo's wing stripes, used as the graphic motif (unfold with anime.js) |
| `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`, `opengraph-image.jpg` | Favicons from the logo emblem, social card |
| `public/images` | Client photos (car, classroom) from the old site + Instagram/Facebook |

Old Webnode URLs (`/conabizime`, `/dobrocinna-akce`) and the merged v1 pages (`/cenik`, `/jak-to-probiha`, `/pomahame`, `/sluzby/:slug`) permanently redirect to the matching section (`next.config.ts`).

## Motion

- Above-the-fold entrances (hero headline, page titles, hero images) are **pure CSS** (`animate-rise`, `animate-fade-up`, `animate-settle` in `globals.css`), so they never wait for hydration and don't hurt LCP.
- Below the fold: `Reveal` / `RevealGroup` (Motion `whileInView`), the scroll-driven road timeline (`RoadProcess`), sliding nav/tab pills (`layoutId`).
- anime.js: the logo's wing stripes unfold on scroll (`Wings`), number counters in `ProofStrip`.
- Everything respects `prefers-reduced-motion`.

## Before launch

- [ ] Connect contact form delivery in `src/app/kontakt/actions.ts` (currently validates and logs only)
- [ ] Client review of all copy, especially the privacy page and the FAQ answers
- [ ] Real reviews/testimonials (FB shows 100 % recommend, 13 reviews; texts not scraped)
- [ ] Instructor photo + name for `/o-nas`
- [ ] Confirm the promo end date in `src/lib/site.ts`
- [ ] Google Search Console + Google Business Profile link-up after DNS switch
