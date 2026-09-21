# Reusable Developer Portfolio

A Next.js portfolio with draggable desktop modals, project showcases, GitHub activity, certifications, experience, responsive mobile sections, and a working contact form.

This guide explains how to run the project locally, configure email, and deploy it to Vercel from scratch.

## 1. Prerequisites

Install:

- [Node.js](https://nodejs.org/) 20 or newer
- [Git](https://git-scm.com/)
- A GitHub account, if you want to deploy from a repository
- An SMTP email account for the contact form
- A [Vercel account](https://vercel.com/signup)

Check your Node and npm versions:

```bash
node --version
npm --version
```

## 2. Create and run the project locally

If you are starting a new portfolio from this template, use `degit` to download a clean copy without the template's Git history:

```bash
npx degit ratatatatcode/portfolio my-portfolio
cd my-portfolio
npm install
npm run dev
```

If you already have your own fork or repository, clone it instead:

```bash
git clone <your-repository-url>
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before deploying, run the checks used by the project:

```bash
npm run lint
npm run build
```

## 3. Customize the portfolio

The layout components usually do not need to be edited. Replace the values in these files:

| File | What to customize |
| --- | --- |
| `src/data/siteConfig.ts` | Name, role, biography, contact details, social links, document links, GitHub username, site URL, and SEO metadata |
| `src/data/experience.ts` | Education, employment, freelance work, and descriptions |
| `src/data/certifications.ts` | Certifications, issuers, dates, summaries, and detailed topics |
| `src/data/projects.ts` | Live, featured, and other projects |
| `src/data/challenges.ts` | Learning challenges and external links |
| `src/components/landing/Skills.tsx` | Skills and their matching icons |

Replace the matching assets under `public/`:

- `public/logo/` for profile and site images
- `public/projects/` for project videos
- `public/docs/` for the CV and resume
- `public/gamified/` for learning-challenge images
- `public/freelance/` for the freelance-services image

Keep asset paths synchronized with the corresponding values in the data files. Set `siteUrl` in `src/data/siteConfig.ts` to the final production origin without a trailing slash.

## 4. Configure the contact form locally

The contact form sends email through Nodemailer and an SMTP provider. The API route is at `src/app/api/contact/route.ts`.

Create a local `.env.local` file in the project root. Do not commit it:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SERVICE=
SMTP_MAIL=your-smtp-login@example.com
SMTP_PASSWORD=your-smtp-password-or-app-password
CONTACT_EMAIL=where-you-want-to-receive-messages@example.com
```

The route also accepts `SMTP_USER` instead of `SMTP_MAIL`. Use one of them, not both. `SMTP_SERVICE` is optional; leave it empty when your provider is configured with `SMTP_HOST` and `SMTP_PORT`.

### Gmail example

For Gmail or Google Workspace, use:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SERVICE=
SMTP_MAIL=your-address@gmail.com
SMTP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=your-address@gmail.com
```

The password should be a Google App Password, not your normal account password. App Passwords require two-step verification on the Google account. Other providers have different SMTP hosts, ports, and authentication requirements; use the provider's official SMTP settings.

Restart `npm run dev` after changing `.env.local`, then submit the form locally. Environment files are ignored by Git; only `.env.example` should be committed.

## 5. Put the project on GitHub

Create an empty repository on GitHub first. Do not add a README, `.gitignore`, or license if the project already contains those files. Then, from the project folder, initialize Git and push the project:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```

Refresh the GitHub repository page and confirm that your source files are visible. Never add `.env`, `.env.local`, SMTP passwords, or app passwords to GitHub. If a secret was committed, revoke it with the email provider and create a new one.

## 6. Deploy to Vercel

### Dashboard method

1. Sign in to [Vercel](https://vercel.com/).
2. Select **Add New → Project**.
3. Under **Import Git Repository**, choose the GitHub repository you just created.
4. Keep the detected Next.js framework and default build settings.
5. Before deploying, expand **Environment Variables**.
6. Add the variables from the table below.
7. Choose **Production** for the live site. Add them to **Preview** too if preview deployments should send email.
8. Click **Deploy**.

| Variable | Example value | Required |
| --- | --- | --- |
| `SMTP_HOST` | `smtp.gmail.com` | Yes |
| `SMTP_PORT` | `587` | Yes |
| `SMTP_SERVICE` | blank or provider service name | No |
| `SMTP_MAIL` | SMTP login email | Yes |
| `SMTP_PASSWORD` | SMTP password or app password | Yes |
| `CONTACT_EMAIL` | receiving email address | Yes |

Vercel stores these values outside the source code. Environment variables are scoped separately for Development, Preview, and Production, so make sure the scope matches the deployment you are testing.

### CLI method

After installing and signing in to the Vercel CLI:

```bash
npm install --global vercel
vercel login
vercel link
vercel env add SMTP_HOST production
vercel env add SMTP_PORT production
vercel env add SMTP_SERVICE production
vercel env add SMTP_MAIL production
vercel env add SMTP_PASSWORD production
vercel env add CONTACT_EMAIL production
vercel --prod
```

The CLI prompts for each value. Do not paste secrets into shell history or commit them to the repository. For a local copy of Vercel environment variables, use `vercel env pull .env.local` and keep that file private.

## 7. Redeploy after changing environment variables

Changing an environment variable in Vercel does not update an already-created deployment. After saving or changing a variable, trigger a new production deployment:

- Push a new commit, or
- Open **Deployments**, select the project deployment menu, and choose **Redeploy**.

Then test the form on the production URL, for example:

```text
https://your-domain.example/api/contact
```

Opening that URL in a browser sends a `GET` request. This route only accepts `POST`, so a `405 Method Not Allowed` response is expected. Test the form itself, or send a POST request with JSON:

```bash
curl -X POST https://your-domain.example/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","project":"Other","message":"Deployment test"}'
```

## 8. Contact-form security

The contact endpoint includes lightweight protections that do not require another service:

- A hidden honeypot field rejects simple automated submissions.
- The API enforces request and field-size limits.
- The API accepts JSON requests only and rejects malformed JSON.
- The endpoint allows up to five requests per client address per hour and returns `429` afterward.

The rate limiter is intentionally best-effort. Vercel Functions can run in multiple instances, so this in-memory limit is not a guaranteed global limit. It reduces casual spam now, but it is not a defense against a distributed or volumetric DDoS attack. Keep monitoring the Vercel function logs and SMTP provider usage.

## 9. Troubleshooting

### `405` on `GET /api/contact`

This is expected. The endpoint exports `POST`, not `GET`.

### `503` on `POST /api/contact`

The API route could not find one or more required production variables. Check:

1. The names match exactly: `SMTP_HOST`, `SMTP_PORT`, `SMTP_MAIL` or `SMTP_USER`, `SMTP_PASSWORD`, and `CONTACT_EMAIL`.
2. The variables are assigned to **Production**, not only Preview or Development.
3. The values were saved in the correct Vercel project.
4. The project was redeployed after saving them.

### `500` on `POST /api/contact`

The variables were found, but the SMTP provider rejected the connection or message. Check the provider's host and port, use an app password when required, confirm that SMTP access is enabled, and inspect the Vercel function logs for the underlying Nodemailer error.

### The email is not received

Check spam and confirm that `CONTACT_EMAIL` is the intended receiving address. The `from` address is the authenticated SMTP account and the visitor's address is used as `replyTo`, which is the safer SMTP configuration.

## 10. Custom domain

In Vercel, open the project and go to **Settings → Domains → Add**. Enter your domain and follow the DNS instructions Vercel provides. After the domain is active, update `siteUrl` in `src/data/siteConfig.ts` and deploy again so metadata, sitemap, and robots URLs use the production domain.

## 11. Add Cloudflare later for stronger protection

When the site receives more traffic or spam, Cloudflare can add edge-level filtering before requests reach Vercel. This is a later infrastructure step; the current contact form does not require Cloudflare to work.

1. Add the domain to [Cloudflare](https://dash.cloudflare.com/).
2. At your domain registrar, replace the domain's nameservers with the two Cloudflare nameservers provided for your zone.
3. In **Cloudflare -> DNS**, add the DNS records that Vercel shows in **Project -> Settings -> Domains**. Start with the proxy disabled while verifying the domain.
4. Confirm the domain works in Vercel, then enable the orange-cloud proxy for the web records in Cloudflare.
5. In **Cloudflare -> SSL/TLS**, use **Full (strict)** after Vercel has issued the domain certificate. Do not use Flexible SSL.
6. Add a Cloudflare WAF custom rule or rate-limit rule for `POST /api/contact`. Start with a conservative limit such as five requests per IP per hour and review false positives before tightening it.
7. If needed later, add Cloudflare Turnstile to the form and validate its token in `src/app/api/contact/route.ts` on the server. Never rely on the browser widget without server-side validation.

Cloudflare protects traffic sent through the proxied custom domain. The underlying Vercel deployment URL may still be reachable directly, so keep Vercel project access controlled and use any available Vercel firewall or deployment-protection features as an additional layer.

## Scripts

```bash
npm run dev       # local development
npm run lint      # lint the project
npm run build     # create a production build
npm run start     # serve the production build locally
```

## Component conventions

React component files and exported component names use PascalCase. Content belongs in `src/data`, while reusable presentation and behavior belong in `src/components`.

## Useful references

- [Vercel environment variables](https://vercel.com/docs/environment-variables)
- [Vercel deployments](https://vercel.com/docs/deployments)
- [Nodemailer SMTP usage](https://nodemailer.com/smtp)
