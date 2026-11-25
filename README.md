# Richson Global (`richsonglobal.com`)

Independent, production-ready React + TypeScript + Vite web application for **Richson Global** and **Eric Richson Darko**, ready for static hosting on **Cloudflare Pages**.

## Architecture & Clear Brand Separation

Every route has one distinct, non-duplicated purpose:

- **`/` (`HomePage`)**: Concise executive gateway with interactive 5-expression portrait, executive metrics strip, and high-level directional previews.
- **`/about` (`AboutPage`)**: Verified founder background, institutional affiliations (CORM, Ruth Tiso Foundation, SWAL, CEM East Legon), education, competencies, and languages.
- **`/ecosystem` (`EcosystemPage`)**: Structural overview cleanly separating **Richson Global**, **Richson Creatives**, **Personal Authorship**, **Wisefold Network**, **Ministry**, and **Emerging Ventures**.
- **`/approach` (`ApproachPage`)**: Five-stage venture institutionalisation methodology (*Identify → Develop → Establish → Grow → Institutionalise*), governance philosophy (*Building Beyond The Founder*), and core values.
- **`/partnerships` (`PartnershipsPage`)**: Collaboration pathways and partnership brief form.
- **`/ministry` (`MinistryPage`)**: Pastoral ministry oversight at CEM East Legon, relationship/marriage education, and counseling initiatives.
- **`/library-store` (`LibraryStorePage`)**: Eric Richson Darko's 18 authored titles (15 solo, 3 co-authored), separate from Richson Creatives' commercial client services.
- **`/creatives` & `/creatives/portfolio` (`CreativesPage`)**: Richson Creatives' branding, web engineering, IT solutions, client website showcase (`cormgh.org`, `kerdfarms.com`, `isaiahadegoke.com`, `richsonglobal.com`), enterprise track record, and 19+ client-produced books.
- **`/insights` (`InsightsPage`)**: Curated essays and blog nuggets across leadership, systems, relationships, faith, and creative craft.
- **`/contact` (`ContactPage`)**: Dedicated inquiry hub with direct coordinates and settlement details.

## Dual Contact Form Routing (Zero `.env` Required)

All inquiry forms across the site—**Contact Page**, **Partnerships Page**, **Richson Creatives Project Brief**, **Footer Newsletter**, and the persistent lower-left **Enquire With Us** widget—share `src/lib/formService.ts` and support:

1. **Send via Email (Web3Forms)**: `POST https://api.web3forms.com/submit` with source tagging (`form_source` / `subject`) and clean loading, success, and error states.
2. **Send via WhatsApp**: Formats all filled fields into a readable summary routed to `https://wa.me/233530554498?text=...` in a new tab (`target="_blank"`), paired with a **Copy Summary** fallback button in case pop-ups are blocked.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Cloudflare Deployment

```bash
npm run build
```

This repository is configured for direct GitHub deployment on **Cloudflare Workers (Static Assets)** and **Cloudflare Pages**:
- **Build command**: `npm run build` (or `bun run build`)
- **Deploy command (Cloudflare Workers Builds)**: `npx wrangler deploy`
- **Build output directory**: `dist`
- **SPA routing**: Configured natively in `wrangler.toml` (`[assets]` with `not_found_handling = "single-page-application"`)
- **Security & caching headers**: Configured via `public/_headers`
- **SEO**: Per-route `<title>` and meta descriptions (`SeoHead.tsx`), `public/robots.txt`, and `public/sitemap.xml`
