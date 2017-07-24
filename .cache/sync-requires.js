// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-counter-js": preferDefault(require("/Users/cbr/program/my-first-gatsby-site/src/pages/counter.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/cbr/program/my-first-gatsby-site/src/pages/index.js")),
  "page-component---src-pages-my-second-gatsby-page-js": preferDefault(require("/Users/cbr/program/my-first-gatsby-site/src/pages/my-second-gatsby-page.js"))
}

exports.json = {
  "counter.json": require("/Users/cbr/program/my-first-gatsby-site/.cache/json/counter.json"),
  "index.json": require("/Users/cbr/program/my-first-gatsby-site/.cache/json/index.json"),
  "my-second-gatsby-page.json": require("/Users/cbr/program/my-first-gatsby-site/.cache/json/my-second-gatsby-page.json")
}

exports.layouts = {

}