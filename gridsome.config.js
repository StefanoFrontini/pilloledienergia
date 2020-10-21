// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/sass/*.scss")],
    });
}

module.exports = {
  siteName: "Consulente energetico per ristoranti e hotel",
  siteDescription:
    "Il vero risparmio nella bolletta della luce e del gas? Assistenza da parte di un bravo consulente e una società di fornitura seria, innovativa e solida",
  siteUrl: "https://pilloledienergia.com",
  icon: "src/favicon.png",

  plugins: [
    "gridsome-plugin-webpack-size",

    {
      use: "gridsome-plugin-bundle-analyzer",
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
      },
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,gif",
        disableTemplatedUrls: false, // Optional

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: "manifest.json",
        title: "Pillole di Energia",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        themeColor: "#000000",
        backgroundColor: "#000000",
        icon: "./src/assets/icon.png",
        shortName: "PdE", // Optional
        description: "Consulente energetico", // Optional
        categories: [""], // Optional
        lang: "it-IT", // Optional
        dir: "auto", // Optional
        maskableIcon: true, // Optional
        screenshots: [
          // Optional
          {
            src: "./src/assets/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        gcmSenderId: undefined, // Optional

        // Standard Meta Tags
        svgFavicon: "favicon.svg", // Optional. Requires favicon.ico fallback

        // Microsoft Windows Meta Tags
        msTileColor: "#666600", // Optional

        // Apple MacOS Meta Tags
        appleMaskIcon: "favicon.svg", // Optional
        appleMaskIconColor: "#666600", // Optional
      },
    },
    /* {
      use: "gridsome-plugin-service-worker",
      options: {
        options: {
          precachedRoutes: ["/"],
          cacheOnly: {
            cacheName: "co-v1",
            routes: ["/"],
          },
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/assets/icon.png",
        name: "Pillole di Energia",
        short_name: "PdE",
        theme_color: "#000000",
        lang: "it",
      },
    }, */
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        staticUrls: [
          {
            url: "/",
            img: [
              {
                url: "/logo-pillole-di-energia.png",
                caption: "Logo Pillole di Energia",
                title: "Logo Pillole di Energia",
                geoLocation: "Milano, Italy",
                license: "",
              },
            ],
          },
        ],
        cacheTime: 600000, // default
        exclude: [],
        config: {
          "/blog/*": {
            changefreq: "monthly",
            priority: 0.5,
          },
          "/mercato": {
            changefreq: "monthly",
            priority: 0.7,
          },
          "/episodi/*": {
            changefreq: "monthly",
            priority: 0.5,
          },
          "/energia-in-numeri/*": {
            changefreq: "monthly",
            priority: 0.5,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-T8T7VGP",
        enabled: true,
        debug: false,
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Tag",
        baseDir: "./content/tags",
        pathPrefix: "/content/tags",
        template: "./src/templates/Tag.vue",
        route: "/tag/:slug",
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/posts",
        pathPrefix: "/content/posts",
        template: "./src/templates/Post.vue",
        route: "/blog/:slug",
        refs: {
          tags: "Tag",
        },
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Episode",
        baseDir: "./content/episodes",
        pathPrefix: "/content/episodes",
        template: "./src/templates/Episode.vue",
        route: "/episodi/:slug",
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Infografica",
        baseDir: "./content/infografiche",
        pathPrefix: "/content/infografiche",
        template: "./src/templates/Infografica.vue",
        route: "/energia-in-numeri/:slug",
      },
    },
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
