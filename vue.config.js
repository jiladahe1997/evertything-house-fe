const config = require('config')

module.exports={
  pages: {
    index: {
        entry: './client/src/index/index.js',
        template: './client/src/index/index.html'
    },
    sat: {
      entry: './client/src/sat/sat.js',
      template: './client/public/sat.html'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://1288701826419188.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/everything-house/everything-house/',
        pathRewrite: (path, req)=> {
          return path.replace('/api','')
        },
        onProxyReq: (proxyReq, req, res)=> {
          console.log(`代理${req.host}${req.path}到${proxyReq.getHeader('host')}${proxyReq.path}`)
        }
      },
      '/qqlogin': {
        target: 'https://1288701826419188.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/everything-house/everything-house/',
        onProxyReq: (proxyReq, req, res)=> {
          console.log(`代理${req.host}${req.path}到${proxyReq.getHeader('host')}${proxyReq.path}`)
        }
      }
    },
    sockPort: 8080
  },
  publicPath: config.Client.webpack.publicPath
}