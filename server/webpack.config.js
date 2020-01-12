const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    serverlessEntry: path.resolve(__dirname, '../serverlessEntry')
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, '../serverDist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        // loader: 'babel-loader',
        // options: {
        //   presets: [['@babel/preset-env',{
        //   //   // targets: {node: '8'},
        //   //   // "shippedProposals": true
        //   //   "useBuiltIns":"usage",
        //   //   corejs:3
        //   }]],
        //   // "plugins": ["@babel/plugin-proposal-object-rest-spread",]
        // }
      }
    ]
  }
}