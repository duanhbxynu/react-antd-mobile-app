const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', createProxyMiddleware({
      
    })),
    proxy('/api2', createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        "^api2": ""
      }
    }))
  )
}