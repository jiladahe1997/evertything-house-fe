const Koa = require('koa')
const app = new Koa();

const routers= require('./router.js')

app.use(routers.routes())

app.listen(3000)