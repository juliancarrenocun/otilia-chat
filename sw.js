self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("otilia-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/otilia-512.png",
        "/assets/apple-touch-icon.png",
        "/assets/favicon.ico",
        "/assets/favicon-32.ico",
        "/assets/favicon-96x96.png",
        "/assets/site.webmanifest"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
