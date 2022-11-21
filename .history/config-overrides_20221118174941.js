const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
const rewirePostcss = require('react-app-rewire-postcss')
const px2rem = require('postcss-px2rem')

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
  // addPostcssPlugins([require('postcss-px2rem')({
  //   remUnit: 37.5
  // })]),
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  addDecoratorsLegacy(),
  (config, env) => {
    rewirePostcss(config, {
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox
          }
        })
      ]
    })
  }
)