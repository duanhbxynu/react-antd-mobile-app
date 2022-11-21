const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es', // 样式模块作为es6模块处理
    style: true // 处理源文件样式
  }),
  addLessLoader({
    javascriptEnabled: true, // 允许js更改antd-mobile的less文件中变量
    modifyVars: { '@brand-primary': 'green' }
    lessOptions: {

    }
  }),
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 37.5 })])
)