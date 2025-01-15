export const config = {
  github: {
    login: "jonnyan404", // github login name, not user name
    repo: "jonnyan404.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "jonnyan404 の blog",
    brand: "jonnyan404 の blog",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: {
    src: "https://giscus.app/client.js",
    "data-repo": "glink25/glink25.github.io",
    "data-repo-id": "R_kgDONW6B_w",
    "data-category": "Announcements",
    "data-category-id": "DIC_kwDONW6B_84Cl-Rs",
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": "preferred_color_scheme",
    "data-lang": "zh-CN",
    crossorigin: "anonymous",
    async: true,
  } as object | false,
} as const;

export default config;
