// Network-only: never cache customer records, photos, credentials or old app code.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { if (event.request.mode === 'navigate' && new URL(event.request.url).origin === self.location.origin) { event.respondWith(fetch(event.request).catch(() => new Response('AI Client Memory needs an internet connection. Please reconnect and reload.', {headers:{'Content-Type':'text/plain; charset=utf-8'}}))); } });
