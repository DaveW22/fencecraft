# FenceCraft Astro website

Responsive Astro site for FenceCraft, built from the supplied Heritage Craft concept and deployed through GitHub Pages.

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
- `src/data/caseStudies.ts` is the approval gate for verified garden and park project stories.
- `src/pages/` contains public routes; Astro generates static HTML for every page.
- `public/assets/` contains the supplied mark and responsive WebP concept images.

## Launch configuration still required

- GitHub Pages is static and cannot process POST requests or set `X-Robots-Tag` response headers. Set the repository secret-backed build variable `PUBLIC_ENQUIRY_ENDPOINT` to an authorised HTTPS POST endpoint that validates and delivers enquiries, then set `PUBLIC_SITE_ENV=production` in the Pages workflow.
- Keep the enquiry endpoint credentials in the provider/server environment, never in this repository. Run an authorised test enquiry before relying on the online form.
- Confirm the provider, lawful basis, retention period and access arrangements for the privacy page with the business owner.
- Replace illustrative images only when genuine, approved FenceCraft photography is available. Add verified project details through `src/data/caseStudies.ts`; do not invent locations, outcomes, testimonials or endorsements.
- Confirm verified business details before expanding structured data. No address, opening hours, rating, guarantee or qualification has been invented here.
- GitHub Pages does not natively apply `public/_redirects` or server-side redirects. If the four legacy URL redirects must return HTTP 301, put the site behind a redirect-capable host/CDN, or configure those redirects at the domain/CDN layer.

Production canonicals and sitemap entries use `https://fence-craft.co.uk`. Builds without `PUBLIC_SITE_ENV=production` emit `noindex,follow` so previews stay excluded.
