const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/ai/diary/create', // 프록시할 요청의 경로
    createProxyMiddleware({
      target: import.meta.env.VITE_APP_AI_BASE_URL, // 프록시 대상 서버의 주소
      changeOrigin: true, // 프록시 대상 서버의 호스트 헤더를 변경합니다.
    })
  );
};