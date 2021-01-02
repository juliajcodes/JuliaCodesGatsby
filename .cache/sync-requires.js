const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/about.js"))),
  "component---src-pages-coffee-by-ben-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/coffeeByBen.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juliajohnson/JuliaCodesGatsby/src/pages/index.js")))
}

