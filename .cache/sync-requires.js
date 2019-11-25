const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tags-jsx": hot(preferDefault(require("/Users/alicemj/chos/src/templates/tags.jsx"))),
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/Users/alicemj/chos/src/templates/blog-post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/alicemj/chos/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/alicemj/chos/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/alicemj/chos/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/alicemj/chos/src/pages/index.jsx")))
}

