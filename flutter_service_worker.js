'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ddce269a1e3d054cae349621c198dd52",
".git/config": "8649695a203040599a327b30c1f3d110",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "267c6ea16db5c8194676c7ec15154023",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "09dd5797f91f00dcb952936c60a557cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6f656ac0afcb9d30d231a862d6b597e",
".git/logs/refs/heads/main": "4394b6a9e4a03f053bd4b2707509de47",
".git/logs/refs/remotes/origin/main": "fca18b94c76a7157b5e1ce340fb0c9f7",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/d42a8ca850115c76e39ef78139727f204ecee2": "0dad4788b3868ae069c58349f8fec16c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1f/8bfe712a12f2bf19bacef895e716820afa44a7": "26810b0471eda410aa15c8c4f4dce239",
".git/objects/20/e6904b7d328369213491c72497001e0fcfb56d": "550b967cf9639501944f47120fd0cfed",
".git/objects/22/1caa88a8c327f873bcf396a596ad2905104c3e": "35580b486c7dfb083191e4d4f9a74084",
".git/objects/23/517e8e7fd85a0fa0e9b4a162ae0b4c7de94cdd": "6efa3736458263ef95e5864f683a9e43",
".git/objects/29/0d141aa7a57445351fca91f6592f8fb5ff0260": "9122a51b6e03e2fe5f769375ad39bc4a",
".git/objects/2d/5a61797b8f03f33bd7ac29168682336b931931": "383d169fd53d9f8bb267dcee39a15053",
".git/objects/2d/8834bceff16e588b81652a021609719040dacb": "1c9485f812220d310247e84bb5faef66",
".git/objects/2f/d86987ccbc64cd19cfaa4887adc048d0e4525a": "969924bc369e044a5dd84738d2ecafbf",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/43/70a030fb23deca98304c35958916471ca87054": "b8381d49c849fcbd235a1649eb7a8fb7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/16c891ef9ab5683fa6cbba9a713aff07baaa93": "97298918b76cdce5809ae1aa1e2f9ad3",
".git/objects/54/cf2541d705d9043103b9f2304223eb1ecc0dd4": "c86b0c8d10a4817765adc0663315c10e",
".git/objects/60/5882376d0ea51fba27c739dd06f205194ffd38": "95415586a864cfd30ac6221ed44486fb",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6b/94d4bbec32b2158e78bf7d42318c8b0568b77a": "1f3a76a8647cfe68a79d77daf8a098b8",
".git/objects/6d/f5b3ca6ced7c358def18571a96b1bca5e5860d": "ea2fca005997925f173c2106ebfdfdcd",
".git/objects/76/2a65c2c6e7159216ec79c1b9bcbc0d10fcde36": "7b05e4cb54bfb395612818f02cf13253",
".git/objects/79/1c79d094b00e7ec0d6faea3bfa195202599cea": "b96f6ee27c07eda2436a25926f6a5e2d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/87c4ecd936b3b71605e9076b0ba44765cfde69": "f219eb0b82911522bc32c9bde91114d7",
".git/objects/8f/3d4add60a22e24cfb2ca6fdb7f0504ab831eb3": "6d40f77ca8f609574a521cfab652a8e7",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/99/633e58e56ba44a6bfd6ff25c27103c47fecb4e": "e9b6dfdc8c146e7f51bb5fdfcd1d4ca8",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/f9012db9bf15732d82bb111e348e8277954d68": "8a213e7925549ae55b0576ed9214bbe3",
".git/objects/a7/c6ccbfb6ae0b445ee68c276cf9799f7acaf54e": "10d1437a68e9ea2dafd2b5a4501597ff",
".git/objects/a8/72eef363f6f5adf69b5771d2d2fee89cc47f9d": "9c63df8ae97882721ed45d0732a83958",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/e19f6fb227a743be38c82551686a64877b0f12": "cc851d386a0698a3ea7967c8cf1166f6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/97c39e969fe7bb0f6f5aa0635a4f3f2b554e2e": "d811b9cf88d3d49e844f257a2641a467",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/6aabcff909dbb894c61c219da41981632d452e": "40ce01333280699f6708ead857fdf230",
".git/objects/b5/ac55d36708ee3a63ba85b2e50e4ab2fda2f7ce": "b2c768d411adde8f4577757ad10ad7f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/510399b2ee00726f1cc3b55ebc956e3ce0ee0b": "b4b9af189c91f0f0d7fdf124bce4339f",
".git/objects/c0/4e86f966e7e1a6aa035fa74f7411592d894836": "3446188eac2216f40275a713ddc3932a",
".git/objects/c1/f86a3f58eb4928fa951dc8597b6b78cf6a1b01": "c8f4f2c54666e0b87391c8bfa93db6bd",
".git/objects/c4/c72293cdf8247270c92888a90ea5330ff74b5f": "2c9b304d5429017fccde9903c5c2c9ca",
".git/objects/c9/cdae406888baeed159b08a3d9635ce4438bec2": "60c7ae76fd264a815f4e6b00ecf840eb",
".git/objects/cc/05dec51cecfe4bde4925347032c1a430424f6c": "98ae3491fd9f96d5d668d8c631ec76b6",
".git/objects/d3/9aa401e89969d5ff108e36c7abb4fcaa563fe3": "ae1f0a564631715a9c3458f3a9854f2a",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/e3/9cf4a0a249f4c56a1c6d8a74120dbcd52158f4": "ddf65f66d9c2a9acfbfd75da0ed52d4f",
".git/objects/e4/f5ebbaf1715a62196178d5a2c8532e061ec217": "bc272f963b541a56dd53b701c9c98765",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/063b6ccee6fcce961c52fb4ed28ecb829934c7": "5e2aa85ab4b18da5942e2b6d166e32a2",
".git/objects/ea/8b3b49a47e79b3e2f782640993a362b8503e1d": "7daee834388d6e8802d4288792912e90",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/6192ec654ff56b2a9d74407577ca86d3011690": "aacbb0a7fb49d2e197cecb0507f0f34d",
".git/objects/f7/c0d15047e6af4693deef8cb4e5ece0325f478a": "de9ac6073edbd5d0ac6a17b5ad6855c3",
".git/objects/fa/714575f650a997f53518e8eca8a20aab4a44ae": "cdedc701fb6e3777b437b00cbc20068f",
".git/objects/fc/fdbf43c11c3ac0f47846aa58e5ead07caa805d": "29830fe181942b73517b219512acb4a3",
".git/refs/heads/main": "6bdba49d398256d54e7d309505efb65d",
".git/refs/remotes/origin/main": "6bdba49d398256d54e7d309505efb65d",
"assets/AssetManifest.json": "05d03532f057da3e603b223f6ea6682b",
"assets/assets/ecLogo.png": "e4280937a53069b8fb1e32342439ce3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4c3e6bbebd91b25cc17760b3f40bfc77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67e36081e587b5c1de27e79144bc5d29",
"/": "67e36081e587b5c1de27e79144bc5d29",
"main.dart.js": "49c29ae475378762abaae00bad7518f4",
"manifest.json": "01c0104744dd514b3acd9898dd8a3435",
"splash/style.css": "614f917cd810e402d36d7e03f6005ba9",
"version.json": "fef4a83f79a65a4694751ec893dcb8e7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
