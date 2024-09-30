'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d2882cf4b3d715e0f593d403ee708459",
"assets/AssetManifest.bin.json": "1ef141ae6f98ed93accf8ba2f0f8f105",
"assets/AssetManifest.json": "b4c73494727b6663de2cd003fc8b306b",
"assets/assets/2.png": "b2db9215e0dc11afb23dbc11b8f54260",
"assets/assets/Animation%2520-%25201724314140358.json": "fda8d7c4e9bf3d49df504bb4f3373fd7",
"assets/assets/Animation%2520-%25201724325576515.json": "2b606600fee0731a48df538a5b7caf9a",
"assets/assets/Animation%2520-%25201726126516376.json": "a75b6c1f8b7f44a4a9c689fe0db60610",
"assets/assets/Animation%2520-%25201726126999311.json": "5522520b2558346c18264d75044cebbf",
"assets/assets/Animation%2520-%25201726127853143.json": "df7c91828755a2fe77bd6dafaa9a82a2",
"assets/assets/Animation%2520-%25201726127977217.json": "e5fe0fe2cc34f225ae740e487c4b9482",
"assets/assets/Animation%2520-%25201726129361128.json": "a204aa681e4dfb4638ef51091f3c789a",
"assets/assets/Animation%2520-%25201726130849252.json": "402c003d81255c11b459c570d23f590c",
"assets/assets/Animation%2520-%25201726131898746.json": "1a3c076801980e62594a4d999faf7ebb",
"assets/assets/Animation%2520-%25201726133538113.json": "e186d5a45bcae79b012b9cdfe59998a2",
"assets/assets/Animation%2520-%25201726134480571.json": "c967d00481ea0bd930e742d07890e79b",
"assets/assets/Animation%2520-%25201726135056939.json": "9c5816b4eef43be123b02814ae5953e9",
"assets/assets/background-2.png": "490d2a692d5d9853aeca3ffe0ec76d4c",
"assets/assets/background.png": "a5c631af551d21d3683a6a9e4c51cbf5",
"assets/assets/Bean%2520Eater@1x-1.0s-200px-200px.json": "523607fd05e2208c6fa3bd43be759c5d",
"assets/assets/business.png": "95cbd36a84f48d3016a7068563461333",
"assets/assets/calendar.png": "4d9c7e7273bd0c6b679f0d0a48cd5f15",
"assets/assets/Double%2520Ring@1x-1.0s-200px-200px.json": "42499a64829c1d4a3f703b0d115d1660",
"assets/assets/employee.png": "e9d3c9ad06474bd0285cfb720dc2ef81",
"assets/assets/exit.png": "b4e27deb67091443e47c69e94ac13d38",
"assets/assets/hr-transformed.png": "6637989aeb8c2fe309776d572dbb4e94",
"assets/assets/images.png": "04be46930191147930607075f0cad6da",
"assets/assets/immigration.png": "2e3ab311be558f26c927c0c1b96b38a3",
"assets/assets/job-application.png": "f3057ad57a6cbf69fea8f1f127c59a21",
"assets/assets/leave.png": "d9ebc01aa61d99de0466cdba29835b12",
"assets/assets/login-concept-removebg-preview.png": "1364aa64217594ef84cbc0a05d4963e5",
"assets/assets/logo-removebg%2520(1).png": "759a0b960688989bc4d465f54bda3ad7",
"assets/assets/logo-removebg.png": "759a0b960688989bc4d465f54bda3ad7",
"assets/assets/logo.png": "7aa0056343ebc766378dd949dfbd55f5",
"assets/assets/Mada.png": "4d3a90c1c0018a2e0500a2611df482e6",
"assets/assets/Meowing-cat-noise.mp3": "6d62ff551a9865cce510ce6c4d20ed4e",
"assets/assets/running.png": "006985e82e6068a2b6643037ed78491e",
"assets/assets/salary%2520(1).png": "d342f34b64a6570cae179cdd1125c2b6",
"assets/assets/salary.png": "67e9dc6c770953bb5a5008fc13778075",
"assets/assets/Signature.jpg": "ab3dbea9a4d30c55bf78f9bb5b911e6f",
"assets/assets/stamp.png": "3e5e4b4eda8b48559ac509ccc0ba4cb6",
"assets/assets/staringpage.png": "4d70152d1de5b98aeb4ec7d4f6ee037e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7bd6e12c1b317291bb194b2fd8c612a9",
"assets/NOTICES": "62cbd6de65722c6b22d59f2d10a70104",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1e5c8475f32b7f7dd8aa62e7a26c7f22",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "072829772af7617ec250d2eb56944123",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a88c9d7827f6489a2aa8db8208fd5094",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dc263d07aafa2b2842fcd3d0f1869445",
"/": "dc263d07aafa2b2842fcd3d0f1869445",
"main.dart.js": "fea3179b19805f63753ccff524ccc35b",
"manifest.json": "9a98eea0143f020c06a6e7288d0dbec5",
"version.json": "5d3aea190358117c8796c78b52b938c5"};
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
