const proxy = require('koa-better-http-proxy')
const cosProxy = proxy(
  'https://jiladahe1997-1256609098.cos.ap-chengdu.myqcloud.com',{
    proxyReqPathResolver: function(ctx) {
      return require('url').parse(ctx.url).path;
    }
  }
)
module.exports = cosProxy

// var httpProxy = require('http-proxy-middleware');
// var proxy2 = httpProxy.createProxyServer({
//   target: 'https://1288701826419188.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/everything-house/everything-house/',
//   onProxyReq: (proxyReq, req, res)=> {
//     console.log(`代理${req.host}${req.path}到${proxyReq.getHeader('host')}${proxyReq.path}`)
//   }
// });

// module.exports = proxy2