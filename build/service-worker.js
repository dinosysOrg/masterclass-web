"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b1e54b0eb48b4724fb7341bec3abc145"],["/static/css/main.196dcfc9.css","f310678373a0a8b5260bb4bce553d82d"],["/static/js/main.f32667a3.js","72ef4c2fdf8a81736e1d7a510e3a3397"],["/static/media/Montserrat-Black.5b96c72b.woff2","5b96c72b9499318c8214fb8106ad16b1"],["/static/media/Montserrat-Black.a513dea8.woff","a513dea829e306bca089336963df9da0"],["/static/media/Montserrat-Black.e33782d8.ttf","e33782d8c7826b44e0595acf539c09a3"],["/static/media/Montserrat-Black.fe6198b7.eot","fe6198b7b1115948c1a4ad8fa1ab94b7"],["/static/media/Montserrat-Bold.56f13b4e.woff","56f13b4e89fe16d98092c48a68711cf5"],["/static/media/Montserrat-Bold.6a6f4486.woff2","6a6f4486f7e00ea936bbac0b0348b291"],["/static/media/Montserrat-Bold.906e46a9.ttf","906e46a96b5314ee9c7663c9bb29f53f"],["/static/media/Montserrat-Bold.c33c684b.eot","c33c684b056f8b5744849895681eaf49"],["/static/media/Montserrat-Light.530e9927.ttf","530e9927cb77d6eb7f9613287ce77102"],["/static/media/Montserrat-Light.ace48488.woff2","ace4848838ca2055bb064f935680cd17"],["/static/media/Montserrat-Light.c4caf45c.woff","c4caf45cbfbadde51443a46060b9bc40"],["/static/media/Montserrat-Light.d1fd5838.eot","d1fd5838b082fce48b9013255ba1f002"],["/static/media/Montserrat-Medium.56f6fb83.woff","56f6fb83e4c94d46385aaa7c6e85340d"],["/static/media/Montserrat-Medium.7890d298.ttf","7890d298dc2caa1d15be86e3daf5fc01"],["/static/media/Montserrat-Medium.898d641a.eot","898d641a8cd2a512fe0020ed185cbd5d"],["/static/media/Montserrat-Medium.d76bab78.woff2","d76bab7802f4c60cb21333eaa8a42d74"],["/static/media/Montserrat-Regular.4351a4a0.woff2","4351a4a0d8011f4e416bd601b9b3d0c2"],["/static/media/Montserrat-Regular.563745e1.eot","563745e15f47c0cced644f7c2df25f38"],["/static/media/Montserrat-Regular.60c4603c.woff","60c4603c22c2a24a2f452ec05c602017"],["/static/media/Montserrat-Regular.720f8b6d.ttf","720f8b6d5b7d8c91caa54b59336cb08e"],["/static/media/app.848274b0.scss","848274b0f56487d180619eb1fef52225"],["/static/media/logo.06faf01d.png","06faf01dca083c65f07c5ed5abeeb569"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});