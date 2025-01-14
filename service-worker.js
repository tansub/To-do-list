const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/To-do-list/',
    '/To-do-list/index.html',
    '/To-do-list/style.css',
    '/To-do-list/app.js',
    '/To-do-list/manifest.json',
    '/To-do-list/icons/icon-128.png',
    '/To-do-list/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});