var Router = require('koa-router');
var router = new Router();
const cosProxy = require('./middleware/proxyToCos')

router.get("/", ctx=>ctx.redirect("/index"))
router.get("/index", async (ctx,next)=>{
  ctx.url="/index.html"
  await next()
}, cosProxy, ()=>{})
router.get("/sat", async (ctx,next)=>{
  ctx.url="/sat.html"
  await next()
}, cosProxy, ()=>{})
router.get("/video", async (ctx,next)=>{
  ctx.url="/video.html"
  await next()
}, cosProxy, ()=>{})
router.get('/*',cosProxy)

module.exports=router
