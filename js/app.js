document.addEventListener('DOMContentLoaded', () => {
    // // Delete all caches
    // if ('caches' in window) {
    //     caches.keys().then(keys => {
    //         keys.forEach(key => {
    //             caches.delete(key);
    //         });
    //     });
    // }
    // // Delete all cookies
    // document.cookie.split(';').forEach(c => {
    //     document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    // });
})