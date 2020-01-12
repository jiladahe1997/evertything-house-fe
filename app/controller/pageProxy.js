const Controller = require('egg').Controller
var proxy = require('koa-better-http-proxy');

class pageProxy extends Controller {
    async proxyStaticPage() {
        console.log(1)
        return proxy("https://jiladahe1997-1256609098.cos.ap-chengdu.myqcloud.com",{
            proxyReqPathResolver: function(ctx) {
                return '/everything-house-fe'+require('url').parse(ctx.url).path;
            }
        })(this.ctx, this.next)
    }
}

module.exports = pageProxy