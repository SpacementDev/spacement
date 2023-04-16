'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "33acbe5742068daedb86cb7c0d8e5ebf",
"/": "33acbe5742068daedb86cb7c0d8e5ebf",
"index.php": "d18ae736807d20a4a8ade44366b38be5",
"styles.css": "e8f9b1113fb89c814ea3fb2bf58107a1",
"main.dart.js": "7e9269b7e41bcd4e38b9a5ac6e50ecbe",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "ce307fcc79410053ca571648d93cfff6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "4a41b768ef19385fc9fd5dbd8152a5b0",
".git/objects/56/c23c83269aea8d4802b91271bcd48d355f6529": "088d249b05921254cbb36f70cdb0d209",
".git/objects/b2/daf1d14181bd638a986d15c35a86abbeec6c2c": "6c136cede0ecaf9a6b6152a6e323be34",
".git/objects/b4/60e41beb4caf91c4aee099d83d4aa6397e0f2e": "e8475e4ec9bf0cbfa9dab63f2d708e69",
".git/objects/pack/pack-26fa83e41953d6b45cdd7ddfc7035aa5d74b43e2.idx": "032b33b14c5e38966312a2d6cac13917",
".git/objects/pack/pack-26fa83e41953d6b45cdd7ddfc7035aa5d74b43e2.pack": "8bb9b7686062ef4c5fecb1cc48709fdc",
".git/objects/88/4323d3048bb48b8c30c8f8e302082effd80eaf": "0404e89c7b9cf50446c4f31925c8a590",
".git/objects/d5/b23ea1a226fd5cc914198b3186c1011a91d6f4": "0c4a291bf9a4c25aafc04b38ad016436",
".git/objects/83/306392a9e8c6948c67003c88db05830e44d981": "386ed335525acfeb39108870436dbab4",
".git/objects/1b/e112abc215e9cbf255b7af89931c80b7a1d943": "9df67664cfbdaf967482226783b68a12",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/fork-settings": "96ab2ec676deaa49a56d2bc24c02ea78",
".git/logs/HEAD": "61fff68a4490a2a67c59be5322f483d7",
".git/logs/refs/heads/master": "61fff68a4490a2a67c59be5322f483d7",
".git/logs/refs/remotes/origin/HEAD": "3db719d8c76d18bc1db54d3bb600eb4f",
".git/logs/refs/remotes/origin/master": "cef389a4a16ef8cb00d13a8d0a7d32c9",
".git/refs/heads/master": "4b599eefddefd5150f3fea8446a71737",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4b599eefddefd5150f3fea8446a71737",
".git/index": "a2c27acfb4c85e3ca5cd73b321766f37",
".git/packed-refs": "d44ef45cd5838ee2b4bb304c858ffe29",
".git/COMMIT_EDITMSG": "c7dceb5c4c60fed2c7ac8322609ae798",
".git/FETCH_HEAD": "b214d4e9e972ef8c6dd8bebd35a96eb4",
"assets/image_346.png": "c2104304ff512dea39f3272c34585acd",
"assets/image_15.png": "92ed403f8cafca46577cb5790438b09b",
"assets/search.svg": "c8034a6fe776da6614ce2b5b5c9880a9",
"assets/near_map.png": "ec42bf0dcb8d268470b5dd70810e2f7b",
"assets/Group_249.svg": "72d51a6bf944a08a5d01a481e611b39b",
"assets/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/search_near_02.svg": "07ffabe7e288ca36d374926a32073352",
"assets/circle.svg": "27816cc10cb410b2d3221b00f90da8f8",
"assets/hotel.png": "f93730fdb36d28110a710b436c7658f4",
"assets/Group_265.svg": "a4053c70d38a42e65d4fc5dc7606e00d",
"assets/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/Group_266.png": "807d0b17588b478f7542af8c36795967",
"assets/Pretendard-Regular.ttf": "65e9a69de2d10a9e43102d5c5eae368b",
"assets/travel_prop.svg": "94371b7aea1af9cc21b8213278871f67",
"assets/image_3462.svg": "e690068e3ed6918c058079fe77687350",
"assets/location_analyze.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/Thumbs_Up.png": "6ff12ce923e7e076972c9cd2110b8360",
"assets/AssetManifest.json": "5191dd8b0fee7c2a934b4432e9124516",
"assets/Group_249.jpg": "6af8739c38c0ab3b7ab65f88846cedd4",
"assets/travel_lodgment_adobe_express.svg": "dfc4362aeea42c52e2f6faa772a0d497",
"assets/image_15.svg": "5efe88a9d15a6c2da45cc4b6724ba361",
"assets/image_346.svg": "e690068e3ed6918c058079fe77687350",
"assets/NOTICES": "b8496dc25d865bf7f9f94a1fb2fb243f",
"assets/hover_maps_draw.png": "099b5aa211203f2fc79e45ea478e9ad4",
"assets/travel_prop_03.svg": "dd4d2683d95976b0f7bc8f3438d7f989",
"assets/Group_234.svg": "ab40663a295f5979edf582934397a5e4",
"assets/Group_246.png": "93ad1bcd878e88ca724b22f75b0454b4",
"assets/marker.svg": "163a9e9ba790bb275a3d9fcb0290c9e4",
"assets/Group_246.jpg": "bb1ec6e0aa3468c17ad6629f1ab38778",
"assets/hover_analyze.svg": "14bd6bb6fd5e6961813ba3255d6e3e05",
"assets/travel_prop_02.svg": "8e34ed54b119e4ba4e5d93d7d8748f2f",
"assets/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/Pretendard-ExtraLight.ttf": "6ff96cb10994cadd3bf7bdc30cd31aa1",
"assets/acc.mp4": "8115af9a67882ea478209ea658d2fd2f",
"assets/mobility.svg": "851024ff8e0663356da62ee2cf954207",
"assets/Pretendard-SemiBold.ttf": "bc96c6e0e53f8f953912e93a1e50b8f7",
"assets/Orange_heart.png": "74dfe4e98ab016d31b123075af446ad7",
"assets/hover_maps_analyze.png": "b9f9747156442650f8e178cbd3553863",
"assets/FontManifest.json": "076b9691c554a8d68a8dbe70ff9950d5",
"assets/travel_lodgment.png": "4ca722177a5e2267047374c15ae3581a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/travel_prop_04.svg": "46be27427c39be413b52ac32870dd819",
"assets/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/shaders/ink_sparkle.frag": "2c3bba154bbb28d5be2aab964d0aa7d6",
"assets/clock.svg": "612e88890c4150314dcbc68116daa420",
"assets/analyze_api.svg": "12e5d142de43241bce37e7db9d127cef",
"assets/travel_lodgment.svg": "996e80735c00ab623f0035033aa154b3",
"assets/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30",
"assets/location_analyze03.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/KumarOne-Regular.ttf": "a9eb79d11b34d93e5f4b291b2e003857",
"assets/KumarOne-Regular.ttf": "a9eb79d11b34d93e5f4b291b2e003857",
"assets/assets/image_346.png": "c2104304ff512dea39f3272c34585acd",
"assets/assets/image_15.png": "92ed403f8cafca46577cb5790438b09b",
"assets/assets/search.svg": "c8034a6fe776da6614ce2b5b5c9880a9",
"assets/assets/near_map.png": "ec42bf0dcb8d268470b5dd70810e2f7b",
"assets/assets/Group_249.svg": "72d51a6bf944a08a5d01a481e611b39b",
"assets/assets/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/assets/search_near_02.svg": "07ffabe7e288ca36d374926a32073352",
"assets/assets/circle.svg": "27816cc10cb410b2d3221b00f90da8f8",
"assets/assets/hotel.png": "f93730fdb36d28110a710b436c7658f4",
"assets/assets/Group_265.svg": "a4053c70d38a42e65d4fc5dc7606e00d",
"assets/assets/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/assets/Group_266.png": "807d0b17588b478f7542af8c36795967",
"assets/assets/Pretendard-Regular.ttf": "65e9a69de2d10a9e43102d5c5eae368b",
"assets/assets/travel_prop.svg": "94371b7aea1af9cc21b8213278871f67",
"assets/assets/image_3462.svg": "2b551815889f9a4bd0926d203d747344",
"assets/assets/location_analyze.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/assets/Thumbs_Up.png": "6ff12ce923e7e076972c9cd2110b8360",
"assets/assets/circle.png": "34194238113e603e29469bb247520d34",
"assets/assets/Group_249.jpg": "6af8739c38c0ab3b7ab65f88846cedd4",
"assets/assets/travel_lodgment_adobe_express.svg": "dfc4362aeea42c52e2f6faa772a0d497",
"assets/assets/image_15.svg": "a7a1405eed5750bc751d9f1fcb479aed",
"assets/assets/image_346.svg": "286778765da73e0437abcbd8b9a91b59",
"assets/assets/hover_maps_draw.png": "099b5aa211203f2fc79e45ea478e9ad4",
"assets/assets/travel_prop_03.svg": "dd4d2683d95976b0f7bc8f3438d7f989",
"assets/assets/Group_234.svg": "ab40663a295f5979edf582934397a5e4",
"assets/assets/Group_246.png": "93ad1bcd878e88ca724b22f75b0454b4",
"assets/assets/marker.svg": "163a9e9ba790bb275a3d9fcb0290c9e4",
"assets/assets/Group_246.jpg": "bb1ec6e0aa3468c17ad6629f1ab38778",
"assets/assets/hover_analyze.svg": "14bd6bb6fd5e6961813ba3255d6e3e05",
"assets/assets/travel_prop_02.svg": "8e34ed54b119e4ba4e5d93d7d8748f2f",
"assets/assets/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/assets/Pretendard-ExtraLight.ttf": "6ff96cb10994cadd3bf7bdc30cd31aa1",
"assets/assets/acc.mp4": "8115af9a67882ea478209ea658d2fd2f",
"assets/assets/mobility.svg": "851024ff8e0663356da62ee2cf954207",
"assets/assets/Pretendard-SemiBold.ttf": "bc96c6e0e53f8f953912e93a1e50b8f7",
"assets/assets/Orange_heart.png": "74dfe4e98ab016d31b123075af446ad7",
"assets/assets/hover_maps_analyze.png": "b9f9747156442650f8e178cbd3553863",
"assets/assets/travel_lodgment.png": "4ca722177a5e2267047374c15ae3581a",
"assets/assets/travel_prop_04.svg": "46be27427c39be413b52ac32870dd819",
"assets/assets/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/assets/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/assets/clock.png": "749cf2f6c81d2876383b487a050f35d2",
"assets/assets/clock.svg": "612e88890c4150314dcbc68116daa420",
"assets/assets/analyze_api.svg": "12e5d142de43241bce37e7db9d127cef",
"assets/assets/travel_lodgment.svg": "996e80735c00ab623f0035033aa154b3",
"assets/assets/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30",
"assets/assets/location_analyze03.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/assets/KumarOne-Regular.ttf": "a9eb79d11b34d93e5f4b291b2e003857",
"assets/assets/upload.svg": "b6ea48845eec4c6bf744230d0db49b88",
"assets/assets/hover_draw_02.svg": "210fa58349c0d3dfc06ba6160708a041",
"assets/assets/draw_api.svg": "ef1e4f6070d97ba1f8e55dd87648d4a9",
"assets/assets/teamis.svg": "84a2e929d842f67cb27b72142961986c",
"assets/assets/Group_246.svg": "2f7389cc202dd4de0d12077538f96143",
"assets/assets/folder.svg": "77dad1551c33500138d087b487c6bebd",
"assets/assets/marker.png": "74694015e7098be9f30adee2c36c1fcb",
"assets/assets/search_near.svg": "73c0c593bada55f6a8dccaacb3bd1182",
"assets/assets/Group_234.jpg": "531573b7efcd73d8ce654f4ba8e28d90",
"assets/upload.svg": "b6ea48845eec4c6bf744230d0db49b88",
"assets/hover_draw_02.svg": "210fa58349c0d3dfc06ba6160708a041",
"assets/draw_api.svg": "ef1e4f6070d97ba1f8e55dd87648d4a9",
"assets/teamis.svg": "84a2e929d842f67cb27b72142961986c",
"assets/Group_246.svg": "2f7389cc202dd4de0d12077538f96143",
"assets/folder.svg": "77dad1551c33500138d087b487c6bebd",
"assets/search_near.svg": "73c0c593bada55f6a8dccaacb3bd1182",
"assets/Group_234.jpg": "531573b7efcd73d8ce654f4ba8e28d90",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
