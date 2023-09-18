import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 产品分类
function categoryListVisible () {
  return doGet({}, url.category_listVisible)
}
// function categoryListVisible () {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.category_listVisible,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {}
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

// 获取"试纸"菜单对应的产品编号
function mgntGetDefaultTestPaperProductNo (params) {
  return doGet(params, url.mgnt_getDefaultTestPaperProductNo)
}
// function mgntGetDefaultTestPaperProductNo ({
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.mgnt_getDefaultTestPaperProductNo,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     doctorId
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

// 获取"设备"菜单对应的产品编号
function mgntGetDefaultDeviceProductNo (params) {
  return doGet(params, url.mgnt_getDefaultDeviceProductNo)
}
// function mgntGetDefaultDeviceProductNo ({
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.mgnt_getDefaultDeviceProductNo,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     doctorId
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

// 产品列表
function mgntList (params) {
  return doGet(params, url.mgnt_list)
}
// function mgntList ({
//   pageNum = '',
//   pageSize = '',
//   categoryId = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.mgnt_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     pageNum,
//     pageSize,
//     categoryId,
//     doctorId
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

// 产品详情
function mgntGet (params) {
  return doGet(params, url.mgnt_get)
}
// function mgntGet ({
//   productNo = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.mgnt_get,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     productNo,
//     doctorId
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
// 分页查询产品评论
function prdCommentList (params) {
  return doGet(params, url.comment_list)
}
// function prdCommentList ({
//   pageNum = '',
//   pageSize = '',
//   productNo = '',
//   keyType = 0
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.comment_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     pageNum,
//     pageSize,
//     productNo
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
// 获取产品评论分组统计
function commentListKeyCount (params) {
  return doGet(params, url.comment_listKeyCount)
}
// function commentListKeyCount ({
//   productNo = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.comment_listKeyCount,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     productNo
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
// 获取套餐产品编号
function prdMgntgetSpecialProductNo (params) {
  return doGet(params, url.prd_mgnt_getSpecialProductNo)
}
// function prdMgntgetSpecialProductNo ({
//   type = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.prd_mgnt_getSpecialProductNo,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     type,
//     doctorId
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
// 获取产品服务协议内容
function prdMgntGetProtocol (params) {
  return doGet(params, url.prd_mgnt_getProtocol)
}

// 患者对产品的购买状态
function prdMgntPatientBuyStatus (params) {
  return doGet(params, url.prd_mgnt_patientBuyStatus)
}

// 购买校验
function saleProductOrderValidateBuy (params) {
  return doGet(params, url.sale_productOrder_validateBuy)
}

// 获取慢病适应症列表
function prdMgntAdaptationDiseaseList (params) {
  return doGet(params, url.prd_mgnt_adaptation_disease_list)
}
export {
  categoryListVisible,
  mgntGetDefaultTestPaperProductNo,
  mgntGetDefaultDeviceProductNo,
  mgntList,
  mgntGet,
  prdCommentList,
  commentListKeyCount,
  prdMgntgetSpecialProductNo,
  prdMgntGetProtocol,
  prdMgntPatientBuyStatus,
  saleProductOrderValidateBuy,
  prdMgntAdaptationDiseaseList
}
