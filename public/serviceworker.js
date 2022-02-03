const CACHE_NAME= 'version-1';
const urlsToCache=['index.html','offline.html']

const self=this;


// install service worker
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("opened cache")
            return cache.addAll(urlsToCache)
        })
    )

});



//listen to events
self.addEventListener('fetch',(event)=>{
    
});




//activate service worker
self.addEventListener('activate',(event)=>{
    
});

