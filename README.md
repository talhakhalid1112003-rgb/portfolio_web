# Portfolio — Personal React + Vite Website

This repository is a personal portfolio website built with React and Vite. It showcases projects, skills, and contact information using a clean, responsive design powered by Tailwind CSS.

## Quick Summary

- Framework: React + Vite
- Styling: Tailwind CSS
- Purpose: Personal portfolio to showcase projects, skills, and contact information

## Project Highlights (what's implemented in this repo)

- Responsive layout and mobile-first design
- `Navbar` with navigation links
- `Hero` section with introduction and CTA
- `About` section describing background
- `Feature` and `projectSection` showcasing work and projects
- `projectCard` for individual project entries
- `skillSection` and `skillCard` to list skills
- `Contact` page/component with messaging/email links
- Small UI components: `Icon`, `GlowingBlob`, `message`, `get` helper
- Images stored under `src/assets/` and `src/Component/Images/`

## Tech Stack

- React (JSX)
- Vite (dev server + bundler)
- Tailwind CSS
- ESLint
- Node.js / npm

## Repo Structure

- `index.html` — App entry
- `package.json` — scripts & dependencies
- `vite.config.js` — Vite config
- `tailwind.config.js` — Tailwind config
- `src/`
  - `main.jsx` — app bootstrap
  - `App.jsx` — root component
  - `App.css`, `index.css` — global styles
  - `Component/` — UI components
  - `assets/` — images and static assets

## Run Locally

Install and start development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## How to Update Content

- Projects: edit or add items in `src/Component/projectSection.jsx` and `src/Component/projectCard.jsx`.
- Skills: update `src/Component/skillSection.jsx` and `src/Component/skillCard.jsx`.
- Images: put images in `src/assets/` or `src/Component/Images/` and update imports.
- Contact details: update `src/Component/Contact.jsx`.

## Accessibility & Best Practices

- Use semantic HTML and meaningful `alt` attributes for images.
- Ensure focusable elements have visible focus styles (Tailwind focus utilities are available).
- Keep components small and reusable.

## Deployment

Recommended: Vercel or Netlify. Configure the platform to run `npm run build` and serve the `dist/` folder.

## Screenshots

Add screenshots to `src/assets/` and reference them here to present the site in README.

## Customize for Yourself

Replace placeholder text, images, and links with your personal information. Add social/profile links in the `Navbar` or `Contact` component.

## License & Contact

All rights reserved. Add an `LICENSE` file if you want an open-source license.

Contact: update the `Contact` section with your email and profile links.

---

Updated: README tailored specifically to this portfolio project.
