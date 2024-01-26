const path = require("path");

module.exports = {
  trailingSlash: false,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: ["cdn.sanity.io"],
  },
};
