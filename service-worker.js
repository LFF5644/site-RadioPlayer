const cacheName="p-RadioPlayer_v1";
const cacheFiles=[
	// For this Programm needed Cache
	"/RadioPlayer",
	"/p/RadioPlayer/manifest.json",
	"/p/RadioPlayer/radioSender.txt",
	// Images
	"/files/img/icon/RadioPlayer/radio16.png",
	"/files/img/icon/RadioPlayer/radio32.png",
	"/files/img/icon/RadioPlayer/radio64.png",
	"/files/img/icon/RadioPlayer/radio.png",
	"/files/img/icon/RadioPlayer/radio144.png",

	// Global Cache
	"/scripts/import.js",
	"/css/main.css",
	"/css/main.dark.css",
	"/favicon.ico",
	"/favicon.png",
];

self.addEventListener("install",async event=>{
	const cache=await caches.open(cacheName);
	cache.addAll(cacheFiles);
});

self.addEventListener("fetch",async event=>{
	const cache=await caches.open(cacheName);
	const response=await cache.match(event.request);
	if(response){
		console.log("load cache: "+event.request.url);
		return response;
	}else{
		console.log("download: "+event.request.url)
		return fetch(event.request);
	}
});
