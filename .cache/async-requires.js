// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-tags-jsx": () => import("../src/templates/tags.jsx" /* webpackChunkName: "component---src-templates-tags-jsx" */),
  "component---src-templates-blog-post-jsx": () => import("../src/templates/blog-post.jsx" /* webpackChunkName: "component---src-templates-blog-post-jsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

