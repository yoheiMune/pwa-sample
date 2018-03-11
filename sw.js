
const version = 1
console.log('version:', version)

const CACHE_NAME = 'my-site-cache-v' + version
const urlsToCache = [
    '/',
    'app.css',
    'app.js',
    'image.jpg'
]

self.addEventListener('install', event => {
    console.log('install:', event)
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', event => {
    console.log('fetch:', event)
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})

self.addEventListener('activate', event => {
    console.log('activate:', event)
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})
