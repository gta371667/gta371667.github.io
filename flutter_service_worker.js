'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06e15cf9abe8d2cc6a75f81ef057ec5b",
"version.json": "9eb48523da70cbdc427f734ba8fac43e",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/RunnerTests/RunnerTests.swift": "97d3a20fd20a063c192e886d1822b4a8",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"macos/Runner/Configs/AppInfo.xcconfig": "5f13242d838d7ba787d31543a99a0361",
"macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"macos/Runner/AppDelegate.swift": "43e630f8974625a25df2af9653bb6ac4",
"macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"macos/Runner.xcodeproj/project.pbxproj": "9a62a924f73c736a604987d335a1c062",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "026db54045e78732594255c9de4e8197",
"macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "332b9652976ed05fb8985893939d797f",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "0e336f57bc66e0ec7545036b470d7c40",
"index.html": "0ff437d2721fb011362172a6b65cdd33",
"/": "0ff437d2721fb011362172a6b65cdd33",
"test/widget_test.dart": "cb2dd7128b72a5807c36cba95bd6bbc4",
"main.dart.js": "73ea48ca9bfde0a32c9fa3e581b6e62a",
"web/index.html": "9befea0a07395c670c7e38cc8fd7d67d",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"pubspec.lock": "13778672087e93438b8b7cc506ac51a5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "e25ceb4176f3b7d42390b4f75b02c720",
"ios/Runner.xcodeproj/project.pbxproj": "e798adcc7368f2ce020a041a9a0ff9d1",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ffac881d52d43c06cc1b45b6aeabc194",
"ios/Flutter/flutter_export_environment.sh": "1944e43372f34c60eac3095d7df126c2",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"ios/Flutter/Generated.xcconfig": "25004625ad05cd5698a62bc10b4b2f53",
"README.md": "ac18482fc28234fc361bcd7776f73e29",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "97a2dba55d8b6efe1841a02d4b5a9476",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/CMakeLists.txt": "a76fcaf519749b6cebb60716ccf198ba",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/my_application.cc": "c4a85ac462a00b924c82e3699eea1c7a",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"android/app/build.gradle": "abb51eec2fd17fbc2986fa536c2c942f",
"android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "ef16c313fe300afbac3b66cf4ef9a424",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "c7db54b36dace1e3b8f26b1bc713377a",
"android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/local.properties": "52f9b15f698db44835af077b99e3644a",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "869b43a4017378d9be13b7e3deeec192",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/build.gradle": "8fea88f0221dc81c23b0e4c55c169ccc",
"android/gradle.properties": "5fc95ddf5b8ad7d23acec4c364c26487",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/settings.gradle": "f2bd1a19983eddeeb87a4621af74ebf4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"lib/main.dart": "86b0318255916c11ea138782b971c22e",
"analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
".dart_tool/package_config.json": "b8dab25f661378757d624944bf9336d4",
".dart_tool/extension_discovery/README.md": "606241196f08642dcc9f7acef0d2d8da",
".dart_tool/extension_discovery/devtools.json": "afcafc3d0feb52770dec8502c9637406",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config_subset": "8e3ee5b8244d97978e4bd4df5c29664b",
".dart_tool/version": "6aa17db508d68699d9c64469a2826f60",
"windows/CMakeLists.txt": "94af68136e6e5b46aa0042682f5bac0a",
"windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/utils.cpp": "9b5697b276c8ad67a02ec12ad2c09851",
"windows/runner/runner.exe.manifest": "81f2aed52d431763e83890f3d17da92a",
"windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f",
"windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/Runner.rc": "2aa60a7962c233f48b663ef816924269",
"windows/runner/main.cpp": "3a8985ef77836fcfa1aaee2376b0394a",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"assets/AssetManifest.json": "de1fe37cf005970314760a4d67308bd4",
"assets/NOTICES": "1cc6156db8bf28742bd64523cf1cc669",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "020c6c96615547e89376881307d2ea88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/game_dice/assets/res.zip": "67362709227601001760ae831fc1cfd2",
"assets/packages/game_dice/assets/music/slider_win.mp3": "1634a44fd8c95ef13349306ce382e059",
"assets/packages/game_dice/assets/music/slider_change.mp3": "552451cf0e723d359d711cf26a5c302b",
"assets/packages/game_dice/assets/res/langs/en.json": "7c49a86286235194338581f60ef1e6ce",
"assets/packages/game_dice/assets/res/langs/zh_Hant.json": "992e9345a91ae4a1be68018d45357912",
"assets/packages/game_dice/assets/res/version": "3980fbbc351d4a05c1eee46d6048e869",
"assets/packages/game_dice/assets/imgs/ic_triangle_error.png": "7dd3a8108a27539c2aafb0a1bdb1854d",
"assets/packages/game_dice/assets/langs/en.json": "5a5926915d9947ab34b3dc36cbce8841",
"assets/packages/game_dice/assets/langs/zh_Hans.json": "55858fef4bb452f687be22c7c6582f9d",
"assets/packages/game_dice/assets/langs/zh_Hant.json": "5d2303455daf93085df1d696882e5181",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d59d71cf10a3b3bd36ab0560ab2d0e9e",
"assets/fonts/MaterialIcons-Regular.otf": "43e4b0966f3a31cf4dc43fdb3c62769b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "b163c43976f493c60ed08d9e65019599",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"};
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
