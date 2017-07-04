/* eslint-env node */
exports.modifyWebpackConfig = function({ config, stage }) {
  if (stage === 'build-javascript') {
    config._config.devtool = false
  }
  return config
}
