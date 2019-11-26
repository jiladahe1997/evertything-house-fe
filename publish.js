var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
    SecretId: 'AKIDb3HG0Wjpc9QSJuuOFySq1xe7LL6c8wjI',
    SecretKey: 'ThgRxEG4dx2tVsypQkob8PQAd6JGyQbX'
});

function getBucket() {
  return new Promise((resolve, reject) => {
    cos.getBucket({
      Bucket: 'jiladahe1997-1256609098',
      Region: 'ap-chengdu',
      Prefix: 'everything-house-fe/',
    },(err, data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
}

async function uploadAllFile() {
  const filePaths = await findAllFilePath('./dist')
  void 0
}

const fsPromise= require('fs').promises
const path = require('path')
async function findAllFilePath(nowPath) {
  const filePaths = await fsPromise.readdir(nowPath)
  const ret = []
  if(filePaths.length > 0){
    filePaths.forEach(async filePath=>{
      if(filePath.indexOf('.') !== -1) {
        ret.push(path.join(nowPath,filePath))
      }
      else {
        Array.prototype.concat(ret, await findAllFilePath(path.join(nowPath,filePath)))
      }
    })
  }
  return ret
}

async function publish() {
  const exitFiles = await getBucket()
  await uploadAllFile()
  console.log(exitFiles);
}

publish()