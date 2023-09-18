import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 服务分类
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

// 服务列表
function serveList (params) {
  return doGet(params, url.serve_list)
}
// function serveList ({
//   pageNum = '',
//   pageSize = '',
//   typeId = '',
//   nurseId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serve_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     pageNum,
//     pageSize,
//     typeId,
//     nurseId
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

// 服务详情
function serveGet (params) {
  return doGet(params, url.serve_get)
}
// function serveGet ({
//   serveId = '',
//   nurseId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serve_get,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     serveId,
//     nurseId
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

// 分页查询服务评论
function serveRatingList (params) {
  return doGet(params, url.serveRating_list)
}
// function serveRatingList ({
//   serveId = '',
//   hasImg = '',
//   pageNum = '',
//   pageSize = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveRating_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     serveId,
//     hasImg,
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
// 服务分类列表
function serveTypeListVisible () {
  return doGet({}, url.serveType_listVisible)
}
// function serveTypeListVisible () {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveType_listVisible,
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
// 服务分类列表
function serveRatingRatingCount (params) {
  return doGet(params, url.serveRating_ratingCount)
}
// function serveRatingRatingCount ({
//   serveId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveRating_ratingCount,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     serveId
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
// 获取服务中心详情
function serviceCenterGet (params) {
  return doGet(params, url.serviceCenter_get)
}
// function serviceCenterGet ({
//   serviceCenterId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serviceCenter_get,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     serviceCenterId
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

// 获取购买缓解治疗服务信息
function vmRemissionCureGetBoughtRemissionCure (params) {
  return doGet(params, url.vm_remissionCure_getBoughtRemissionCure)
}
// 激活缓解治疗
function vmRemissionCureActivate (params) {
  return doPost(params, url.vm_remissionCure_activate)
}

export {
  categoryListVisible,
  serveList,
  serveGet,
  serveRatingList,
  serveTypeListVisible,
  serveRatingRatingCount,
  serviceCenterGet,
  vmRemissionCureGetBoughtRemissionCure,
  vmRemissionCureActivate
}
