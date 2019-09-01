module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "afterSign": "build/notarize.js",
        "appId": "net.corporateclash.mac",
        "copyright": "Copyright © 2019 Corporate Clash",
        "mac": {
          "category": "public.app-category.strategy-games",
          "minimumSystemVersion": "10.12.0",
          "entitlements": "build/entitlements.mac.plist",
          "entitlementsInherit": "build/entitlements.mac.plist",
          "hardenedRuntime": true,
          "gatekeeperAssess": false
        }
      }
    }
  }
}
