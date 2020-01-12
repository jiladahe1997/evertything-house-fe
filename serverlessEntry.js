// const Koa = require('koa')
// const app = new Koa();
// const proxy = require('@webserverless/fc-express')
// const express = require('express')
// const app2 = new express()


// const routers= require('./server/router.js')
// app2.get("/*", (req, res) => {
//   res.send('hello world!');
// });
// app.use(routers.routes())

// const server = new proxy.Server(app2);

// module.exports.handler = function(req, res, context) {
//   server.httpProxy(req, res, context);
// };

const Koa = require('koa')
const app = new Koa
const awsServerlessExpress = require('aws-serverless-express')

app.use(require('./server/router.js').routes())
const server = awsServerlessExpress.createServer(app.callback())

module.exports.handle = (event, context) => awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
