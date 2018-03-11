window.addEventListener('load', () => {
    const h2 = document.createElement('h2');
    h2.textContent = 'Good Night'
    document.querySelector('#app').appendChild(h2);
});

// chrome://inspect/#service-workers

// https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja

(async () => {
    if ('serviceWorker' in navigator) {
        console.log('ServiceWorker is enable.')

        try {
            const registration = await navigator.serviceWorker.register('sw.js')
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
        } catch (err) {
            console.log('ServiceWorker registration failed: ', err)
        }
    }
})()
