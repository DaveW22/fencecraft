# FenceCraft Astro website

Responsive static Astro site for FenceCraft, built from the supplied Heritage Craft concept. The site is intentionally local-only and has not been deployed or connected to a live enquiry endpoint.

## Commands

```bash
npm install
npm run dev       # local preview
npm run check     # Astro/TypeScript checks
npm run build     # static production build in dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/layouts/BaseLayout.astro` owns document metadata, canonical URLs and shared chrome.
- `src/components/` contains the header, footer and demo-safe quote form.
- `src/data/services.ts` is the single source for service page content and static route generation.
- `src/pages/` contains public routes; Astro generates static HTML for every page.
- `public/assets/` contains the supplied mark and responsive WebP concept images.

## Before launch

- Replace every illustrative image with genuine, approved FenceCraft photography and case studies.
- Confirm business contact details, service areas, claims, privacy wording and canonical domain.
- Connect `QuoteForm.astro` to a real, secured enquiry endpoint and only show success after a confirmed response.
- Add verified structured business details if available; no address, opening hours, rating, guarantee or qualification has been invented here.
- Review `_redirects` with the actual hosting platform and configure `404.html` to return a real HTTP 404.
- Run a full accessibility, performance and keyboard audit at 320, 390, 768, 1024 and 1440px.

The current pages use `https://www.fence-craft.co.uk` as the production canonical placeholder while remaining suitable for local preview. Do not deploy until the owner has approved content and configuration.
