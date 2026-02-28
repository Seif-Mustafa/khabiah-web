'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b686488f3ec3b37790c2f2bbe3321152",
"assets/AssetManifest.bin.json": "9979a6c1230893018c12bff382ed2053",
"assets/AssetManifest.json": "7a89d6215325fe5b4aafe48548037e22",
"assets/assets/images/bg1.jpeg": "e3842f37c4bf29f662d5ce40947eab60",
"assets/assets/images/bg2.jpg": "567224d7ead603de8747c7773a4cd128",
"assets/assets/images/bg3.png": "a6459d626402e843f103dfda2e9c65b2",
"assets/assets/images/bg4.jpeg": "40f9f082fddbcd7169d5fbe08e923940",
"assets/assets/images/bg5.png": "341096eca6e62cd51bb9b23d3670d0f6",
"assets/assets/images/frame1.png": "a8f62b60f7711d034d2d8a45f8d83672",
"assets/assets/images/frame2.png": "effda1d64658ea275bce91e613ab04ea",
"assets/assets/images/frame3.png": "1474178da230dcf07ed762d4100adf13",
"assets/assets/images/frame4.png": "a5a1489946cd9ab82fde27e76e2ddb2d",
"assets/assets/images/frame5.png": "da583a07511d1597b53f4e89a2360170",
"assets/assets/images/harvest_record.png": "537cbcd7f6413e152f49047e3cc4cc2e",
"assets/assets/images/logo.png": "ec237c856d03052d34031892515c3fe5",
"assets/assets/images/main_page.png": "1327f79edaad78b91dc14b2c387b10e9",
"assets/assets/images/map.png": "77a9799b87eea3a4c25119058da01c1b",
"assets/assets/images/morning%25201.jpeg": "46bb8f5c242a26873646afacc9bcb8c0",
"assets/assets/images/morning%252010.jpeg": "e01a2853176fa5e2af8fd9b3e69ebbce",
"assets/assets/images/morning%25202.jpeg": "ea549113c33f31f068b374480ddeb245",
"assets/assets/images/morning%25203.jpeg": "83c697523111d5278966cc52374bbbb3",
"assets/assets/images/morning%25204.jpeg": "0a7493b833fcaf06b07989b0af8cf5a3",
"assets/assets/images/morning%25205.jpeg": "b319785195eebd506e53a0c3c5d28d87",
"assets/assets/images/morning%25206.jpeg": "5f27b525ec28392274f5666c9b637445",
"assets/assets/images/morning%25207.jpeg": "d91ecc99d59c5486754bf08eea57250c",
"assets/assets/images/morning%25208.jpeg": "2e79055f99118c02d260cef6981d31a3",
"assets/assets/images/morning%25209.jpeg": "65a5a6fb010775c8be78110bac45807b",
"assets/assets/images/navbar_bg.png": "495fb043c4f9b4c8ffc7799c211c47cf",
"assets/assets/images/neighbours.png": "38337a4256e0fe361b3b4938196f4364",
"assets/assets/images/night%25201.jpeg": "68ed4a630b4dca824a5bb29fbeab9839",
"assets/assets/images/night%25202.jpeg": "471b131d8fbeb7b396a369f1b38cb5bd",
"assets/assets/images/night%25203.jpeg": "5e358968f8d854ce47dff4df554c6219",
"assets/assets/images/palm.png": "49b953e7ad09ccbf354dab24968c6b4b",
"assets/assets/images/person1.png": "8ea93e87beb119397d36f5320dcf5f77",
"assets/assets/images/plant.png": "8d9c69e4de4ad5694eb49946b4109672",
"assets/assets/images/righteous_councils.png": "52ac429d8231a8fa16d278745076f1e5",
"assets/assets/images/store.png": "3085939e0d3e220ad4077a9ee04ef6a4",
"assets/assets/images/text1.png": "3b08964d64aa09ed2f575f8e4045cbd0",
"assets/assets/images/the_winner_road.png": "65bcf78f847441a2b57f0c88383e07f7",
"assets/assets/images/todays_harvest.png": "90027a61ba654226824f0b696f1f47a0",
"assets/assets/images/unknown_person.png": "ef6575a4693ea367bf503a5e11e0958a",
"assets/assets/translations/ar.json": "7dc25aa3435f8c7ebaf273a005f517df",
"assets/assets/translations/en.json": "3ddf47a8d28c0ee0afb9c6ef868af03b",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "3916bb93569bef5166275e50ac6fe284",
"assets/NOTICES": "cb4612ab4e4df47ad65445aa38e46667",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2c7751cfac8e25e6e0cf062af3ba697e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "69984892b59734c3d278b4e393f79e49",
"/": "69984892b59734c3d278b4e393f79e49",
"main.dart.js": "cd2514b144401c50e453a4b328e6056c",
"manifest.json": "b809dffc1c045a408296056589fa8313",
"version.json": "a656fcd9f2c3614bbcdf2bfcdbfc4224"};
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
