const cacheName = 'latestAnswers-v1';

// Cache our known resources during install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      './public/main.css',
      './answers/01_bilet.html',
      './answers/02_bilet.html',
      './answers/03_bilet.html',
      './answers/04_bilet.html',
      './answers/05_bilet.html',
      './answers/06_bilet.html',
      './answers/07_bilet.html',
      './answers/08_bilet.html',
      './answers/09_bilet.html',
      './answers/10_bilet.html',
      './answers/11_bilet.html',
      './answers/12_bilet.html',
      './answers/13_bilet.html',
      './answers/14_bilet.html',
      './answers/15_bilet.html',
      './answers/16_bilet.html',
      './answers/17_bilet.html',
      './answers/18_bilet.html',
      './answers/19_bilet.html',
      './answers/20_bilet.html',
      './answers/21_bilet.html',
      './answers/22_bilet.html',
      './answers/23_bilet.html',
      './answers/24_bilet.html',
      './answers/25_bilet.html',
      './answers/26_bilet.html',
      './answers/27_bilet.html',
      './answers/28_bilet.html',
      './answers/29_bilet.html',
      './answers/30_bilet.html',
      './answers/31_bilet.html',
      './answers/32_bilet.html',
      './answers/33_bilet.html',
      './answers/34_bilet.html'
    ]))
  );
});

// Cache any new resources as they are fetched
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
    .then(function(response) {
      if (response) {
        return response;
      }
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(cacheName)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        }
      );
    })
  );
});
