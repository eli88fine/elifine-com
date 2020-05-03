module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Scientific Consulting by Eli Fine",
    meta: [{ charset: "utf-8" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  mode: "spa",
  server: {
    port: 8080, // default: 3000
    host: "localhost", // default: localhost
  },
  css: [],
};
