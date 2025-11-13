'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "94d15fc503ce3034ec5f14cacc1b8860",
"version.json": "86ea2d4591f8ed82916224dd72806b14",
"index.html": "ae81d619baaf601b2399b74e9c3e098b",
"/": "ae81d619baaf601b2399b74e9c3e098b",
"main.dart.js": "3503f5abff732587150637d57d9b8f0d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"liberty.png": "b5f2cf6c65a96529df4b65026f7dd018",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c533028b183698f6dbc838e546e43840",
"assets/AssetManifest.json": "71a0163f8a4b78e29b1286fb04e918fa",
"assets/NOTICES": "8fa83609b632559f3e2df33e7298756d",
"assets/FontManifest.json": "0c911362923fe6afdf620cbe032bb0ec",
"assets/AssetManifest.bin.json": "37aeeccecf7837b12a80af6144c73c4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ecdcdefb2d1cc8c41a08fd2b9ccbb78",
"assets/fonts/MaterialIcons-Regular.otf": "e55d2c758f3cecf4df8279d8607b7687",
"assets/assets/images/ic_vn.webp": "27da9424013ea673a7ebd732abf5859e",
"assets/assets/images/ic_search.webp": "889b7505d3a07f8f94b897940d56718b",
"assets/assets/images/ic_vector_down.svg": "5bb4c4444116ee9f3366f33c22f1bffc",
"assets/assets/images/img_user.png": "ee6da3f1b3bb30c0791253cc177d85df",
"assets/assets/images/ic_time.svg": "673e92d225217b9cc834389a8c2394e5",
"assets/assets/images/ic_cambodia.webp": "888ffe89fc5b39d935b7981413edb3ef",
"assets/assets/images/ic_usa.png": "b05a2ed56db00ab5f5fdf159195dfd16",
"assets/assets/images/ic_measure.png": "bb0ed78e7248a63585d24e852ee01870",
"assets/assets/images/ic_location.webp": "453046bc830a710267ebcdae55251288",
"assets/assets/images/cambodia.png": "4dbfb8295d72c8ecbf25a2bd4511b609",
"assets/assets/images/ic_x.svg": "acdeb9b355ac5d980d4e26dc3c0df1d4",
"assets/assets/images/ic_info.svg": "bb5655c5774056a0608ab699f7a66388",
"assets/assets/images/ic_wifi.svg": "d09d3f4d5ec88e5e37ab84cf39c5c7ff",
"assets/assets/images/background_contact.png": "9a87619248e3ae2072da3d629e088cd2",
"assets/assets/images/ic_history.svg": "0ba034a34787de7e6f7efd426733d6ac",
"assets/assets/images/security_blue.png": "912ee72cb0e5f37fadf5821ce53caee8",
"assets/assets/images/ic_total.webp": "df4918863fc482196bd9e272d8b5b610",
"assets/assets/images/background_tutorial.webp": "2690d75619e8f953150d963e5ffc5a1f",
"assets/assets/images/ic_measure.webp": "182cbcca2d95d74b08f4b263f2860d32",
"assets/assets/images/ic_add.svg": "b076025405ba61eafad1baae4f23f89b",
"assets/assets/images/ic_location.png": "72b64bef77402b3fe5de14d1b9449e68",
"assets/assets/images/ic_location.svg": "711b9ccd3c323c0df340a1cbcd0c8fd6",
"assets/assets/images/ic_wifi_off.svg": "b4b8792fff1b95a0199f08fdd1f9c4bb",
"assets/assets/images/ic_user.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/images/ic_setting.svg": "d667e4ce5544805e45afa58405e750f9",
"assets/assets/images/ic_face.svg": "650968721e178be22ff1734164ddd7aa",
"assets/assets/images/fi2_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/images/ic_uncheck.svg": "737477fe614cdcdeaaf01e47da6a6777",
"assets/assets/images/ic_total.png": "f6cbfc368e7d06dfbdc0e5b43622c340",
"assets/assets/images/ic_reload.svg": "8399399bbf70b84bd696d3f81193e8d8",
"assets/assets/images/ic_list.svg": "a8645196d00eca01bacf750591d90fb4",
"assets/assets/images/ic_usa.webp": "bf96a7dc6aa2ad31b245f91f298e2dc6",
"assets/assets/images/avatar.webp": "7e78e7e1101ed6b4c1ff08a9952ec290",
"assets/assets/images/ic_calendar.svg": "ab5bf7fdc253c05469a43ed38034c5d8",
"assets/assets/images/face.webp": "7d6abfe994191729cda502211c1827c3",
"assets/assets/images/img_user.webp": "bc9906a3815d6e5b7f19f81907c1eed6",
"assets/assets/images/logo.webp": "9c7524c63e65a425a69dcc64b5e40709",
"assets/assets/images/ic_detail.svg": "49975c6a60a1556c4d470aea8ec5916f",
"assets/assets/images/security_blue.webp": "bc5ecafcff746082820e4f8c7d52d302",
"assets/assets/images/ic_trash.svg": "40b30b0ce00c97033e9556de516777aa",
"assets/assets/images/face.png": "73231f5bcbf3a10b7e06699e5784505c",
"assets/assets/images/ic_usa.svg": "67184f510183977be4a7a3ae8db90304",
"assets/assets/images/ic_down.svg": "3eb9792470fd2299feea69cd5715ec40",
"assets/assets/images/ic_statistics.webp": "cfd7ab9bff662059165e6984d8dd5345",
"assets/assets/images/background_login.webp": "3c5677de29cd38a951a2ee7716f24be7",
"assets/assets/images/ic_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/images/avatar.png": "aa0ba04d7b5c534acbcf55de2dd51b85",
"assets/assets/images/ic_cambodia.png": "6dbaa0fb2c743b683b368d9cde1d675a",
"assets/assets/images/background_login.png": "8a1250b2f4b84dec07c027fd53e5e3a0",
"assets/assets/images/ic_group.svg": "9a88ca1dee5d3ebd634c0cefe0e21b88",
"assets/assets/images/ic_x_circle.svg": "8bfe780506dc4f9ca3591700222b6aea",
"assets/assets/images/logo.png": "b5f2cf6c65a96529df4b65026f7dd018",
"assets/assets/images/background_tutorial.png": "3192fd1399c4792d3e59d4cd043e3d6d",
"assets/assets/images/ic_search.png": "e243770bac80fc5f7f072d659086ca94",
"assets/assets/images/fi_wifi.svg": "fd4485a5b548b714269499711aca5298",
"assets/assets/images/ic_statistics.png": "7ea9dca184479a11afea3dcb971d5d00",
"assets/assets/images/device.webp": "0aa132b0247fb8855397326c6419f371",
"assets/assets/images/ic_up.svg": "f65af86f7cb81fb935283df4be551e0f",
"assets/assets/images/cambodia.webp": "3aab76e232df5c71091052803c17ee7c",
"assets/assets/images/device.png": "9f91477fec44d29efc05903d2b90b2df",
"assets/assets/images/ic_logo.svg": "77a48f75da195fd1f72d88c89719998f",
"assets/assets/images/ic_checked.svg": "06c0b78fbe885092ffc952ce0097778f",
"assets/assets/images/ic_dashboard.svg": "d0c194d739c8a5567acf9d6c526dd6b8",
"assets/assets/images/ic_system.svg": "71c23f9739c2a86ca7915a932e033422",
"assets/assets/images/ic_devices.svg": "bc9a1d7149b0519595358e31abc93e43",
"assets/assets/images/device_off.webp": "dd9d4608c841a387437ebec53d6cb2c8",
"assets/assets/images/ic_edit.svg": "22230effd0777adacc0c32aae672201e",
"assets/assets/images/ic_export.svg": "94893722b823cd4402ff8198564ef1c3",
"assets/assets/images/ic_logout.svg": "d401094458162325bef07e175cc0ef24",
"assets/assets/images/ic_empty.svg": "fe8588cfd1a85f20fa7935a28b385d58",
"assets/assets/images/ic_rounded_vector.svg": "403038495d6fe301bcb0c0140bd81e68",
"assets/assets/images/background_contact.webp": "ab60b9a6da377663a5d043d3f6461219",
"assets/assets/images/device_off.png": "700f3a4199b2b45b7e9fa09f68e388fe",
"assets/assets/icons/ic_vector_down.svg": "5bb4c4444116ee9f3366f33c22f1bffc",
"assets/assets/icons/ic_time.svg": "673e92d225217b9cc834389a8c2394e5",
"assets/assets/icons/ic_x.svg": "acdeb9b355ac5d980d4e26dc3c0df1d4",
"assets/assets/icons/ic_info.svg": "bb5655c5774056a0608ab699f7a66388",
"assets/assets/icons/ic_wifi.svg": "d09d3f4d5ec88e5e37ab84cf39c5c7ff",
"assets/assets/icons/ic_history.svg": "0ba034a34787de7e6f7efd426733d6ac",
"assets/assets/icons/ic_add.svg": "b076025405ba61eafad1baae4f23f89b",
"assets/assets/icons/ic_location.svg": "711b9ccd3c323c0df340a1cbcd0c8fd6",
"assets/assets/icons/ic_wifi_off.svg": "b4b8792fff1b95a0199f08fdd1f9c4bb",
"assets/assets/icons/ic_user.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/icons/ic_setting.svg": "d667e4ce5544805e45afa58405e750f9",
"assets/assets/icons/ic_face.svg": "650968721e178be22ff1734164ddd7aa",
"assets/assets/icons/fi2_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/icons/ic_uncheck.svg": "737477fe614cdcdeaaf01e47da6a6777",
"assets/assets/icons/ic_reload.svg": "8399399bbf70b84bd696d3f81193e8d8",
"assets/assets/icons/ic_list.svg": "a8645196d00eca01bacf750591d90fb4",
"assets/assets/icons/ic_calendar.svg": "ab5bf7fdc253c05469a43ed38034c5d8",
"assets/assets/icons/ic_detail.svg": "49975c6a60a1556c4d470aea8ec5916f",
"assets/assets/icons/ic_trash.svg": "40b30b0ce00c97033e9556de516777aa",
"assets/assets/icons/ic_usa.svg": "67184f510183977be4a7a3ae8db90304",
"assets/assets/icons/ic_down.svg": "3eb9792470fd2299feea69cd5715ec40",
"assets/assets/icons/ic_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/icons/ic_group.svg": "9a88ca1dee5d3ebd634c0cefe0e21b88",
"assets/assets/icons/ic_x_circle.svg": "8bfe780506dc4f9ca3591700222b6aea",
"assets/assets/icons/fi_wifi.svg": "fd4485a5b548b714269499711aca5298",
"assets/assets/icons/ic_up.svg": "f65af86f7cb81fb935283df4be551e0f",
"assets/assets/icons/ic_logo.svg": "77a48f75da195fd1f72d88c89719998f",
"assets/assets/icons/ic_checked.svg": "06c0b78fbe885092ffc952ce0097778f",
"assets/assets/icons/ic_dashboard.svg": "d0c194d739c8a5567acf9d6c526dd6b8",
"assets/assets/icons/ic_system.svg": "71c23f9739c2a86ca7915a932e033422",
"assets/assets/icons/ic_devices.svg": "bc9a1d7149b0519595358e31abc93e43",
"assets/assets/icons/ic_edit.svg": "22230effd0777adacc0c32aae672201e",
"assets/assets/icons/ic_export.svg": "94893722b823cd4402ff8198564ef1c3",
"assets/assets/icons/ic_logout.svg": "d401094458162325bef07e175cc0ef24",
"assets/assets/icons/ic_empty.svg": "fe8588cfd1a85f20fa7935a28b385d58",
"assets/assets/icons/ic_rounded_vector.svg": "403038495d6fe301bcb0c0140bd81e68",
"assets/assets/lottie/loading.json": "8c99d79a25287766f7e3f4ebe036a53a",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Khmer-Regular.ttf": "5b86fd3cc30e54bfe3d1627ff59e66f8",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/.lang/en.json": "9bb7b4781d9a860aa33dd245b81e61c8",
"assets/assets/.lang/vi.json": "a3849a2f3029c35f33a53989c52fb74a",
"assets/assets/gif/not_found.gif": "c8bc1eb073f225dde3d684b20b2a399a",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
