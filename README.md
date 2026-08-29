# SureLM Landing Site

Marketing/landing site for SureLM — the AI copilot for insurance advisors. Built with static HTML and [Tailwind CSS](https://tailwindcss.com), deployed on Netlify.

## Pages

- `index.html` — Home (hero + advisor/institution sections)
- `advisor.html` — For insurance advisors
- `institutions.html` — For banks & insurers
- `trial-form.html` — Hindi "Try SureLM" trial signup form (standalone)
- `trial-thank-you.html` — Success page shown after a trial submission
- `privacy.html`, `terms.html` — Legal stubs

## How the trial form works

`trial-form.html` has a static form that `POST`s to `trial-quokka.php`, which emails the submission to `contact@surelm.com` and redirects the visitor to `trial-thank-you.html`. A failed send redirects back to `trial-form.html` with `?error=email_failed`.

Every "Try SureLM" CTA button on the site points to `trial-form.html`. The footer "Join SureLM" link points to the separate team-member application at `apply.surelm.com`.

> The trial form is intentionally static (no front-end JS/API logic). The PHP handler is server-side and runs on the Netlify deployment.

## Development

Install dependencies and start the Tailwind watcher:

```bash
npm install
npm run watch
```

Build the production CSS once:

```bash
npm run build
```

The compiled stylesheet is written to `assets/css/site.css` and referenced by all pages.

## Design tokens

- CTA / primary dark: `#1D1D1F`
- Primary: `#004e9f`
- Primary fixed: `#d7e3ff`
- Surface: `#f9f9fb`
- Outline variant: `#c1c6d5`
- Cards: `rounded-3xl` with shadow `0 20px 60px -15px rgba(0,0,0,0.12)`
- Inputs: `rounded-2xl`; pills: `rounded-full`
- Fonts: Inter + Noto Sans Devanagari
- Custom token utilities are defined in `tailwind.config.js` (e.g. `max-w-container-max`, `mb-section-gap`, `px-margin-mobile`).

## Deployment

Deploys via Netlify using `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `.` (the whole repo, so every page including `trial-form.html` is served)

Push to `main` to trigger a production deploy.
