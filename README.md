# Mohammad Alim — Portfolio

A fast, recruiter-friendly portfolio built with React, Vite, and Tailwind CSS.

## Tech Stack
- Frontend: React + Vite + Tailwind CSS
- Animations: Framer Motion, Lottie (optional)
- Optional: React Router, EmailJS for contact form

## Getting Started (Windows cmd)

```cmd
:: 1) Install dependencies
npm install

:: 2) Start the dev server
npm run dev

:: 3) Build for production
npm run build

:: 4) Preview the production build
npm run preview
```

## Configure EmailJS (optional)
1. Create an account at EmailJS.
2. Create a service and email template.
3. Copy `.env.example` to `.env` and fill in:
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
4. Restart the dev server after editing `.env`.

## Replace placeholders
- `public/resume.pdf` → replace with your actual resume PDF
- Social links in `src/sections/Hero.jsx` and `src/sections/Contact.jsx`
- Project links and thumbnails in `src/data/projects.js`

## Deploy
- Netlify / Vercel: Connect repo and set build command `npm run build`, output dir `dist`.
- GitHub Pages (Static):
  - Build locally (`npm run build`), then deploy the `dist/` folder to the `gh-pages` branch or use an action.

## License
MIT
