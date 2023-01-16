'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "b2efa369ab80398264e9d12c6c698005",
"/": "b2efa369ab80398264e9d12c6c698005",
"index.php": "d18ae736807d20a4a8ade44366b38be5",
"main.dart.js": "2d1c3ff53c3f58da139f98e50284d3fc",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "2f7c2274fd9a744c1ba68f3ed180682d",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/f2/583443a95e5826bb2eed8d6f938a276896cae3": "0070e7d90ec22d2979bb05fd2f0b2429",
".git/objects/pack/pack-ba95f7e70f672650a572cf4b13feef3b69200b44.pack": "76990afad34003723d451663dc74a1a5",
".git/objects/pack/pack-ba95f7e70f672650a572cf4b13feef3b69200b44.idx": "2592c4d2c21d13dd0e36b9b0d8fb5d72",
".git/objects/26/8257e4c98137d83af83283b62c194905f1a002": "96310193bbd06a1074499a75d0c56e8e",
".git/objects/38/58cac9f3453265671e724dd9dd25e4fee18139": "3d7729149db9f84b621741654679557e",
".git/objects/a0/41613c2e28d304fd4d995877e9c381006c1ad6": "e8e643e8047bdaeba0bf4c6a65fe371c",
".git/objects/f9/7d7375b7e633858838edea01a2ac5387936cd0": "cf84d0fa55196c47ffa0d68d717b48f3",
".git/objects/46/ad65ae813090e4fa84371ace6d469ec17a9073": "47714baf8713ce037f76642e81849215",
".git/objects/23/8cebed76982337c2932cec6403f9113b7e1ea3": "92f82c77ae35da847a2b7362ac815cbd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "7fe830c2f57fbe6366f4bc13a8eea808",
".git/logs/HEAD": "68380af4c8e47ad2c3cd920a4a36defb",
".git/logs/refs/heads/master": "68380af4c8e47ad2c3cd920a4a36defb",
".git/logs/refs/remotes/origin/HEAD": "dd8220939d38ecabec1766457a7d6998",
".git/logs/refs/remotes/origin/master": "84e2ef9a47d02c5dbc039c63bfd76473",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2a2b288927da61c073b1bec9be340381",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2a2b288927da61c073b1bec9be340381",
".git/index": "de9a766da0327473360efa966ec2fffe",
".git/packed-refs": "4eea91ab4e94e5da52d7690e4db195b0",
".git/COMMIT_EDITMSG": "2e5fba52f1d702c039be4aa0ce1fa274",
".git/FETCH_HEAD": "4daaa551fd0d964daea979abdbda1621",
"assets/AssetManifest.json": "e94119f481f8c316daedd66ec61464d3",
"assets/NOTICES": "b9fdd0083b72d42791dfd7d412b215a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2c3bba154bbb28d5be2aab964d0aa7d6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/image_346.png": "c2104304ff512dea39f3272c34585acd",
"assets/assets/image_15.png": "92ed403f8cafca46577cb5790438b09b",
"assets/assets/near_map.png": "ec42bf0dcb8d268470b5dd70810e2f7b",
"assets/assets/Group_249.svg": "72d51a6bf944a08a5d01a481e611b39b",
"assets/assets/search_near_02.svg": "07ffabe7e288ca36d374926a32073352",
"assets/assets/hotel.png": "f93730fdb36d28110a710b436c7658f4",
"assets/assets/Group_265.svg": "a4053c70d38a42e65d4fc5dc7606e00d",
"assets/assets/Group_266.png": "807d0b17588b478f7542af8c36795967",
"assets/assets/travel_prop.svg": "94371b7aea1af9cc21b8213278871f67",
"assets/assets/image_3462.svg": "e690068e3ed6918c058079fe77687350",
"assets/assets/location_analyze.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/assets/Group_249.jpg": "6af8739c38c0ab3b7ab65f88846cedd4",
"assets/assets/travel_lodgment_adobe_express.svg": "dfc4362aeea42c52e2f6faa772a0d497",
"assets/assets/image_15.svg": "5efe88a9d15a6c2da45cc4b6724ba361",
"assets/assets/image_346.svg": "e690068e3ed6918c058079fe77687350",
"assets/assets/Group_234.svg": "ab40663a295f5979edf582934397a5e4",
"assets/assets/Group_246.png": "93ad1bcd878e88ca724b22f75b0454b4",
"assets/assets/Group_246.jpg": "bb1ec6e0aa3468c17ad6629f1ab38778",
"assets/assets/travel_prop_02.svg": "8e34ed54b119e4ba4e5d93d7d8748f2f",
"assets/assets/Group_246.pdf": "0118bf99d7652a4eced76a328c8ee2e7",
"assets/assets/mobility.svg": "851024ff8e0663356da62ee2cf954207",
"assets/assets/travel_lodgment.png": "4ca722177a5e2267047374c15ae3581a",
"assets/assets/acc.gif": "ea5ba4db5419d54210dbf08dadedb019",
"assets/assets/analyze_api.svg": "12e5d142de43241bce37e7db9d127cef",
"assets/assets/travel_lodgment.svg": "996e80735c00ab623f0035033aa154b3",
"assets/assets/location_analyze03.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/assets/draw_api.svg": "ef1e4f6070d97ba1f8e55dd87648d4a9",
"assets/assets/teamis.svg": "84a2e929d842f67cb27b72142961986c",
"assets/assets/Group_246.svg": "2f7389cc202dd4de0d12077538f96143",
"assets/assets/search_near.svg": "73c0c593bada55f6a8dccaacb3bd1182",
"assets/assets/Group_234.jpg": "531573b7efcd73d8ce654f4ba8e28d90",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
