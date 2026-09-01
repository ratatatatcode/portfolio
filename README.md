# Reusable Developer Portfolio

A Next.js portfolio template with draggable desktop modals, project showcases, GitHub activity, certifications, experience, and responsive mobile sections.

## Quick start

```bash
npx degit ratatatatcode/portfolio my-portfolio
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize the portfolio

The layout components do not need to be edited for normal reuse. Replace the values in these files:

| File                                | What to customize                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `src/data/siteConfig.ts`            | Name, role, biography, contact details, social links, document links, GitHub username, site URL, and SEO metadata |
| `src/data/experience.ts`            | Education, employment, freelance work, and descriptions                                                           |
| `src/data/certifications.ts`        | Certifications, issuers, dates, summaries, and detailed topics                                                    |
| `src/data/projects.ts`              | Live, featured, and other projects                                                                                |
| `src/data/challenges.ts`            | Learning challenges and external links                                                                            |
| `src/components/landing/Skills.tsx` | Skills and their matching icons                                                                                   |

Replace the matching assets under `public/`:

- `public/logo/` for profile and site images
- `public/projects/` for project videos
- `public/docs/` for the CV and resume
- `public/gamified/` for learning-challenge images
- `public/freelance/` for the freelance-services image

Keep asset paths synchronized with the corresponding values in the data files.

## Site configuration

`src/data/siteConfig.ts` is the single source of truth for identity and site-wide settings. Its values automatically populate:

- Introduction and About sections
- Social links and contact information
- CV, resume, and certification links
- GitHub calendar and streak card
- Page metadata and social previews
- Structured data, sitemap, and robots configuration

Set `siteUrl` to the final production origin without a trailing slash.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Component conventions

React component files and exported component names use PascalCase. Content belongs in `src/data`, while reusable presentation and behavior belong in `src/components`.
