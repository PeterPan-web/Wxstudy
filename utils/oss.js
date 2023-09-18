import {
  getStsToken
} from 'api/common'
import util from '@/utils/util'
import {
  loading
} from '@/utils/js-vue.js'
let loadingInstance = loading() // loading 实例
let OSS = require('ali-oss')

function getOss (result) {
  let client = new OSS({
    accessKeyId: result.AccessKeyId,
    accessKeySecret: result.AccessKeySecret,
    stsToken: result.SecurityToken,
    endpoint: 'oss-cn-shenzhen.aliyuncs.com',
    bucket: 'idt-blood-sugar'
  })
  return client
}
/**
 * 压缩图片
 * @param  {File} file 文件对象
 * @param  {} quality 压缩比例
 * @returns promise对象
 */
function compress (file, quality) {
  return util.compress(file, quality).then((result) => {
    console.log('压缩后', result)
    return result.file
  }).catch((err) => {
    console.log(err)
  })
}
/**
 * 获取文件的md5
 * @param  {File} fileEntity
 * @returns promise对象
 */
function getMd5 (fileEntity) {
  return util.getFileMD5(fileEntity).then((result) => {
    return {
      md5: result,
      fileEntity
    } // md5
  }).catch((err) => {
    console.log(err)
  })
}
/**
 * 从后台获取oss上传必须的信息
 * @param  {} result  {
      md5: result,
      fileEntity
    } // md5
 * @param  {} params let params = {}
  params.progress = progress
  @returns promise 对象
 */
function stsToken (result, params) {
  let md5 = result.md5
  let fileEntity = result.fileEntity
  let size = result.fileEntity.size
  return new Promise((resolve, reject) => {
    getStsToken().then((result) => {
      let client = getOss(result.data.data)
      let suffix = 'jpg' // 文件后缀名
      let objectKey = util.getUuid() + `[${suffix}]` // %5Bjpg%5D  使用[***]替换 ‘。***’ 是因为项目部署后使用'.jpg'会上传文件失败(原因未知)
      const progress = async function progress (p, checkpoint) {
        // that.progressValue = (p * 100).toFixed(2) * 1
        // if (p === 1) {
        // // that.dialogVisible = false
        // }
        // 进度条
        params.progress(p, checkpoint)
      }
      let option = {
        progress,
        partSize: 1000 * 1024, // 设置分片大小
        timeout: 120000 // 设置超时时间
      }
      resolve({
        client,
        objectKey,
        fileEntity,
        option,
        md5,
        size
      })
    })
  })
}
/**
 * @param  {} {client='' // oss实例
 * @param  {} objectKey=''
 * @param  {} fileEntity=''
 * @param  {} option=''
 * @param  {} md5=''
 * @param  {} size=''}
 */
function multipartUpload ({
  client = '',
  objectKey = '',
  fileEntity = '',
  option = '',
  md5 = '',
  size = ''
}) {
  return client.multipartUpload(objectKey, fileEntity, option).then(function (result) {
    console.log('client.multipartUpload', result)
    let url = result.res.requestUrls[0]
    let index = url.lastIndexOf('?')
    if (index > -1) {
      url = url.substring(0, index)
    }
    // url = url + '?x-oss-process=image/format,jpg'
    return {
      'name': objectKey, // 图片name
      md5, // 图片文件md5
      url, // 生成的url
      // 'ext': suffix, // 图片后缀
      'ext': 'jpg', // 图片后缀
      'w': 100, // 宽
      'h': 100, // 高
      size // 图片大小
    }
  })
}
/**
 * @description oss渠道资源上传
 * @example
 * let params = {
  file,
  quality,图像压缩比例，默认不压缩
  progress: (p, checkpoint) => {
    console.log('progress-p', p)
  }
}
ossUpload(params).then((result) => {
  console.log('ossUpload-result', result)
  this.imgArray.push(result)
}).catch((err) => {
  console.log(err)
})
* return {promise} 返回promise对象
**/
async function ossUpload ({
  file = '', // file对象
  quality = 1, // 压缩比例 1为不压缩
  progress = () => {}, // 上传进程回调方法，可自定义
  loading = true
} = {}) {
  let params = {}
  params.progress = progress
  if (loading) {
    loadingInstance.start('图片处理中...')
  }
  let fileEntity = await compress(file.file, quality) // 压缩
  let md5Result = await getMd5(fileEntity) // md5
  let stsResult = await stsToken(md5Result, params) // 获取ststoken
  if (loading) {
    loadingInstance.close()
    loadingInstance.start('上传中...')
  }
  let uploadResult = await multipartUpload(stsResult)
  if (loading) {
    loadingInstance.close()
  }
  return uploadResult
}

export {
  ossUpload,
  getOss
}
