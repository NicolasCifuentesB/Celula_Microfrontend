const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ntt",
    projectName: "footer-react",
    webpackConfigEnv,
    argv,
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    //externals: {
    //  '@bci/fe-params': '@bci/fe-params',
    //},
  })
}
