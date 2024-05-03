const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/api/ai',
        createProxyMiddleware({
            target: import.meta.env.VITE_APP_AI_BASE_URL,
            changeOrigin: true,
        })
    )
}
