const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
const rewirePostcss = require('react-app-rewire-postcss')
const px2rem = require('postcss-px2rem')

// 修改打包后的文件名路径
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), './dist')

module.exports = override(
  // 按需加载antd-mobile组件
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es/components',
    style: false
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@brand-primary': 'green' }
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  addDecoratorsLegacy(),
  // 移动端rem适配
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