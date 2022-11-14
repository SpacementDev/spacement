'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMITMESSAGE": "986ef7ce43eddd6259dcffc7c95e3fe6",
".git/COMMIT_EDITMSG": "e4f5fa412eedf00736aaabcd67cf12e9",
".git/config": "dd465b7a7feed4cc9a891fa612c9b68d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c3ac557e6f3c159a3ed6805f89ee582",
".git/fork-settings": "bda6ddf3816892480df5065839e69507",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f1a2575c0426cace1a1c1b4c307f5a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e759087f9e9edb14f16f35f76bdf50aa",
".git/logs/refs/heads/master": "e759087f9e9edb14f16f35f76bdf50aa",
".git/logs/refs/remotes/github.com/master": "9fd94887e99b37ea0eef34a52760e19d",
".git/objects/00/589a83ab6dfb0584c03d796d72f8050be86ca2": "db75246615fae0f38b4deabea737c689",
".git/objects/01/b079a31fc8cf9e9ed352be342f355a6ad605c0": "41fa33f3d3a88ec7894a223a4f6b87b9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/9a6f90f1f2bd2984b0dcc5e48a19cc5d81f045": "cfc8e5111ff67ceb0150ba782cfcceea",
".git/objects/07/ca1a0ac1a3b13016363e349b19c9cb77de24fd": "3b4c75fd44b507c1f47d6b172585591b",
".git/objects/0a/e3fca88e58ec28a614fcd087fb5f6e93f59020": "e75bef4a6e359e8ad639f578d93ab1e9",
".git/objects/0b/2696066f1185bf8d9e3db91ad8d3f56003d8c0": "60eeed997cbf4dd313f4057738f73b6f",
".git/objects/0c/5ba527cc96e569e2b2839b51d4e3da22245679": "49f8197af27ed1b469b5ed0058875d18",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/15/b63ff94e2586502b2e7fa253774981a7988ef3": "483263f92527bcc350b4f29305d23620",
".git/objects/1b/b3211d5efa19fce9eaba81dfc0e9b265b84d31": "a6729e5463b4307f99cf5b63d4d05ac4",
".git/objects/1c/e889e27c1658c42d5d3601bbbaa10efa0689d4": "c28bacb093dfa61ee323946b1ab70db1",
".git/objects/20/07454999f48f025e3c0f2c00c2aa31c19d8ae2": "6ce5432679c1a27db3c26cf1d497903b",
".git/objects/22/37b049b54a5531888c2c2c1d4fc8c67f48fe26": "47720ebdfd400dd60b6d0edd8149c81a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/278a795be4db1ab87880b5612730d3d727777b": "a6609f7030fb6514fe411c5a827256ad",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/875de5ec9d0dcae41a35b755587b02342368e4": "35a3cd23a9924d1dbace6043303136fb",
".git/objects/34/768a0c326a01576dea4f6b6cb742f681a805ed": "4b3454b2282d905eaf066044ddf16892",
".git/objects/41/30d8c31582891d5fc13fee06689bc5018ce0fa": "1949f480a1196589a33722451d4396b8",
".git/objects/44/783165d9c4bb082d6ed8fa1bdaef1d0881c7e5": "58f8226775484b65da34f5681cdcfcea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a9f3c056890135be5cbb9520ca373b858ffd74": "400db6335cda1a1d7b52d31723fd6518",
".git/objects/49/9f3e071ea717e00453b75814e1768fb8da4d46": "8e7ebd3f302dfa97356cd0f579bb30dc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/c7ff05290c48f8b24c9c373993de3683a85fa4": "264d3e6943be1068f792c7c663af8feb",
".git/objects/51/d3d6d6a5b0efef7e8f07824ffa92c72a587781": "ae5750ca9c33da5ff65c3ea5fc9008f9",
".git/objects/53/3a9b4f12a5e194a1df5a959bf6cb9ba394194f": "717be63c93274a262bc5a10438caa75e",
".git/objects/53/97cfa080890c0cae3f5451570636a14a121615": "fc54e3a480b470cd1c2e56083830bf5c",
".git/objects/56/27577a8bb06fb13b0d54257e59bd5d80cac6b0": "1922dcf2bb106b20c0f5a70b3a5fdd20",
".git/objects/59/2acb43e6ee812f0f21969b596add4dad7338bb": "1ade92e8a06af92406b45c12c718fc01",
".git/objects/61/96a4beea40880f9b9634df6bcfd06d762c1c28": "d7a4534e89c5aa07d4b82db5a5793cab",
".git/objects/71/517070ee52d7e1eaf59b54ce3e54cce0c4609e": "efcb6ca0396e9f14a786a8fd68fe2094",
".git/objects/72/ff6e8145c8ce164f057dbc3099a7a88a1cc2de": "f1e36b362652c417ac859ff453ea78a1",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/2afb38dc5e199dc79ffe5cf775fc9b52052934": "cc11267faa628abc1cf5ce54967bd98d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ae4d1c5ae0a151b6d2dc2c3bd9b874a33d5460": "c357c209dd7b8af2a3bec5ec9e766741",
".git/objects/7e/1d4aaa222a1a6a32eea3c945cdbb078888d0e7": "bd950cb249272776b092de6197764b76",
".git/objects/7f/160d1e803ce47e25a75d2aa2c2241e8a8c8658": "0b86f62377b11271d131eeb8f761c2ba",
".git/objects/80/14b7f34da668615d36822cac7719b6d8179b59": "ed2721d0a76b7b8a6b0f40eb4f541efc",
".git/objects/85/226039a2879284f4e374d191a61a36875793ec": "ca0d5957a7f88454b394930cf7495ad4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6b2fbdc2b626ae55fffaddba725374b9d81f3f": "c6c2046f27a324fb3f74b837110bba63",
".git/objects/8a/3e71e3a75c4e83e5514544e50f89305fbeb69a": "e59e57dd1b6aafd48896e2100a572495",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e9052fb23e03b1b1e3b0ce4aa65a8089542eaf": "fc9e739afa75ddd91d861f81966e0df6",
".git/objects/8e/1fde416323f05c8cfccbcc85794613fffab44a": "1ffe7fe6d2bf0df8f525eec0837d4f0f",
".git/objects/94/5e0885c50b363457f10a0188b4d2c3a0858c16": "a2f576739380fd0c93125a99c533820c",
".git/objects/99/d6b2cd657011c986b8bcdfe69e22421bbaad2a": "49bdedb1840cb0db41ff8df4878450ba",
".git/objects/9a/840826d0c8c8c2b2cf338f11ea7701c74cae09": "c9fec3f488a4afb1c4a0b1d1adf17c10",
".git/objects/9e/b7c433a3ac1642b41bbcc0aa83f7be00765eb5": "ae5504ec411e6e646e37e456553651d6",
".git/objects/9f/78d865cf003f5d2d1b95d9c4e80abcde077cc1": "6ae04f53a6f2f5d4cbf630e3a4e6fcf2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/35f584ee8262d592b9b9cb60d589269cc8323d": "d2e5ba0f5e03369dd5f223bc0f0a9f41",
".git/objects/a6/108d522f959d834630dd296a2284fccbadb7d7": "835b46ef91a175bc399cc9fb072383c7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e7d7f7051ff0b169fd803981f5f96dc22861e8": "cf1b44d769d73d524694d382728a8e5f",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/af/7feb6cfa1b7a1807ce867a040cbb1e239e13f7": "a30c35e2178214c0bb9d8b170bb4d967",
".git/objects/af/bf9f65fb9e2a76dd4e862d6052bf73f2cadd61": "2c9242037ab1a710eb709e383b854e67",
".git/objects/b1/89525b3c5ac7ec5cd6f57e1af8b85699449094": "c0a7899de4f299b641e93b9709c67f65",
".git/objects/b5/d1a3b31d49909972034c236212e2e95efd4fc5": "2be3c83516e20282fb8b27d38c084828",
".git/objects/b6/cba72bd60445ce2d49a86eb23652b5964b86e6": "7de64eab654f813f976754e74b04bc6b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c9f5f03fcb847ca7b30dd60bcb0df84ff2efc1": "298818fdc77b7ed2c837b1e3fad267c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/212c1b8ddcb67c4de6fb9361473da2b82beb9c": "1f740f6b30ec3218a32397e762cb0d12",
".git/objects/c1/74abb4ac9590b431f635b83f53a8352c8b1825": "ead1e57a61cb89279fe55641bfafbc78",
".git/objects/c6/45fbf374ef4090e3960967fb193e1ec9a3120c": "57eab5f3e9519396018e09e659206903",
".git/objects/c9/cbfa6b3d60222e0d09b59496c98850359b7f3c": "506f2772e9ee85ea8713756ed7771d65",
".git/objects/cb/f36a92af9d10dd57c74feb97840057a042382c": "9101f3d16c254552522e30172bbf7c6c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/f8b61ecd74455cbb310d7b4d0d5079a99d051a": "3bac8c540190e910eac9f6baaf2a3a50",
".git/objects/d1/77f5a6caf22f719ee5078a341a8a408bd9db6a": "4df17e671788a7476d78f9657649f35f",
".git/objects/d6/1d448a85e4639f335e35648595d21e18bf7101": "57566c95e800d0a2e0eae2cd3382e6b0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/39c4d984b0bebb0833ccb4004b747eb4581ec6": "e206421b1e09dc2c76090c2d9392e799",
".git/objects/d7/b1de0c9f2cc05c72bd855782c6869ac3446d05": "0bb3dfe0ec1091673514d65a5810b7a3",
".git/objects/d8/8d67b678cda2234572e7e4351a2b664b417f57": "edd33a5d301854b2acc4aeea81fb9198",
".git/objects/db/5a7e637c67f237002782fff7b32d834e0ee8b8": "581998ef06e7f4eb101c1e2c0757efd7",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/a40f19af457717d000ef0989a9567f09b3ec88": "48302124e9b650bd71058dc48e0a384f",
".git/objects/e0/77ed524b0fc3e15bc5d7bb7ab4675a2e54c63c": "19f0b9947abc4e1f0e8ef7de91da8d04",
".git/objects/e2/fdfb3b19ff99340d93515cb85d9530aff006e3": "8b95c909e4aa9f973f51abdf1a5d2ead",
".git/objects/e4/f0611ed7cb061b98c5042312d2f7ad29ee61ed": "a6a57687a1804628c4aa08b063bd71e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/d7dd88192a35f2777e70d5285a8bf1ac9e44b4": "95498ec324077090cc4297750feefde8",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/483cec87e8f3e6f46f91aafa5986fdd383d5e5": "9db694f964d546899a3908612df459b3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7eafee4a58cc78d80ac9e4ab823acf6608a46d": "fd3674e9a065bf50ade102f10db686f4",
".git/objects/f1/8d85e08316f429564d2f089eacf560825f8d96": "b561d55b28e409f67ceb8fa72044e1df",
".git/objects/f2/eb1c06ef29e011adf853385359d42d8eb4854a": "54908e7842266e7931c7a1b930fc6468",
".git/objects/f6/5ba1449fc7026547835100ac0611ceb78bd4a7": "1631a2c8137adea70f40dcc45489d9f4",
".git/objects/f9/82dbcb829bf8ba7f95c1dddcc7273e58e4371b": "cda6b9625b064b977b6129a6729c83c3",
".git/objects/fa/43df1e22a7bf4ee6479c1c928a76afae947cf1": "c5a45cbdf2ecf5650d4a226b9b50735b",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/ORIG_HEAD": "491ae80c1e8b3e528558c02f20155046",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "404e3ccac5e263d1d532bd5a48eba8c6",
".git/refs/remotes/github.com/master": "d7bd28bf09bb078786c89818f6a62de2",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c9bbc8efaa8aa9626d32852171b1667a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f87e8d301ce92f3ef3046f97e31a6bf6",
"/": "f87e8d301ce92f3ef3046f97e31a6bf6",
"index.php": "d18ae736807d20a4a8ade44366b38be5",
"main.dart.js": "10e8b51ba25147e79e2c44964f4bb1b9",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
