const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { merge } = require('webpack-merge');
const StringReplacePlugin = require('string-replace-webpack-plugin');

getCssReplacement = (publicPath) => {
  return (replaceCssAssetsUrl = StringReplacePlugin.replace({
    replacements: [
      {
        pattern: /__webpack_public_path__/g,
        replacement: function (_match, _p1, _offset, _string) {
          return publicPath;
        }
      }
    ]
  }));
};

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const cssLoader = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{ loader: getCssReplacement(singleSpaWebpackConfig.output.publicPath) }]
        }
      ]
    }
  };

  singleSpaWebpackConfig.externals = [
    /^rxjs$/,
    /^rxjs\/operators$/,
    /^single-spa$/,
    // /^lottie-web$/,
    //"@bci/fe-params"
  ];

  const mergedConfig = merge(singleSpaWebpackConfig, cssLoader);

  // Feel free to modify this webpack config however you'd like to
  return mergedConfig;
};
