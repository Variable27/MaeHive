# MaeHive

MaeHive is a modern static website for a Philippine-based virtual assistant agency connecting international businesses with skilled Filipino VAs.

Tagline: **Smart Filipino Support for Growing Businesses**

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router with `HashRouter`
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Forms

The site is static, so forms are prepared for Formspree or Web3Forms using Vite environment variables.

Copy `.env.example` to `.env` and add your endpoints:

```bash
VITE_HIRE_FORM_ENDPOINT=https://formspree.io/f/your-hire-form-id
VITE_VA_APPLICATION_FORM_ENDPOINT=https://formspree.io/f/your-va-application-form-id
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-contact-form-id
```

For GitHub Actions, add matching repository secrets:

- `VITE_HIRE_FORM_ENDPOINT`
- `VITE_VA_APPLICATION_FORM_ENDPOINT`
- `VITE_CONTACT_FORM_ENDPOINT`

Until those are configured, the live site clearly labels the forms as endpoint placeholders.

## GitHub Pages Deployment

The Vite base path is configured as `/MaeHive/` in `vite.config.ts` so assets load correctly from:

```text
https://variable27.github.io/MaeHive/
```

Routing uses `HashRouter`, so routes such as `#/services` and `#/hire-a-va` work on refresh without returning a GitHub Pages 404.

Deployment is handled by `.github/workflows/deploy.yml`:

1. Push to the `main` branch.
2. GitHub Actions installs dependencies with `npm ci`.
3. The site builds with `npm run build`.
4. The `dist` folder is uploaded and deployed to GitHub Pages.

The site also includes `public/404.html` as a fallback, plus `robots.txt`, `sitemap.xml`, Open Graph metadata, structured data, semantic HTML, image alt text, and accessible form labels.

## Future Custom Domain

When MaeHive has a custom domain, update:

- `base` in `vite.config.ts` if the site moves away from the `/MaeHive/` subpath.
- Open Graph and canonical URLs in `index.html` and `src/components/SEO.tsx`.
- `public/robots.txt` and `public/sitemap.xml`.
- Add `public/CNAME` with the final domain if GitHub Pages will serve the custom domain.
