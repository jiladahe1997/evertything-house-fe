const proxy = require('koa-better-http-proxy')
const config = require('config')

const cosProxy = proxy(
  config.Server.proxyFe.path,{
    port: config.Server.proxyFe.port,
    proxyReqPathResolver: function(ctx) {
      return config.Server.proxyFe.prefix + require('url').parse(ctx.url).path;
    }
  }
)
module.exports = cosProxy