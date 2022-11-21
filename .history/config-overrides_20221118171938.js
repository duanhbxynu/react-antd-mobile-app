const { override, fixBabelImports, addLessLoader, addPostcssPlugins, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es/compon',
    style: 'css'
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@brand-primary': 'green' }
    }
  }),
  addPostcssPlugins([require('postcss-px2rem')({
    remUnit: 37.5
  })]),
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  addDecoratorsLegacy()
)