const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/travel/" : "/",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:80",
      },
    },
  },
});
