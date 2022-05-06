const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "meli-store",
    projectName: "mf-products",
    webpackConfigEnv,
    argv,
  });

  const externals = [/^rxjs\/?.*$/];

  if (webpackConfigEnv.standalone) {
    externals.push("react", "react-dom");
  }

  return merge(defaultConfig, {
    // customizations go here
    entry: "./src/meli-store-mf-products.js",
    externals,
  });
};