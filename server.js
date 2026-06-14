// Minimal zero-dependency static file server for Azure App Service (Linux, Node 20).
// Serves index.html and static assets from this directory. Listens on the
// platform-provided PORT (App Service injects it), falling back to 8080 locally.
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const root = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  // Resolve safely inside root (block path traversal).
  const filePath = path.join(root, path.normalize(urlPath));
  if (!filePath.startsWith(root)) {
    return send(res, 403, { 'Content-Type': 'text/plain' }, 'Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Unknown path -> fall back to the landing page.
      return fs.readFile(path.join(root, 'index.html'), (e2, html) => {
        if (e2) return send(res, 404, { 'Content-Type': 'text/plain' }, 'Not found');
        send(res, 200, { 'Content-Type': MIME['.html'] }, html);
      });
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
    }, data);
  });
}).listen(port, () => console.log(`Static server listening on ${port}`));
