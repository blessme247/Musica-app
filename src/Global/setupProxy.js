const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/editorial',
//     createProxyMiddleware({
//       target: 'https://api.deezer.com',
//       changeOrigin: true,
//     })
//   );
// };

// module.exports = function (app) {
//     app.use(proxy("/api", {
//         "changeOrigin": true,
//         "cookieDomainRewrite": "localhost",
//         "secure": false,
//         "target": "https://api.deezer.com",
//         "headers": {
//             "host": "api.deezer.com",
//             "origin": null
//         },
//         "onProxyReq": function(proxyReq, req, res) {
//             proxyReq.setHeader("accept-encoding", "identity")
//         }
//     }));
//     app.use(proxy("/*.html", {
//         "changeOrigin": true,
//         "secure": false,
//         "target": "https://api.deezer.com"
//     }));
//     app.use(proxy("/packages/*.{js,css}", {
//         "changeOrigin": true,
//         "secure": false,
//         "target": "https://api.deezer.com"
//     }));
// };
