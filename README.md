# Richson Global — Complete Standalone Web Application & Cloudflare Pages Migration

A complete, independent, production-ready React + TypeScript + Vite web application reconstructing **Richson Global** (`Eric Richson Darko`) and **Richson Creatives**, engineered for zero-dependency deployment on **Cloudflare Pages**.

---

## Page Inventory & Route Map

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | `HomePage` | Flagship front page featuring the interactive 5-expression portrait, ecosystem pillars, client website front-page showcase, featured personal authorship books, 5-stage framework, and enterprise track record. |
| `/about` | `AboutPage` | Founder biography, institutional affiliations (including CORM website preview), academic qualifications, competencies, languages, and core values. |
| `/ecosystem` | `EcosystemPage` | Structured breakdown of all 5 pillars with clear brand separation: Richson Creatives, Personal Authorship, Wisefold Network, Pastoral Ministry, and Emerging Ventures. |
| `/creatives` | `CreativesPage` | Standalone dark studio portal for **Richson Creatives** featuring browser-framed client website front-page screenshots (`cormgh.org`, `kerdfarms.com`, `isaiahadegoke.com`, `richsonglobal.com`), enterprise track record, 19 client books produced, services, 5-step process, and project brief intake (`0530554498`). |
| `/library-store` | `LibraryStorePage` | Eric Richson Darko's personal authorship catalog (18 titles: 15 solo, 3 co-authored) with filtering, search, Selar / MoMo / WhatsApp ordering, and a clearly separated section routing commercial author services to **Richson Creatives**. |
| `/approach` | `ApproachPage` | The five-stage institutionalisation methodology (*Identify, Develop, Establish, Grow, Institutionalise*) and *"Building Beyond The Founder"* thesis. |
| `/ministry` | `MinistryPage` | Pastoral oversight at Charismatic Evangelistic Ministry (CEM) East Legon, pre-marital vetting, and speaking requests. |
| `/partnerships` | `PartnershipsPage` | Six collaboration models and structured partnership brief submission. |
| `/insights` | `InsightsPage` | Searchable archive of essays, treatises, and capacity quotes with full reading modal. |
| `/contact` | `ContactPage` | Executive desk contact form, Direct Pay strip (MTN MoMo & OmniBSIC bank coordinates), Richson Creatives studio line (`0530554498`), and official social links (including X). |
| `/login`, `/register`, `/forgot-password`, `/reset-password` | `AuthPages` | Transparent standalone migration notices explaining how to attach an external identity provider without legacy Base44 lock-in. |

Canonical redirects preserved: `/publishing-services` → `/library-store#publishing`, `/leadership` → `/about#affiliations`, `/creatives/portfolio` & `/agency-portfolio` → `/creatives#work`, `/blog-nuggets` → `/insights`.

---

## Brand Separation & Attribution

- **Richson Global** — Parent ecosystem and institutional architecture.
- **Richson Creatives** — Creative & technology services company (`0530554498` / `info@richsoncreatives.com`). All client book cover design, interior formatting, and publishing services belong strictly under **Richson Creatives**. Website design & engineering attribution is displayed in the site footer with direct links and phone number.
- **Personal Authorship** — Eric Richson Darko's 18 published books, kept distinct from Richson Creatives client production.
- **Wisefold Network** — Disciplined reading community and intellectual development network.
- **Ministry** — Youth pastoral leadership at CEM East Legon and relational guidance.
- **Emerging Ventures & Initiatives** — Open framework for strategic partnerships.
- **No "Richson Press"**: Zero references exist anywhere in the codebase.

---

## SEO & Discoverability

- `public/sitemap.xml` — Complete XML sitemap of all public routes.
- `public/robots.txt` — Search crawler rules referencing `sitemap.xml`.
- `public/site.webmanifest` — Web application manifest using the official logo mark.
- `index.html` & `src/components/SeoHead.tsx` — Per-route dynamic `<title>`, `<meta name="description">`, OpenGraph, Twitter/X cards, canonical URLs, and Schema.org JSON-LD (`Organization`, `Person`, `WebSite`).

---

## Migration Report & Backend Architecture

### Migrated Completely (Zero Base44 Dependency)
- All pages, navigation, interactive 5-expression front-page portrait, search & category filters, book detail modals, essay reader modals, client platform screenshot lightbox, and persistent bottom-left **Enquire With Us** quick-routing drawer.
- All 50+ media assets (book covers, client books, portraits, venture emblems, official logo, and client website front-page screenshots) are self-hosted in `public/assets/`.

### Replaced / Externalised Backend Services
1. **Form Email Delivery (`/api/inquire` Cloudflare Pages Function)**:
   - Located in `functions/api/inquire.ts`.
   - Set `RESEND_API_KEY` (and optional `CONTACT_RECIPIENT_EMAIL`, `CREATIVES_RECIPIENT_EMAIL`, `SENDER_EMAIL`) in **Cloudflare Pages → Settings → Environment variables** to activate server-side email delivery without exposing secrets to the browser.
   - Alternatively, set `VITE_FORM_ENDPOINT` to a Formspree or custom Worker URL.
   - When no server email key is configured, forms transparently state this and generate pre-filled one-click **Email** (`mailto:`) and **WhatsApp** dispatch buttons instead of fabricating a fake success.
2. **Book Checkout & Payments**:
   - Handled through external **Selar** checkout (`selar.com/m/richsonericdarko`), direct **MTN Mobile Money** (`0548685856`), bank transfer, and **WhatsApp** verification — no payment credentials or fabricated card gateways exist in the frontend.
3. **Client / Member Authentication (`/login`, `/register`)**:
   - Legacy Base44 auth was removed. To enable private client portals in the future, connect **Cloudflare Access**, **Auth0**, or **Firebase Authentication** and wire the login views in `src/pages/AuthPages.tsx`.

---

## Cloudflare Pages Deployment

```bash
npm install
npm run build
```

1. Connect the GitHub repository in **Cloudflare Dashboard → Workers & Pages → Create → Pages**.
2. Configure:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Cloudflare Pages automatically applies:
   - `public/_redirects` (`/* /index.html 200`) so refreshing nested routes never returns a 404.
   - `public/_headers` for security headers and immutable `/assets/*` caching.
   - `functions/api/inquire.ts` as the live `/api/inquire` serverless endpoint.

---

Designed & Engineered by **Richson Creatives** (`0530554498` · `info@richsoncreatives.com`).
