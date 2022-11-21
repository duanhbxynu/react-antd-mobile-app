const { override, fixBabelImports, addLessLoader, addPostcssPlugins, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': 'green' }
    }
  }),
  addPostcssPlugins([require('postcss-px2rem-exclude')({
    remUnit: 37.5,
    exclude: /node-modules/i
  })]),
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  addDecoratorsLegacy()
)