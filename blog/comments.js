// Giscus comments loader — comments live as GitHub Discussions on this repo.
//
// One-time setup (do once, then comments work on every post):
//   1. Repo Settings → General → Features → check "Discussions".
//   2. Install the giscus app on the repo: https://github.com/apps/giscus
//   3. Visit https://giscus.app, enter jaendres/jaendres.github.io, pick the
//      "Announcements" category, and copy the data-category-id it generates
//      into CATEGORY_ID below.
//
// Until CATEGORY_ID is filled in, posts show a "comments coming soon" note
// instead of a broken widget.

(function () {
  const REPO = 'jaendres/jaendres.github.io';
  const REPO_ID = 'R_kgDOS6rw6w';
  const CATEGORY = 'Announcements';
  const CATEGORY_ID = ''; // TODO: paste from giscus.app after enabling Discussions

  const container = document.getElementById('comments-container');
  if (!container) return;

  if (!CATEGORY_ID) {
    const note = document.createElement('div');
    note.className = 'comments-pending';
    note.textContent = 'Comments are coming soon — check back shortly.';
    container.appendChild(note);
    return;
  }

  const s = document.createElement('script');
  s.src = 'https://giscus.app/client.js';
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-repo', REPO);
  s.setAttribute('data-repo-id', REPO_ID);
  s.setAttribute('data-category', CATEGORY);
  s.setAttribute('data-category-id', CATEGORY_ID);
  s.setAttribute('data-mapping', 'pathname'); // one discussion per post URL
  s.setAttribute('data-strict', '0');
  s.setAttribute('data-reactions-enabled', '1');
  s.setAttribute('data-emit-metadata', '0');
  s.setAttribute('data-input-position', 'top');
  s.setAttribute('data-theme', 'transparent_dark');
  s.setAttribute('data-lang', 'en');
  s.setAttribute('data-loading', 'lazy');
  container.appendChild(s);
})();
