'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "6d8c081851cfed51cbc5889c95f1a116",
"/": "6d8c081851cfed51cbc5889c95f1a116",
"index.php": "d18ae736807d20a4a8ade44366b38be5",
"main.dart.js": "c8571fc835ecada3aa157648f5a545eb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "2f7c2274fd9a744c1ba68f3ed180682d",
".git/objects/61/988d712b7027cff18f07f27d9cbdd0af9f9c56": "2cd34fc798a9d3a2a87c8d2378da92f7",
".git/objects/59/fc26de866656b2da78905c8956e982251a4fc1": "af7cce4385deb64ddeb73c5af306bfb7",
".git/objects/9b/1f87e93402ccd47ba38509bed5f2cebf6587cf": "a329f147e9e5946bcdc8cab6c0714f20",
".git/objects/9e/56bc5ea02000d08a7aebc15f9e2c82b752dc77": "390bdd6c7fc7d8ba238ff7cf36c424c4",
".git/objects/04/ff53899e7eafec425d244c9f9ee8e12a015aa8": "b570faf4c582ba8cfb4d183d13471409",
".git/objects/93/8cdc446d9dd707133d109669d0ccbee74aa715": "7c7169bd980d8c895d871460a59d2155",
".git/objects/5f/f7ae9502b1e275d65731b04cf59fa40e03d740": "325bb614234da96d62da94802c494891",
".git/objects/9d/d1da95ea954174cfc3c6fbc3c81506c0eca538": "6d40f4efa23210f108f49ccdee0f190c",
".git/objects/ac/7180cc3a733b6648aec8363eb2eb43c35f91f2": "41e71dac93837a2984aa4526252ea816",
".git/objects/ad/4367e7f4b5c96be5ef9271e31e541c2a5af3ff": "96150e8696c271d98b6ff9e6106dd0b1",
".git/objects/b3/a2a1598a5cfcc2f59149ef1acf4e423405a3d1": "5123b1cc2380becae4cd712fc8dc6721",
".git/objects/df/08ddb338bd08422814f722dfcfdb416cd12a82": "a9bc09c765514474617f46625f3cd0bc",
".git/objects/d1/97c7894bb94a9199ef15696cb72c43f32892af": "f95e38897908579bcff94af7ad6764bf",
".git/objects/d8/69accc9ce2aee9615ff28672dba9d0ac932bd1": "012f7595c330e265641bb900c4270961",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/e5/1c30912a4390e1885c08fe15538da9dc282f91": "540143b96d002eb8cd0ebd4d9acc445b",
".git/objects/f3/1a1abb394e3a8f235e03480808dcab8b63ee21": "2c94a9aae4e5f2373d6d47790234375b",
".git/objects/c7/4c14b250c2769cfdd58baa9e1d317335c2bddf": "9b9f2b5cd54d8b02d1988b645540d31d",
".git/objects/f2/583443a95e5826bb2eed8d6f938a276896cae3": "0070e7d90ec22d2979bb05fd2f0b2429",
".git/objects/e3/1d3aae6eb38ba03bb5cd9259700542148ea3b4": "9dc16b8bae75e3767755d1ddb63e2eff",
".git/objects/fe/ec02d448c3bc984a37b5b36fc40df9c0a073a3": "b706c7952fcf9a17307b0f720b9f2c23",
".git/objects/c8/e617665cfe834140907b016acbbad66c3078ca": "32859d3640c16dfe936f12c6696eee51",
".git/objects/ec/0967678a5346320b51a032787f905da6127aed": "24433724a1c7853718e57ae9d1471eed",
".git/objects/27/0d77fb2ca37811a80056fe51c01404bb16647d": "2c686a51279b4803c7d797dabe74d051",
".git/objects/pack/pack-ba95f7e70f672650a572cf4b13feef3b69200b44.pack": "76990afad34003723d451663dc74a1a5",
".git/objects/pack/pack-ba95f7e70f672650a572cf4b13feef3b69200b44.idx": "2592c4d2c21d13dd0e36b9b0d8fb5d72",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/94da676e03ffeddc9c923030604ce3f3b5bc5c": "982eebeddb0f7d2427803f953bd43cc2",
".git/objects/80/72f9e59629f4bf701d85b6bbab7653bce16ea7": "570c5e2cea4a5e34baf7bae8f6144e3f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/26/d86799caccb62acc0e856934f253cea6741d4d": "a93405bc469a2b235915ae591217ec6d",
".git/objects/26/8257e4c98137d83af83283b62c194905f1a002": "96310193bbd06a1074499a75d0c56e8e",
".git/objects/86/9d714feb599fd2174cf47b860884c2578e1380": "03a8e1e4ac4f49af3bf7b25fdd980924",
".git/objects/38/58cac9f3453265671e724dd9dd25e4fee18139": "3d7729149db9f84b621741654679557e",
".git/objects/5c/9c0d4bef4bae6eea4d2cf5df968473f13995b4": "0ab6dc6e1fccda34d9d72eb27ddfb01d",
".git/objects/96/119bca306938f658d055058faf7caed4223bda": "49e9a330d0423c08cf3c73475f0235bd",
".git/objects/54/d23a531c0f356dab1768eda337309855fea511": "2beab5c84b6841773cd79cc644998916",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/4a80612c9b40fdfbfc2c572a9d9700bb93ad96": "dc75653d27613125a07ed7d9249bb284",
".git/objects/a0/41613c2e28d304fd4d995877e9c381006c1ad6": "e8e643e8047bdaeba0bf4c6a65fe371c",
".git/objects/a7/06015dab005b7d008c04aa30669b530866c04a": "f4a169646915f116a3320db7b7f4aa04",
".git/objects/dd/ab474d493b7cfc509069406edb3fd47fa39c4b": "ba8df08f2c450af7d4e071fb3356e567",
".git/objects/e1/e4b68ffde9c49cbc8908d73faf0fc6553ddd60": "8c92f489bb622694ae85af19f6e80e0e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/a01207a77daf144ed392dc6ff6b5ac5fe9844c": "ed764c8b70b9b890444467ec97d7462c",
".git/objects/f9/7d7375b7e633858838edea01a2ac5387936cd0": "cf84d0fa55196c47ffa0d68d717b48f3",
".git/objects/fa/1e71e29a0763079fe067dc597b09ba759a2ffa": "f05e43687f118730f2a7f83db6e0d9b8",
".git/objects/f1/80efe6a0c00569db8f5bc49ea04612c878588e": "80c2623c7f8ef1be49c3ae992266cee3",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/ad65ae813090e4fa84371ace6d469ec17a9073": "47714baf8713ce037f76642e81849215",
".git/objects/79/afeeb081fa6a7cb1542d6c8aa5613c6e7f4d2f": "5cad4e256b0232439fbb64dcccd202bd",
".git/objects/79/250650f4fb11190a95db0392d3de3f90fdf972": "5e0b0897133b95f92b2902a777330ece",
".git/objects/41/5798e90e6b95f80a8523abda329946ba453b30": "49f9e858aff6c08d59830e23468787e5",
".git/objects/24/8605c82d52e0b229f0c26a68da7d1ff5437486": "c7f71361bf06390a1441c83b843cfbf6",
".git/objects/23/8cebed76982337c2932cec6403f9113b7e1ea3": "92f82c77ae35da847a2b7362ac815cbd",
".git/objects/2b/44e1c0336d3db4327ccffbde7ac753351cc261": "61b5a9249aa7a7b89f697a92bac5942c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/78/86d3445183f187eb35359bc4602ecb7aeb94fe": "789f4e376f49a17c7f2b05deeb4d8e10",
".git/objects/8b/00fd680b397322eb26cd7c01e96c6ae44b92b1": "38a5656ec0ff13a8811f1852f7cf8749",
".git/objects/13/197512f2adebe3bf81ae3e7e9b937427750018": "c4deb34605637fbdbbf98879bafd55cd",
".git/objects/7f/7ba2ea4fe5f789e98042289e78016738ce149d": "b2266d5b3079873678562ee842b9685e",
".git/objects/8e/87faa2583f987bfb881ab2cd3d933aadbd56d1": "4548ea1178508ffda94563df80681955",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "4b8161a7988aac6aa56f8128e8f586a1",
".git/logs/HEAD": "72173c84346e82be45d9d67d77ec91ae",
".git/logs/refs/heads/master": "72173c84346e82be45d9d67d77ec91ae",
".git/logs/refs/remotes/origin/HEAD": "dd8220939d38ecabec1766457a7d6998",
".git/logs/refs/remotes/origin/master": "f1c9994e59a19736432c8e15c88394fc",
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
".git/refs/heads/master": "ff76adc21b94505ece96246765d26571",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "ff76adc21b94505ece96246765d26571",
".git/index": "7d001002e5790a8927c4d62478638af6",
".git/packed-refs": "4eea91ab4e94e5da52d7690e4db195b0",
".git/COMMIT_EDITMSG": "de063c99357e6675f1ba05b33635e044",
".git/FETCH_HEAD": "02fa8f9d58b2466e5d544d0bc91d3e2c",
"assets/image_346.png": "c2104304ff512dea39f3272c34585acd",
"assets/image_15.png": "92ed403f8cafca46577cb5790438b09b",
"assets/near_map.png": "ec42bf0dcb8d268470b5dd70810e2f7b",
"assets/Group_249.svg": "72d51a6bf944a08a5d01a481e611b39b",
"assets/search_near_02.svg": "07ffabe7e288ca36d374926a32073352",
"assets/hotel.png": "f93730fdb36d28110a710b436c7658f4",
"assets/Group_265.svg": "a4053c70d38a42e65d4fc5dc7606e00d",
"assets/Group_266.png": "807d0b17588b478f7542af8c36795967",
"assets/travel_prop.svg": "94371b7aea1af9cc21b8213278871f67",
"assets/image_3462.svg": "e690068e3ed6918c058079fe77687350",
"assets/location_analyze.svg": "04b40fa341d95443cd10400f02323f4e",
"assets/AssetManifest.json": "ad1e6bb7a1fec566b3614151b9d833d6",
"assets/Group_249.jpg": "6af8739c38c0ab3b7ab65f88846cedd4",
"assets/travel_lodgment_adobe_express.svg": "dfc4362aeea42c52e2f6faa772a0d497",
"assets/image_15.svg": "5efe88a9d15a6c2da45cc4b6724ba361",
"assets/image_346.svg": "e690068e3ed6918c058079fe77687350",
"assets/NOTICES": "b9fdd0083b72d42791dfd7d412b215a8",
"assets/Group_234.svg": "ab40663a295f5979edf582934397a5e4",
"assets/Group_246.png": "93ad1bcd878e88ca724b22f75b0454b4",
"assets/Group_246.jpg": "bb1ec6e0aa3468c17ad6629f1ab38778",
"assets/travel_prop_02.svg": "8e34ed54b119e4ba4e5d93d7d8748f2f",
"assets/Group_246.pdf": "0118bf99d7652a4eced76a328c8ee2e7",
"assets/mobility.svg": "851024ff8e0663356da62ee2cf954207",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/travel_lodgment.png": "4ca722177a5e2267047374c15ae3581a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2c3bba154bbb28d5be2aab964d0aa7d6",
"assets/acc.gif": "ea5ba4db5419d54210dbf08dadedb019",
"assets/analyze_api.svg": "12e5d142de43241bce37e7db9d127cef",
"assets/travel_lodgment.svg": "996e80735c00ab623f0035033aa154b3",
"assets/location_analyze03.svg": "04b40fa341d95443cd10400f02323f4e",
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
"assets/assets/acc.mp4": "8115af9a67882ea478209ea658d2fd2f",
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
"assets/draw_api.svg": "ef1e4f6070d97ba1f8e55dd87648d4a9",
"assets/teamis.svg": "84a2e929d842f67cb27b72142961986c",
"assets/Group_246.svg": "2f7389cc202dd4de0d12077538f96143",
"assets/search_near.svg": "73c0c593bada55f6a8dccaacb3bd1182",
"assets/Group_234.jpg": "531573b7efcd73d8ce654f4ba8e28d90",
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
