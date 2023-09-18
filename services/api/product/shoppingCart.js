import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 添加到购物车
function shoppingCartSave (params) {
  return doPost(params, url.shoppingCart_save)
}
// function shoppingCartSave ({
//   commodityNo = '',
//   commodityName = '',
//   // type = '',
//   quantity = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.shoppingCart_save,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     commodityNo,
//     commodityName,
//     // type,
//     quantity,
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
// 获取购物车
function shoppingCarList (params) {
  return doGet(params, url.shoppingCart_list)
}
// function shoppingCarList ({
//   pageNum = '',
//   pageSize = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.shoppingCart_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     pageNum,
//     pageSize,
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
// 修改商品数量
function shoppingCarChangeQuantity (params) {
  return doPost(params, url.shoppingCart_changeQuantity)
}
// function shoppingCarChangeQuantity ({
//   commodityNo = '',
//   quantity = '',
//   doctorId = ''
// }) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.shoppingCart_changeQuantity,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     commodityNo,
//     quantity,
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
// 删除购物车条目
function shoppingCartDelete (params) {
  return doPost(params, url.shoppingCart_delete)
}
// function shoppingCartDelete ({
//   commodityNos = ''
// }) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.shoppingCart_delete,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     commodityNos
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
export {
  shoppingCartSave,
  shoppingCarList,
  shoppingCarChangeQuantity,
  shoppingCartDelete
}
