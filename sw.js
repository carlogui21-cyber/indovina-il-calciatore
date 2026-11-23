const V="calciatore-v1";
const FILES=["./","index.html","players.json","manifest.webmanifest","privacy.html","icons/icon-192.png","icons/icon-512.png",
"fonts/anton-latin-400-normal.woff2","fonts/anton-latin-ext-400-normal.woff2","fonts/barlow-latin-400-normal.woff2",
"fonts/barlow-latin-600-normal.woff2","fonts/barlow-latin-700-normal.woff2","fonts/barlow-latin-ext-400-normal.woff2","fonts/barlow-latin-ext-700-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok&&new URL(e.request.url).origin===location.origin){const c=res.clone();caches.open(V).then(x=>x.put(e.request,c))}
    return res;
  })).catch(()=>caches.match("index.html")));
});
