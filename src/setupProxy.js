const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { "^api": "" }
    })
  )
  app.use('/api2',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: { "^api2": "" }
    })
  )
}