const ikotaVanillaExtract = require("@ikota/vanilla-extract");

/**
 * @type {import('ikota').IkotaConfig}
 */
module.exports = {
  componentPath: "src/components",
  useTypescript: true,
  addConfigFile: true,
  addIndexFile: true,
  preprocessor: "vanilla-extract",
  useLambdaSimplifier: false,
  trailingSpace: true,
  plugins: [ikotaVanillaExtract]
}