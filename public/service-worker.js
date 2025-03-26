const CACHE_DYNAMIC_NAME = 'anime-cache'; // Nombre del caché dinámico

self.addEventListener('install', event => {
    console.log('Service Worker instalado');
});


self.addEventListener('fetch', event => {
    // Redirige a la lógica de caché con red
    if (event.request.url.startsWith('chrome-extension://')) {
        return; // No hacer nada si la solicitud es de una extensión de Chrome
    }
    event.respondWith(handleFetch(event));
});

// Maneja las solicitudes con caché y red
async function handleFetch(event) {
    const request = event.request;
    // console.log(request);
    
    let response = await fetch(request)
        .then(res => {
            
            
            if (!res) {
                
                
                console.log('devolviendo cache');
                
                return caches.match(request);
            }
            caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                  


                    
                    cache.put(request, res); // Guarda la respuesta en caché
                    clearCache(CACHE_DYNAMIC_NAME, 50); // Limita la cantidad de elementos en la caché
                
               
            });
            return res.clone(); // Devolvemos la respuesta original
        })
        .catch(async () => {
            console.log('devolviendo de la cache');
            
            // Si la API no responde, intenta con la caché
            return caches.match(request);
        });

    return response;
}

// Limita la cantidad de elementos en la caché
function clearCache(cacheName, maxItems) {
    caches.open(cacheName)
        .then(cache => {
            cache.keys().then(keys => {
                if (keys.length > maxItems) {
                    cache.delete(keys[0]).then(() => {
                        clearCache(cacheName, maxItems); // Recursivo para limpiar los más antiguos
                    });
                }
            });
        });
}
