const tencentcloud = require("tencentcloud-sdk-nodejs");
const Credential = tencentcloud.common.Credential;
const fs = require('fs')

// 导入对应产品模块的client models。
const ScfClient = tencentcloud.scf.v20180416.Client;
const models = tencentcloud.scf.v20180416.Models;

async function publish() {
  const cred = new Credential('AKIDb3HG0Wjpc9QSJuuOFySq1xe7LL6c8wjI', 'ThgRxEG4dx2tVsypQkob8PQAd6JGyQbX')
  const client = new ScfClient(cred, "ap-guangzhou")
  const req = new models.ListFunctionsRequest()

  req.Action = 'UpdateFunctionCode'
  req.Version =  '2018-04-16'
  req.Region =  'ap-guangzhou'
  req.Handler =  'serverlessEntry.handle'
  req.FunctionName =  'everything-house-fe'
  req.ZipFile = fs.readFileSync('./index.zip').toString('base64')

  return await new Promise((resolve, reject)=> {
    client.UpdateFunctionCode(req, (err, res)=>{
      if(err) {
        reject(err)
      } else {
        console.log(res)
        resolve(res)
      }
    })
  })
}

publish()