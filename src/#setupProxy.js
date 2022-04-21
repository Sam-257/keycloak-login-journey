const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/admin/realms/Axiom/users',
    createProxyMiddleware({
      target: 'http://localhost:8080/auth/admin/realms/Axiom/users',
      changeOrigin: true,
    })
  );
};