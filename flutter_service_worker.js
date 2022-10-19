'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ef231777bd15dcaf12ba7ef56b6d177b",
".git/config": "d0e325bb683f5d1616164565ab3c4428",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "f579e3e6354bf8c89e68323614ad7db7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "312cab87b900a1fa871e6174a7d87290",
".git/logs/refs/heads/main": "312cab87b900a1fa871e6174a7d87290",
".git/logs/refs/remotes/origin/HEAD": "914f0ebd96b7b6b2bc0b53f21f5034ed",
".git/logs/refs/remotes/origin/main": "572f343ac9c6ecc0cac0f59e88d951e8",
".git/objects/00/d174589cff25af766d2b136736bbe8ce0324ca": "5efa543c7863c9bf04e86969e310f2f0",
".git/objects/0b/af5455bf786183b9da50944e08af83ce1334b1": "a8be50bdc20c97b4bf86502faf642eeb",
".git/objects/0d/b23e00256a69276bb447cab4949342d72d59e4": "dae7aa9e968b1f05c9c8a36c33afb0a5",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/81982689ead47e117f848682c38c1cdb5620ad": "fd2b11b37a544acfef1e3be67d3e892f",
".git/objects/1e/d3262ddf7878b54bf55e1cb7d02f2110e0e4bb": "c29daebf7a44e094510e21e932bfe914",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/2c/cbd1c8e3e70ca2694ddbeb941512bc25ee842c": "3a7e38656eb710c8c007ae5ca2088a74",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3a/62210bbdd594e36848cad8d3cb9b64116f24f5": "416bbaca535d28f58772f400d84f7b47",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/4c/42163443fecada14e639c7ceee56bcb2fe7cb1": "2f169b73bcec1424d6583630daac1d59",
".git/objects/54/5157256c74e66197d67270bb8eee955e3521c0": "ac14650f9353316d8e02b27bda61c6ca",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/9d/a8172f622e2fb5a19a38ed7997b098847db310": "78506312f1addbbc1008e7c3da75aaee",
".git/objects/a5/bf6966d8a8b74703192e44c4548fdeccbb9b76": "11cc90e4e4bbe601d7349dea893ab546",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b7/4c97e3fbe776e8323dc74a35256c5b0f489935": "2cf698506f48eb99941f0c980ef902f9",
".git/objects/b8/6e561e666604a5996faa8f8fd0465e1fcade99": "b7c6a0f8e4652108107bbdf9d61df68f",
".git/objects/ba/70086f296905491e78bb75d5e98a9f85614ab5": "0b5be399fdab046eb7c5ad5e3d777690",
".git/objects/cc/39e39725da821e7f2bd761367ec30f5ec181c2": "2fd47cbc6ff3a4a072922b6c3dae32b7",
".git/objects/e6/62b15638c74442f48c5cfb64fb535f3bf48a86": "5509b6860290d46606150844964ffad3",
".git/objects/e8/6e78d3703c171baa0d6b2f4c66b42c2cf92daf": "155bec1598f877280b7852dff20a0be3",
".git/objects/f5/7010a2961f8697ad1357ec06345c3467828454": "5ec1f88e2e18000e312502c7979908d9",
".git/objects/pack/pack-403cb578f0aee5f8fe213a9faeb346e307c2114b.idx": "ae9897906bc9f556512acafad5ed7a93",
".git/objects/pack/pack-403cb578f0aee5f8fe213a9faeb346e307c2114b.pack": "ba0a531dfcc4a1e3b4aa667d0db77928",
".git/packed-refs": "36df5dd6730cb56fa6123d082a131cab",
".git/refs/heads/main": "35674f7f03e60cc505b6004108e7c83e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "35674f7f03e60cc505b6004108e7c83e",
"assets/AssetManifest.json": "4e7b59f1a646990a2ef48086c8c3e74e",
"assets/assets/ecLogo.png": "e4280937a53069b8fb1e32342439ce3c",
"assets/assets/erLogo.png": "bf447931bd373fb4cc34bc7e853a6f51",
"assets/assets/speedOutLogo.png": "0a232f7f4ed5986e6fc7c52db109b318",
"assets/assets/splash.png": "c1befe7cf7b02eb046aa09bc9b6e310d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0eb9d31222a00e52bd712c595f4c0648",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "8be11d164c92b727b3cc01f90981c0be",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "a4e1349ed22c85970d7b112f3e0a12f7",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "557eb24530db3e0e7403f583fbe271e2",
"icons/Icon-192.png": "f98e1dcf20565ce9e330ae8528319f63",
"icons/Icon-512.png": "673ac7db21c5dd61203b2e8f8193ddd0",
"icons/Icon-maskable-192.png": "f98e1dcf20565ce9e330ae8528319f63",
"icons/Icon-maskable-512.png": "673ac7db21c5dd61203b2e8f8193ddd0",
"index.html": "61ece75d52ababe6a7b07b0335f95f70",
"/": "61ece75d52ababe6a7b07b0335f95f70",
"main.dart.js": "3f2475bebe1721c214fb572421baac83",
"manifest.json": "01c0104744dd514b3acd9898dd8a3435",
"splash/style.css": "b79225b9522d09629c04258399fc41b8",
"version.json": "6f8801fd76313e978ce24ba1ac423b1f"
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
