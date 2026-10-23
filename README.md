# Atri Dasgupta — Engineering Portfolio

Single-page, responsive portfolio using Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. No analytics, tracking scripts, remote fonts, or third-party UI runtime.

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended), npm, Git
- Optional: GitHub CLI (`gh`) and Vercel CLI (`vercel`)

## Start locally (PowerShell, Windows)
```powershell
cd atri-engineering-portfolio
npm install
Copy-Item .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Verify
```powershell
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```
`npm audit` findings must be reviewed, not blindly auto-fixed across majors. Run `npm update` and test before deployment.

## Push to GitHub
```powershell
git init
git add .
git commit -m "Build Atri engineering portfolio"
git branch -M main
gh auth login
gh repo create atri-engineering-portfolio --public --source=. --remote=origin --push
```
Alternative without `gh`: create an empty repository in GitHub, then:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/atri-engineering-portfolio.git
git push -u origin main
```

## Vercel — Git-connected continuous deployment
1. At https://vercel.com/new, connect GitHub and import `atri-engineering-portfolio`.
2. Set Framework Preset = Next.js and Root Directory = `.`.
3. Set `NEXT_PUBLIC_SITE_URL` to the intended canonical HTTPS URL (update it again when adding a custom domain).
4. Deploy. Confirm live HTML, navigation, interactive skills, contact links, and response headers.
5. Every push to `main` will trigger a production build; pull requests/other branches get previews.

Alternatively via CLI (after GitHub repository is created):
```powershell
npm install -g vercel
vercel login
vercel link
vercel git connect
vercel deploy
vercel deploy --prod
```
Avoid deploying with `--prod` until a preview has passed checks.

## Verify headers (PowerShell)
```powershell
curl.exe -I https://YOUR-DEPLOYMENT-URL
```
Look for `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## Security implementation
- `next.config.js`: restrictive baseline CSP and supporting security headers.
- `proxy.ts`: new random nonce and nonce-based script CSP per HTML request, compatible with Next.js hydration. Next.js 16 requires `proxy.ts` (rather than `middleware.ts`).
- Style CSP allows inline CSS for framework compatibility; production JavaScript CSP does not permit `unsafe-inline` or `unsafe-eval`.
- Contact data is decoded client-side only on explicit user action. This deters basic HTML/email harvesters, but **is not cryptographic protection**. Sophisticated bots can inspect the shipped JS. For stronger privacy, replace direct contact details with a server-side, rate-limited contact form or third-party protected alias.
- No third-party domains, cookies, analytics, or backend secrets are needed.
- Do not commit `.env.local` or `.vercel/`.
- Next.js nonce CSP means pages must be dynamically rendered; expect higher per-request rendering cost compared to full static caching.

## Edit content
- Projects, links, skills and achievements: `lib/data.ts`
- Main layout: `app/page.tsx`
- Colors, grids, responsive design: `app/globals.css`
- Contact values: `components/contact-link.tsx` (encoded; keep real details out of server markup)

## Accuracy notes
The project descriptions, competition results, dates and metrics are based on Atri Dasgupta's submitted CV. Ongoing projects are not described as completed. No internships, employers, endorsements, or downloadable CV file are invented.

## Post-deployment checks
- Update `NEXT_PUBLIC_SITE_URL` in Vercel project settings and redeploy.
- Test mobile navigation, keyboard operation, reduced motion, and each external link.
- Run Chrome Lighthouse (Performance, Accessibility, Best Practices, SEO). No score is guaranteed; verify the actual deployment.
- Keep npm dependencies updated and enable GitHub Dependabot/security alerts.

## Portfolio update (October 2026)

- Added an optimized Next.js hero portrait at `public/images/atri-portrait.png` and a trajectory-evaluation figure at `public/images/trajectory-prediction.png`.
- Added a light/dark appearance toggle in the top navigation. Preference is saved in the browser, while new visitors default to their operating-system appearance setting.
- Updated the hero heading to emphasize Atri Dasgupta's name and placed “Engineering intelligent systems” underneath.
- Expanded programming, AI/computer vision, robotics, and systems skills, including Python, PyTorch, and OpenCV at the portfolio owner's request. Confirm practical proficiency before publishing.
- Expanded competition and research descriptions using only claims supported by the supplied CV. Research remains clearly labelled in progress.
- Removed references to transformer-based motion forecasting, as requested.

**Note:** The featured trajectory chart reports one sample's ADE/FDE; the three project metrics report the wider evaluation. These are intentionally shown separately.
