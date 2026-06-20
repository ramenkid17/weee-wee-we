# LinguaVerse Academy

LinguaVerse Academy is a static, browser-playable language-learning RPG demo. It runs from plain HTML, CSS, and JavaScript, so you can host it on GitHub Pages or any static website host.

## Play locally

```bash
npm start
```

Then open <http://localhost:4173> in your browser.

## Publish as a website with GitHub Pages

1. Push this branch to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow, `.github/workflows/pages.yml`, deploys the game automatically after pushes to `work` or `main`.
6. After the workflow finishes, open the Pages URL shown in the workflow summary.

## Publish on any static host

Upload these files and folders to your host's public web root:

- `index.html`
- `src/`
- `.nojekyll` if your host is GitHub Pages

No build step is required.

## Checks

```bash
npm test
```
