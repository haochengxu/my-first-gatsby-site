// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-counter-js": require("gatsby-module-loader?name=page-component---src-pages-counter-js!/Users/cbr/program/my-first-gatsby-site/src/pages/counter.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/cbr/program/my-first-gatsby-site/src/pages/index.js"),
  "page-component---src-pages-my-second-gatsby-page-js": require("gatsby-module-loader?name=page-component---src-pages-my-second-gatsby-page-js!/Users/cbr/program/my-first-gatsby-site/src/pages/my-second-gatsby-page.js")
}

exports.json = {
  "counter.json": require("gatsby-module-loader?name=path---counter!/Users/cbr/program/my-first-gatsby-site/.cache/json/counter.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/cbr/program/my-first-gatsby-site/.cache/json/index.json"),
  "my-second-gatsby-page.json": require("gatsby-module-loader?name=path---my-second-gatsby-page!/Users/cbr/program/my-first-gatsby-site/.cache/json/my-second-gatsby-page.json")
}

exports.layouts = {

}