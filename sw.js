/* CasMedical — service worker del inicio.
   Guarda solo la pantalla de inicio y los íconos para que abra al instante.
   Las apps de Google (script.google.com) nunca se guardan: siempre se leen en vivo.
   Al publicar cambios en index.html, suba VERSION para que todos reciban la nueva. */
var VERSION = 'casmedical-v2';
var BASE = ['./', 'index.html', 'manifest.webmanifest', 'iconos/logo-horizontal.png', 'iconos/icono-192.png',
            'iconos/icono-512.png', 'iconos/apple-touch-icon.png', 'iconos/favicon-32.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(BASE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Muestra lo guardado de inmediato y lo actualiza por detrás. */
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (guardado) {
      var red = fetch(e.request).then(function (r) { if (r && r.ok) c.put(e.request, r.clone()); return r; })
        .catch(function () { return guardado; });
      return guardado || red;
    });
  }));
});
