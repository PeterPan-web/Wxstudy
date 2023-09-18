import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// import Vue from 'vue'

// 产品订单列表查询
function sugarList ({
  patientId = '',
  pageNum = 1,
  pageSize = 10
} = {}) {
  return doGet({
    patientId,
    pageNum,
    pageSize
  }, url.sugar_list)
}
// function sugarList ({
//   patientId = '',
//   pageNum = 1,
//   pageSize = 10
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     patientId,
//     pageNum,
//     pageSize
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 血糖测量结果上传图片
function sugarUploadImg ({
  measureId = '',
  attachments = ''
} = {}) {
  return doPost({
    measureId,
    attachments
  }, url.sugar_uploadImg)
}
// function sugarUploadImg ({
//   measureId = '',
//   attachments = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_uploadImg,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId,
//     attachments
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 血糖测量评论
function sugarComment ({
  measureId = '',
  content = ''
} = {}) {
  return doPost({
    measureId,
    content
  }, url.sugar_comment)
}
// function sugarComment ({
//   measureId = '',
//   content = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_comment,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId,
//     content
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 血糖测量评论回复
function sugarCommentReply ({
  sugarMeasureCommentId = '',
  measureId = '',
  content = ''
} = {}) {
  return doPost({
    sugarMeasureCommentId,
    measureId,
    content
  }, url.sugar_commentReply)
}
// function sugarCommentReply ({
//   sugarMeasureCommentId = '',
//   measureId = '',
//   content = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_commentReply,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     sugarMeasureCommentId,
//     measureId,
//     content
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 对血糖测量结果点赞
function sugarLike ({measureId = ''} = {}) {
  return doPost({measureId}, url.sugar_like)
}
// function sugarLike ({
//   measureId = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_like,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 对血糖测量结果点阅
function sugarRead ({measureId = ''} = {}) {
  return doPost({measureId}, url.sugar_read)
}
// function sugarRead ({
//   measureId = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_read,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者血糖测量结果
function sugarGetMeasurement ({
  patientId = '',
  measureId = '',
  moment = '',
  isOthers = ''
} = {}) {
  return doGet({
    patientId,
    measureId,
    moment,
    isOthers
  }, url.sugar_getMeasurement)
}
// function sugarGetMeasurement ({
//   measureId = '',
//   moment = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_getMeasurement,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId,
//     moment
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         alert(JSON.stringify(error))
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 血糖测量评论删除
function sugarCommentDelete ({
  measureId = '',
  sugarMeasureCommentId
} = {}) {
  return doPost({
    measureId,
    sugarMeasureCommentId
  }, url.sugar_commentDelete)
}
// function sugarCommentDelete ({
//   measureId = '',
//   sugarMeasureCommentId
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_commentDelete,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId,
//     sugarMeasureCommentId
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         alert(JSON.stringify(error))
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 获取分享链接中的血糖图片地址
function bsGetShareImageUrl ({
  sugarValue = '',
  resultType = ''
} = {}) {
  return doGet({
    sugarValue,
    resultType
  }, url.bs_getShareImageUrl, {loading: false})
}
// function bsGetShareImageUrl ({
//   measureId = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.bs_getShareImageUrl,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         alert(JSON.stringify(error))
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 更新查看血糖测量详情状态
function bsUpdateFirstViewDetail ({
  measureId = ''
} = {}) {
  return doPost({
    measureId
  }, url.bs_updateFirstViewDetail)
}

// 获取血糖测量结果建议模板列表
function bsListAdviceTemplate (param) {
  return doGet(param, url.bs_listAdviceTemplate)
}

export {
  sugarList,
  sugarUploadImg,
  sugarGetMeasurement,
  sugarComment,
  sugarCommentReply,
  sugarLike,
  sugarRead,
  sugarCommentDelete,
  bsGetShareImageUrl,
  bsUpdateFirstViewDetail,
  bsListAdviceTemplate
}
