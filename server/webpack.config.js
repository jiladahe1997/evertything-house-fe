const config = require('config')
const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.resolve(__dirname, '../config/client.json'), JSON.stringify(config))

module.exports = {
  mode: 'development',
  entry: {
    serverlessEntry: path.resolve(__dirname, '../serverlessEntry')
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, '../serverDist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
      }
    ]
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, '../config/client.json')
    }
  },
}