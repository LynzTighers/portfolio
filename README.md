# Valorant Portfolio

Personal developer portfolio styled like a tactical-shooter game menu. Built with React and Vite, no UI library.

| Game screen | Portfolio section |
| --- | --- |
| Match found | Intro splash (first visit per session, skippable) |
| Play | Hero: name, role, call to action |
| Agent dossier + abilities (C/Q/E/X) | About me and four core strengths |
| Arsenal | Skills, with proficiency/usage stat bars |
| Match history | Projects, expandable for details and links |
| Party invite | Contact |

## Run it

```bash
npm install
npm run dev
```

Opens on http://localhost:5174. `npm run build` outputs a static site to `dist/`, which deploys to Vercel or GitHub Pages as-is.

## Editing content

All text, skills and projects live in [`src/data/profile.js`](src/data/profile.js). Components only read from it, so you never need to touch JSX to update the site. Lines marked `TODO` are placeholders.

Styling is one file, [`src/styles.css`](src/styles.css); colors and fonts are tokens at the top.

## Notes

Fan-styled, not affiliated with Riot Games. It uses no Riot logos, art, fonts or audio: the look comes from original CSS shapes and Google Fonts (Anton, Barlow, Barlow Condensed).
