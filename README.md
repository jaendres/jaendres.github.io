# jasonendres.me

Personal site for **Jason Endres** — Software Development Director, IT leader, architect, and mentor.

🔗 Live at **[jasonendres.me](https://jasonendres.me)** · served via GitHub Pages from this repo.

## Stack

A single, dependency-free `index.html` — hand-written HTML + CSS with a touch of vanilla JS
(scroll-reveal + animated background). No build step, no framework. Fast and easy to tweak.

Fonts come from Google Fonts; everything else (icons, layout, animation) is inline.

## Editing

Just edit `index.html` and push to `main`. GitHub Pages redeploys automatically.

## Blog

Static blog under `blog/` — same no-build philosophy, hand-written HTML per post
sharing `blog/blog.css`.

**To write a new post:**

1. Copy `blog/_template.html` to `blog/posts/<slug>.html`
2. Replace the `POST_TITLE` / `POST_SUMMARY` / `POST_DATE` / `POST_SLUG` placeholders and write the content
3. Add a `.post-card` entry at the top of the list in `blog/index.html`
4. Commit and push

**Comments** are powered by [giscus](https://giscus.app) — each post gets a GitHub
Discussion on this repo, and readers comment by signing in with GitHub. One-time setup
(until then posts show a "comments coming soon" note):

1. Repo **Settings → General → Features →** enable **Discussions**
2. Install the giscus app on this repo: https://github.com/apps/giscus
3. Go to https://giscus.app, enter `jaendres/jaendres.github.io`, choose the
   **Announcements** category, and copy the generated `data-category-id` into
   `CATEGORY_ID` in `blog/comments.js`

## Local preview

Open `index.html` directly in a browser, or run a tiny static server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Custom domain

The `CNAME` file points GitHub Pages at `jasonendres.me`. DNS for the apex domain
must point at GitHub's Pages IPs (A/AAAA records) — see the deploy notes in the repo.

## Links

- LinkedIn — https://www.linkedin.com/in/jason-endres-96210b40/
- GitHub — https://github.com/jaendres
