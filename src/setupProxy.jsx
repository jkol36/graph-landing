const proxy = require("http-proxy-middleware");

console.log('setup proxy running')

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: process.env.REACT_APP_API_HOST || "http://localhost:8000",
      changeOrigin: true
    })
  );
};
