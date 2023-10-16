
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kjpalmer24/GDT/wgtb-site-beta/wgtb/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kjpalmer24/GDT/wgtb-site-beta/wgtb/src/pages/404.js")),
  "component---src-pages-homepage-js": preferDefault(require("/Users/kjpalmer24/GDT/wgtb-site-beta/wgtb/src/pages/homepage.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kjpalmer24/GDT/wgtb-site-beta/wgtb/src/pages/index.js"))
}

