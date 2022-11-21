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
     
    }
  }),
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
            flexbox: 'no-2009'
          },
          stage: 3
        }),
        require('postcss-px2rem-exclude')({
          remUnit: 37.5,
          exclude: /node-modules/i
        })
      ]
    })
    return config
  }
)