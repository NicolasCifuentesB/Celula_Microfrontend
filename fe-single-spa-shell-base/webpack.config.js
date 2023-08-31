const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Joi = require("joi");
const PACKAGE = require("./package.json");
const folderName = PACKAGE["name-repository"];
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ntt";
  const projectName = "root-config";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const PARAMETROS_AMBIENTE_CONSTRUCCION = cargarVariablesAmbiente();
  validarVariablesAmbienteCargadas(PARAMETROS_AMBIENTE_CONSTRUCCION);

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      filename: `${orgName}-${projectName}.js`,
      clean: true,
      path: path.resolve(process.cwd(), `dist/${folderName}`),
      libraryTarget: "system",
      uniqueName: projectName,
      devtoolNamespace: `${projectName}`,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|png|woff|woff2|ttf)$/i,
          options: {
            name: "[name].[ext]",
          },
          loader: "file-loader",
        },
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          buildEnv: PARAMETROS_AMBIENTE_CONSTRUCCION,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          FE_OSS_APP_FOOTER_LOC:
            webpackConfigEnv && webpackConfigEnv.FE_OSS_APP_FOOTER_LOC,
          orgName,
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "src/static",
            to: path.resolve(__dirname, `dist/${folderName}/static`),
          },
        ],
      }),
    ],
  });
};

/**
 * Loads all needed Environment Variables. Each environmental variable must be
 * explicitly declare function to be available and accesible during the build
 * process.
 */
function cargarVariablesAmbiente() {
  return {
    FE_IMPORTMAP_URL: process.env.FE_IMPORTMAP_URL || "dev",
  };
}

/**
 * Valida que todas las Variables de Ambiente esten configuradas antes de
 * comenzar con la construcción. Si falta alguna variable entonces terminará el
 * proceso de construcción de Webpack.
 * @emits SIGKILL
 */
function validarVariablesAmbienteCargadas(variablesAmbienteCargadas) {
  const buildEnvValidationSchema = Joi.object(
    Object.keys(variablesAmbienteCargadas).reduce((schema, key) => {
      return {
        ...schema,
        [key]: Joi.string(),
      };
    }, {})
  );

  const validationResult = buildEnvValidationSchema.validate(
    variablesAmbienteCargadas,
    {
      abortEarly: false,
      presence: "required",
    }
  );

  if (validationResult.error) {
    console.log(
      "Hay variables de ambiente no cargadas y todas son requeridas..."
    );
    validationResult.error.details.forEach((d) => {
      console.log("Variable de Ambiente " + d.path + " no esta cargada");
    });
    // Emite una señal SIGKILL terminando la construcción de Webpack con una
    // recomendación para remediar el problema con variables de ambiente.
    process.exit(1);
  }
}
