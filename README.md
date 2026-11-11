# Eric Richson Darko: Executive & Creative Archive

A refined, high-performance digital ecosystem for executive consulting, creative agency operations, publishing, and ministry. Built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Key Features & Structure

- **All Base44 Signatures Removed**: Fully independent, self-hosted, without any third-party tracking, connectors, or proprietary SDKs.
- **Local Asset Hosting**: All book covers, portraits, and brand assets are served from `/public/assets/media/` for 100% offline and standalone reliability.
- **Ecosystem Pillars**:
  1. **Richson Creatives (`/creatives`)**: Bespoke dark luxury agency portal with selected case studies, services, 5-step process, client books, and interactive brief submission.
  2. **Personal Authorship (`/library-store`)**: Complete 18-book catalog (15 solo, 3 co-authored) with category filtering, search, and direct Mobile Money (`0548685856`), Selar, and WhatsApp purchase workflows.
  3. **Wisefold Network (`/ecosystem#wisefold`)**: Disciplined reading community, founded July 10, 2024.
  4. **Pastoral Ministry (`/ministry`)**: Youth leadership development, CEM East Legon archive, and relational covenant counseling.
  5. **Emerging Ventures & Partnerships (`/partnerships`)**: Open strategic collaboration framework.
- **Insights & Blog Nuggets (`/insights`)**: Over 180 curated essays and capacity quotes with full in-depth reading modals.
- **Executive Profile (`/about`)**: Full founder narrative, leadership affiliations, academic degrees, and credentials.
- **Direct Communication (`/contact`)**: Instant inquiries, MoMo coordinates, OmniBSIC bank details, and fast-track WhatsApp routing.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7 (`react-router-dom`)
- **Icons**: Lucide React
- **Typography**: Playfair Display + Inter

---

## 📦 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:3000` (or `http://localhost:5173`).

---

## 🌐 Deploy to Cloudflare Pages

### Option 1: Direct GitHub Integration (Recommended)
1. Push this repository to GitHub.
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your GitHub repository.
4. Set the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare automatically uses `public/_redirects` to handle client-side routing and `public/_headers` for performance headers.

### Option 2: Cloudflare Wrangler CLI
```bash
# 1. Build the production files
npm run build

# 2. Deploy using Wrangler
npx wrangler pages deploy dist --project-name richson-global
```

---

## 🐙 Deploy to GitHub Pages

1. Push your repository to GitHub.
2. Go to **Settings** → **Pages** → **Source**: GitHub Actions.
3. The included `.github/workflows/deploy.yml` workflow will automatically test and build your project on push to `main`.

---

## 📁 Directory Structure

```text
├── public/
│   ├── _headers            # Cloudflare security and caching headers
│   ├── _redirects          # Cloudflare SPA routing rules
│   └── assets/media/       # Self-hosted high-resolution portraits & book covers
├── src/
│   ├── components/         # Header, Footer, Marquee, BookModal, InsightModal
│   ├── data/               # Books, Insights, Ecosystem, and Company coordinates
│   ├── pages/              # Home, About, Ecosystem, Approach, Creatives, Library, etc.
│   ├── App.tsx             # Route definitions and layouts
│   ├── index.css           # Design tokens, gradients, and utility classes
│   └── main.tsx            # Entry point
├── wrangler.toml           # Cloudflare Pages / Workers deployment config
├── .github/workflows/      # Automated CI/CD deployment
├── package.json
└── vite.config.ts
```

---

## 📄 License & Attribution

Copyright © 2026 Eric Richson Darko. All rights reserved.
Developed for Richson Global.
