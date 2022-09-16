const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/video_feed',
    createProxyMiddleware({
      target: 'http:/localhost:5000',
      changeOrigin: true
    })
  )
};