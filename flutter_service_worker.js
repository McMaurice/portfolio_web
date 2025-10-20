'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c507e36238482414f6cdfa6a738ba47",
"version.json": "b6c2da712505c7c8b85d33ea50fdccce",
"index.html": "3d489c7ea7c6f28b15d9fe1c13b7ec52",
"/": "3d489c7ea7c6f28b15d9fe1c13b7ec52",
"main.dart.js": "ca55a309efeae6a45ebe246a4453e36f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d6937d0162251cafc3b8a926f7a30eca",
"assets/AssetManifest.json": "21b66951434696fcea470404be5185cb",
"assets/NOTICES": "b5e1159f2012dea38236efa6907e02bd",
"assets/FontManifest.json": "07da357f1f636a449900bde6f7de338a",
"assets/AssetManifest.bin.json": "4123ca0f6012804d9eae4ba715ae9107",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "deb06b6c5890c6a8f855b1599d5b714d",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "cda93a11e9bb9d502741e643cac44f7b",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "93b1d5ff9728ac1c2c060e342dd02963",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9bcbbe42a9ebd0533443ee161af31516",
"assets/fonts/MaterialIcons-Regular.otf": "695db39b45696147ef9a0f4921654e57",
"assets/assets/profile_img.jpg": "b8389421ab8d1588a4572c6c2b90ddbe",
"assets/assets/topline.jpg": "b78e8b8765f5719fe429b1e3dc290462",
"assets/assets/projects/remindme/4.jpg": "6ae4fd3ef03b8a4d76cbeee21ca19129",
"assets/assets/projects/remindme/5.jpg": "2e23a55919d0950cb7e41b96f5d1b7ac",
"assets/assets/projects/remindme/6.jpg": "46c53c13b9bb07bc27de3c5dd3b63a00",
"assets/assets/projects/remindme/2.jpg": "b3a45338ff4281c99edff292945be671",
"assets/assets/projects/remindme/3.jpg": "4d1cef101f3b8ff35bb7a206c0c4c431",
"assets/assets/projects/remindme/1.jpg": "2c640a81e94e227b1f6e70bef7a86968",
"assets/assets/projects/calculator/4.jpg": "6dc156cedcb6a63a2bb752a93aa98024",
"assets/assets/projects/calculator/2.jpg": "dfb8e4995ce407a90cb7d392bb462c47",
"assets/assets/projects/calculator/3.jpg": "db8295886cfb7e9eb19802716fde647c",
"assets/assets/projects/calculator/1.jpg": "9da1d1c0b6927648acd909f36007dcfa",
"assets/assets/projects/rosary/4.jpg": "0e70f5f38403e97975f1e481dce3692c",
"assets/assets/projects/rosary/5.jpg": "17864a12c18f951e51dd44dd903052ba",
"assets/assets/projects/rosary/2.jpg": "0a541cd5152cf340b51cf0f1bd357343",
"assets/assets/projects/rosary/3.jpg": "551ebe27554c9aa13d34b4a382b39e15",
"assets/assets/projects/rosary/1.jpg": "e62072bcd0e0ffc1e35b496daa6f7ad6",
"assets/assets/projects/hero_manager/4.jpg": "afc2dedcffbf418521fd9478487baeaf",
"assets/assets/projects/hero_manager/5.jpg": "1c47132d2e031ba0f868eaa4c143a4b1",
"assets/assets/projects/hero_manager/2.jpg": "0e2eac14dbf4afb8caaeca773ade68f4",
"assets/assets/projects/hero_manager/3.jpg": "4dd9b18d72641bf32890ff2c28d00b63",
"assets/assets/projects/hero_manager/1.jpg": "ab6af58334657b923ca7e09f69d61ed4",
"assets/assets/projects/kiddies/4.jpg": "05eedfb2bfcbea5a34a51f8008d19ff3",
"assets/assets/projects/kiddies/2.jpg": "5aef283291a6ff28f4a9df95d02619d8",
"assets/assets/projects/kiddies/3.jpg": "fd623c31a7125fe69fe8963e86c2bfcc",
"assets/assets/projects/kiddies/1.jpg": "d6aca37232b05c093bee4d90a85d524f",
"assets/assets/resume.pdf": "2e88edfc62a69c0736d4261b9aec246e",
"assets/assets/upwork.jpg": "8b6276631c76b53c0df8644029cd1fd3",
"assets/assets/icons/xcode.png": "3615f0fb487a35976c39576ca9a7bb80",
"assets/assets/icons/git.png": "fcec376b72e53a64ae4df80ed1e30135",
"assets/assets/icons/python.png": "ad959e232f1eee87d76a9a9f27240665",
"assets/assets/icons/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/icons/github.png": "86b0378b6e5205a7525f9919a3c15a82",
"assets/assets/icons/firebase.png": "b10a7ae05437df07db0bbc006a511e5f",
"assets/assets/icons/vscode.png": "43ad39a977665ece2f8066f61d8ded45",
"assets/assets/icons/android_studio.png": "10332298aac2f028ea0cc09168d5e194",
"assets/assets/icons/snapseed.png": "4bf95ece387c8a39e6c884b1a4c88926",
"assets/assets/icons/html.png": "74f2b85604d35a8022884f5b35619dd8",
"assets/assets/icons/swift.png": "7d678a7e4ba7bcb952143487a1d737fa",
"assets/assets/icons/microsoft_suite.png": "86f38b8863b80a24b400ae6fe19ac83e",
"assets/assets/icons/swiftui.png": "d499b3540700244872e181b12bfe1993",
"assets/assets/icons/c.png": "8c42fc6664a8018f6b2c91275c3ef00e",
"assets/assets/icons/photoshop.png": "ca120226be7e304f785ef88d6a71acd9",
"assets/assets/icons/dart.png": "75566a02b5bef2aa0a7425a79cb8655c",
"assets/assets/icons/gimp.png": "0d0e4f9ecf8ac9ee46c830ec097a240b",
"assets/assets/pop.png": "2390570eb34f6dd7b3bf1a373e49ee3f",
"assets/assets/badges/firebase_flutter.png": "ef521f63e4e2dc7dbc1541dbf649e1b5",
"assets/assets/badges/intro_flutter.png": "b19f6529beebe202a46a83d78962c2d5",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
