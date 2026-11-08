# Hereboy Studios website

The company website for Hereboy Studios, at [hereboy.co.za](https://hereboy.co.za).

It is a static site with no build step. Everything that gets published is in `docs/`.

| Path | What it is |
|---|---|
| `docs/index.html` | Home page: games, about us, contact |
| `docs/privacy.html` | Privacy policy |
| `docs/styles.css` | All styling |
| `docs/assets/img`, `docs/assets/video` | Logo and footage captured from the games |
| `docs/CNAME` | Custom domain for GitHub Pages |
| `HOSTING.md` | How to put the site live on the domain |

## Preview locally

```bash
python3 -m http.server 8000 --directory docs
```

Then open http://localhost:8000.

## When a game launches

In `docs/index.html`, replace the "Coming soon" boxes in that game's `.stores` list with links to its store pages. Add a privacy policy for each game before submitting it, as both stores ask for one.

## Credits

Headings use [Silkscreen](https://github.com/googlefonts/silkscreen) under the SIL Open Font License (`docs/assets/fonts/OFL.txt`).
