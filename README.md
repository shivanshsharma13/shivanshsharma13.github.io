# shivanshsharma13.github.io

Personal portfolio website of **Shivansh Sharma** — backend engineer, open source contributor, and Kestra committer.

Live at → **[shivanshsharma13.github.io](https://shivanshsharma13.github.io)**

---

## What's inside

```
├── index.html     # Full portfolio site — zero dependencies, pure HTML/CSS/JS
├── data.json      # ← All content lives here. Edit this to update the site.
└── base.mp4       # Background video (seamless crossfade loop)
```

No build step. No framework. No `npm install`. Open `index.html` in a browser and it works.

---

## Updating content

Everything visible on the site — name, bio, jobs, projects, skills, contact links — is driven by `data.json`. The HTML never needs to change.

| Section | Key in `data.json` |
|---|---|
| Name, bio, tagline | `meta` |
| Hero badges & buttons | `hero` |
| Work experience | `experience[]` |
| Projects | `projects[]` |
| Kestra OSS PRs | `oss.prs[]` |
| Blog posts / talks | `sharing[]` |
| Education | `education[]` |
| Skills & stack | `skills[]` |
| Contact links | `contact.links[]` |

### Example — adding a new project

```json
{
  "num": "06",
  "name": "My New Project",
  "description": "What it does and what makes it interesting.",
  "url": "https://github.com/shivanshsharma13/project",
  "linkLabel": "GitHub →"
}
```

Add it to the `projects` array in `data.json`, push, done.

---

## OSS Contributions — Kestra

| PR | Description | Status |
|---|---|---|
| [#5689](https://github.com/kestra-io/kestra/pull/5689) | UI fix | ✅ Merged · v1.3.0 |
| [#5697](https://github.com/kestra-io/kestra/pull/5697) | UI fix | ✅ Merged · v1.3.2 |
| [#14259](https://github.com/kestra-io/kestra/pull/14259) | Backend: HasUID constraint fix | ✅ Merged |
| [#15632](https://github.com/kestra-io/kestra/pull/15632) | AbstractJdbcCrudRepository: delete/purge support | ⏳ In Review |

---

## Tech

- **No framework** — vanilla HTML, CSS, JS
- **Fonts** — Playfair Display + DM Mono via Google Fonts
- **Video loop** — dual `<video>` crossfade via `setInterval` — no visible jump at loop point
- **Scroll reveal** — `IntersectionObserver` API
- **Hosted** — GitHub Pages (static, free, zero config)

---

## Running locally

```bash
# Clone
git clone https://github.com/shivanshsharma13/shivanshsharma13.github.io.git
cd shivanshsharma13.github.io

# Serve (required — fetch('data.json') won't work over file://)
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

> **Note:** Double-clicking `index.html` directly won't work because `fetch('data.json')` requires an HTTP server. Use `npx serve` or Python's http.server.

---

## Deploying changes

```bash
git add data.json
git commit -m "update: add new project / skill / experience"
git push
```

GitHub Pages auto-deploys on every push to `main`. Changes are live in ~60 seconds.

---

## Contact

- **Email** — shivansh.sharma13@yahoo.com
- **GitHub** — [@shivanshsharma13](https://github.com/shivanshsharma13)
- **Location** — Bhopal, India · Open to remote worldwide
