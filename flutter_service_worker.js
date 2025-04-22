'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f1a375d95408b6df7947b0330cd17fac",
"version.json": "9a78fb9e87144018cdbe6e5e09d2b5c3",
"index.html": "56f9eff8b90eee73b50d6d46891aeca4",
"/": "56f9eff8b90eee73b50d6d46891aeca4",
"main.dart.js": "74a508d786935deea426cccc8d2931b6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c107603fbd93e26662282c5d966e97bb",
"assets/AssetManifest.json": "616b32edf1f37f77607c1e817433386c",
"assets/NOTICES": "c90f15c95fb01d69b0c418307d868a02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3e3641269549e5620f48d1836d7ac7a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/game_limbo/assets/res.zip": "67362709227601001760ae831fc1cfd2",
"assets/packages/game_limbo/assets/music/win.mp3": "1b20842625fad760a5b69e7b210bdf20",
"assets/packages/game_limbo/assets/music/bet_text_change.mp3": "56493e2e5a467bcbd4781ceb7b9a7358",
"assets/packages/game_limbo/assets/music/bet_start.mp3": "8f1c70feb809633cba6f460ce131bfda",
"assets/packages/game_limbo/assets/res/langs/en.json": "3e40f4d40eb0612c4e1159767eabea25",
"assets/packages/game_limbo/assets/res/langs/zh_Hant.json": "e8ae912b594b61682521bccb282f7d02",
"assets/packages/game_limbo/assets/res/version": "3980fbbc351d4a05c1eee46d6048e869",
"assets/packages/game_limbo/assets/imgs/ic_arrow_right.png": "8152c69dfa577ec43df153ddd62705e7",
"assets/packages/game_limbo/assets/imgs/ic_refresh.png": "e691c55edfc8928d903a5ddb9189c954",
"assets/packages/game_limbo/assets/imgs/setup/ic_wrench.png": "eb7ceab093af546f626c63b3c0a0cc56",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_container.png": "9482b34189de08c973c873d65d8dd54d",
"assets/packages/game_limbo/assets/imgs/setup/ic_file.png": "8f724dd4248546deb74b1f562797591b",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_search.png": "aab2e884693dbb0e547391e08f9a39bc",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_eyeball.png": "f81b6da1a3ea82c10259e485b2138e72",
"assets/packages/game_limbo/assets/imgs/setup/ic_gear_big.png": "4a6fdd25db9d7fb74bc70a84be4553b9",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_download_arrow.png": "e46e5d5b7e01fb8cb97acb80de8d0d6c",
"assets/packages/game_limbo/assets/imgs/setup/ic_download_fail.png": "a22a3b94aac9784d1b9ec3e538a84432",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_refresh.png": "4b9b7eba0c07bd409d0ecfe083bd0a57",
"assets/packages/game_limbo/assets/imgs/setup/ic_mount_fail.png": "ab1c83e5144d1a50ed541df0b06929e9",
"assets/packages/game_limbo/assets/imgs/setup/ic_cloud.png": "6a45009e7914acad656d046b7a92841a",
"assets/packages/game_limbo/assets/imgs/setup/ic_phone.png": "a0ccf62c9e81b5e39587549c8d318161",
"assets/packages/game_limbo/assets/imgs/setup/ic_gear_small.png": "e7c139e6f4122c12583ae19430a7dab4",
"assets/packages/game_limbo/assets/imgs/setup/ic_bubble.png": "02c9ca556e93ba27c3e1f6184d430a36",
"assets/packages/game_limbo/assets/imgs/setup/ic_file1.png": "55214398b8abadcb97b6c8f0d2b7b73d",
"assets/packages/game_limbo/assets/imgs/setup/ic_paper1.png": "e671064851f11dcd586794f3b0c07486",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_download.png": "d1b26378a64a6be3e1c51b5100d7c484",
"assets/packages/game_limbo/assets/imgs/setup/ic_paper2.png": "98ddb1a4940f23c2fce52e7ea1ffe475",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_eye.png": "eb9f6cb32c6c5247d6fee5290ede6180",
"assets/packages/game_limbo/assets/imgs/setup/ic_paper.png": "4c5de63673f2d4a8e9c02b56863d2a1c",
"assets/packages/game_limbo/assets/imgs/setup/ic_check_update_fail.png": "111d7e0d5ef2a01b87a20b454609b1bb",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_focus.png": "658c4cc18b84777f729b7190d824fe2a",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_check.png": "dfc8bbe3113fbc6114003e4631769028",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_download_layer1.png": "f6897aa05b6fa2a747712e9e4a40c554",
"assets/packages/game_limbo/assets/imgs/setup/ic_center_circle.png": "ddebbf98f5811b935d9333269f740af6",
"assets/packages/game_limbo/assets/imgs/setup/ic_tag_download_layer2.png": "773072e4685dff81701f6d441d7be554",
"assets/packages/game_limbo/assets/imgs/ic_arrow_down.png": "84a5767a7800638bb7e5d5837139af76",
"assets/packages/game_limbo/assets/imgs/ic_check.png": "b9ba1c98ed648d1fcd19d1432e151cb7",
"assets/packages/game_limbo/assets/imgs/ic_wheel_indicator.png": "745ed50a10a38f044db1a27098d78b88",
"assets/packages/game_limbo/assets/langs/en.json": "97d8042e1756e0d54aba54be8e8cc010",
"assets/packages/game_limbo/assets/langs/zh_Hans.json": "45ad2ea66d636d3546c6dd85d0417fee",
"assets/packages/game_limbo/assets/langs/zh_Hant.json": "c87225cf640eb2e4b40afd9ff9ae6639",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "65e28a8e4e56fa9806b111f12702f2a9",
"assets/fonts/MaterialIcons-Regular.otf": "ef0e36a4aea581ad5518e685b13ce181",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
