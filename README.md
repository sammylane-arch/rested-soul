# Rested Soul — Website

A clean, mobile-first homepage for Rested Soul massage therapy, built with **Vite + React (TypeScript)**.

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Type-check and build for production → `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Placeholder content to replace

Search for `[` in the source files to find all placeholder values:

| Placeholder | Location | Notes |
|---|---|---|
| `[X] years of experience` | `About.tsx` | Steph's years of experience |
| `[training institution]` | `About.tsx` | Where Steph trained |
| `[qualification level]` | `About.tsx` | e.g. BTEC Level 5 Diploma |
| `[Year]` | `About.tsx` | Year qualified |
| `[e.g. BTEC Level 5 / ITEC Diploma]` | `About.tsx` | Formal qualification name |
| `[e.g. Federation of Holistic Therapists]` | `About.tsx` | Professional body |
| `[Town / Area], [County]` | `Footer.tsx` | Business location |
| `[Postcode area]` | `Footer.tsx` | Postcode for general area |
| `[07XXX XXX XXX]` | `Booking.tsx` | Phone number |
| `tel:[PHONE]` | `Booking.tsx` | href for phone link |
| `[hello@restedsoul.co.uk]` | `Booking.tsx` | Email address |
| `mailto:[EMAIL]` | `Booking.tsx` | href for email link |
| `[00:00 – 00:00]` | `Booking.tsx` | Opening hours |

---

## Adding Acuity Scheduling

In `src/components/Booking.tsx`, replace the `.booking__embed-placeholder` div with the embed code from your Acuity account:

1. Log in to Acuity Scheduling
2. Go to **Business Settings → Scheduling Page**
3. Copy the embed code snippet
4. Replace the placeholder block in `Booking.tsx`

---

## Deployment — AWS Amplify Hosting

The included `amplify.yml` configures the build pipeline automatically.

**Steps:**

1. Push this repository to GitHub (or GitLab / Bitbucket / CodeCommit)
2. Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click **Deploy an app** → connect your repository
4. Amplify will detect `amplify.yml` automatically
5. Click **Save and deploy**

The build output directory is `dist` (Vite default).

**Custom domain:**

After deploying, go to **App settings → Domain management** in Amplify to connect a custom domain.

---

## Project Structure

```
rested-soul/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx / Header.css
│   │   ├── Hero.tsx / Hero.css
│   │   ├── Treatments.tsx / Treatments.css
│   │   ├── About.tsx / About.css
│   │   ├── Booking.tsx / Booking.css
│   │   └── Footer.tsx / Footer.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── amplify.yml
└── README.md
```

---

## Design Tokens (CSS Custom Properties)

Defined in `src/index.css`:

| Variable | Value | Usage |
|---|---|---|
| `--cream` | `#FDFAF6` | Page background |
| `--beige` | `#F0E9DC` | Card backgrounds |
| `--taupe` | `#C4B5A5` | Borders, dividers |
| `--sage` | `#7A9E7E` | Accent, CTA buttons |
| `--ink` | `#3D3530` | Headings |
| `--muted` | `#6B5E57` | Body text |
| `--faint` | `#9A8B84` | Labels, captions |
