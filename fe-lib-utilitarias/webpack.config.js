const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const path = require("path");
const PACKAGE = require("./package.json");
const folderName = PACKAGE["repository-name"];

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nttdata",
    projectName: "lib-utilitaria",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      // "@bci/fe-params": "@bci/fe-params",
      // "@bci/fe-params-oss-auth-utility-demo":
      //   "@bci/fe-params-oss-auth-utility-demo",
    },
  });
};