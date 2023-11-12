var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { handleRequest } from "@netlify/remix-adapter";

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JI262GRC.css";

// app/root.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: [
      /* @__PURE__ */ jsxDEV("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { className: "p-6", children: [
      /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/posts.$slug.tsx
var posts_slug_exports = {};
__export(posts_slug_exports, {
  default: () => Post,
  loader: () => loader
});

// app/data.json
var posts = [
  {
    slug: "json-server",
    title: "JSON Server",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam n"
  },
  {
    slug: "json-server2",
    title: "JSON Server2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam n"
  },
  {
    slug: "json-server3",
    title: "JSON Server3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam n"
  }
];

// app/routes/posts.$slug.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { JamComments, fetchMarkup } from "@jam-comments/remix";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => {
  let post = posts.find((post2) => post2.slug === params.slug), markup = await fetchMarkup({
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY,
    path: `/posts/${params.slug}`,
    environment: "development",
    tz: "Africa/Casablanca"
  });
  return json({ post, markup });
};
function Post() {
  let { post, markup } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("div", { children: [
    /* @__PURE__ */ jsxDEV2("h1", { className: "text-4xl text-center mb-4", children: post.title }, void 0, !1, {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod quos exercitationem voluptatem quas quidem doloribus. Quisquam, quia voluptas. Quisquam, quia voluptas." }, void 0, !1, {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(JamComments, { markup }, void 0, !1, {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "New Remix App" }], loader2 = () => json2({
  posts
});
function Index() {
  let { posts: posts2 } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-4xl", children: "JamComments Sandbox for Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("ul", { children: posts2.map((post) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: `/posts/${post.slug}`, children: post.title }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, post.slug, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QTQ6IZDN.js", imports: ["/build/_shared/chunk-FJHHOPBL.js", "/build/_shared/chunk-QLQSEQJV.js", "/build/_shared/chunk-FHLYR7F3.js", "/build/_shared/chunk-E6ENWO4F.js", "/build/_shared/chunk-LZUN5VWV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-ZPFJ3V7V.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SC7RQ3FT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IEI74JUE.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/posts.$slug": { id: "routes/posts.$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$slug-PDWUWQLN.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "d68c9cd1", hmr: { runtime: "/build/_shared/chunk-LZUN5VWV.js", timestamp: 1699756935898 }, url: "/build/manifest-D68C9CD1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts.$slug": {
    id: "routes/posts.$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
