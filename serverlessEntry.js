
const Koa = require('koa')
const app = new Koa
const awsServerlessExpress = require('aws-serverless-express')
const routers= require('./server/router.js')
const logger = require('koa-logger')
const checkLogin = require('./server/middleware/checkLogin.js')


app.use(checkLogin)
app.use(logger())
app.use(routers.routes()).use(routers.allowedMethods()); 

const server = awsServerlessExpress.createServer(app.callback())

module.exports.handle = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}
