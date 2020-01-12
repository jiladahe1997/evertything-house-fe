var Router = require('koa-router');
var router = new Router();
const cosProxy = require('./middleware/proxyToCos')

router.get('/*',cosProxy)

module.exports=router
