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
      javascriptEnabled: true, // 允许js更改antd-mobile的less文件中变量
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