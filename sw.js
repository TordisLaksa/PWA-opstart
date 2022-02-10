let CACHE_NAME = "my-site-cache";

let urlsToCache = [
    './assets/css/main.css',
    './assets/css/info.css',
    './assets/images/silly-your-dog-drawings.jpg',
    './assets/images/Logo192.png',
    './assets/images/Logo256.png',
    './assets/images/Logo512.png',
    './index.html',
    './info.html'
];

//alle elementer til at skabe appen skal caches

//Cache, falling back to network

self.addEventListener('install', function (event) {
    //preform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)

            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }),
    );
});