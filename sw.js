// Chatly service worker: works fully offline, even if the site goes away.
// The app is served from the phone's saved copy. Fresh copies are saved
// only when the site answers with a proper (200 OK) response.
const CACHE = 'chatly-v2';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    // carry over files from older caches, then remove them
    const keys = await caches.keys();
    const cur = await caches.open(CACHE);
    for (const k of keys) if (k !== CACHE) {
      const old = await caches.open(k);
      for (const req of await old.keys()) {
        if (!(await cur.match(req))) { const r = await old.match(req); if (r && r.ok) await cur.put(req, r); }
      }
      await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

async function refresh(req) {
  try {
    const r = await fetch(req, { cache: 'no-store' });
    if (r && r.ok) { const c = await caches.open(CACHE); await c.put(req, r.clone()); }
    return r;
  } catch (e) { return null; }
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;
  e.respondWith((async () => {
    const isPage = req.mode === 'navigate';
    const cached = isPage
      ? (await caches.match('./index.html')) || (await caches.match('./'))
      : await caches.match(req, { ignoreSearch: true });
    if (cached) {
      // use the saved copy now; quietly update it in the background if the site is reachable
      e.waitUntil(refresh(isPage ? new Request('./index.html') : req));
      return cached;
    }
    const r = await refresh(req);
    if (r && r.ok) return r;
    // never show an error page: fall back to the app itself
    return (await caches.match('./index.html')) || r || new Response('', { status: 504 });
  })());
});
