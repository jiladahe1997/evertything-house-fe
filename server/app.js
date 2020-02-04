const Koa = require('koa')
const app = new Koa();
const checkLogin = require('./middleware/checkLogin.js')

const routers= require('./router.js')

app.use(checkLogin)
app.use(routers.routes()).use(routers.allowedMethods()); 

app.listen(3000,()=>{
  console.info('\x1b[36m%s\x1b[0m', `Node Server is run at http://localhost:3000`)
})