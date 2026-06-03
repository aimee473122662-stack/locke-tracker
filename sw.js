self.addEventListener('install', e => {
  e.waitUntil(caches.open('locke-v1').then(c => c.addAll(['/locke-tracker/'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
