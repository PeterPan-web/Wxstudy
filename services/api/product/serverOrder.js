import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 服务结算时，获取可用的卡券
function couponGetServe (params) {
  return doGet(params, url.coupon_getServe)
}
// function couponGetServe ({
//   serveId = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.coupon_getServe,
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

// 服务结算时，获取可用的卡券
function serveOrderList (params) {
  return doGet(params, url.serveOrder_list)
}
// function serveOrderList ({
//   pageNum = '',
//   pageSize = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveOrder_list,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
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

// 获取订单详情
function serveOrderGet (params) {
  return doGet(params, url.serveOrder_get)
}
// function serveOrderGet ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveOrder_get,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     orderNo
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

// 支付结果查询
function serveOrderPayResult (params) {
  return doGet(params, url.serveOrder_pay_result)
}
// function serveOrderPayResult ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.serveOrder_pay_result,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     orderNo
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
// 创建服务购买订单
function serveOrderCreate (params) {
  return doPost(params, url.serveOrder_create)
}
// function serveOrderCreate ({
//   serveId = '',
//   totalAmount = '',
//   couponNo = '',
//   remark = '',
//   consignee = '',
//   invoice = '',
//   nurseId = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.serveOrder_create,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     serveId,
//     totalAmount,
//     couponNo,
//     remark,
//     consignee,
//     invoice,
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

// 服务订单预支付
function serveOrderPrePay (params) {
  return doPost(params, url.serveOrder_prePay)
}
// function serveOrderPrePay ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.serveOrder_prePay,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     orderNo
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

// 服务订单预支付
function serveOrderZeroPay (params) {
  return doPost(params, url.serveOrder_zero_pay)
}
// function serveOrderZeroPay ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.serveOrder_zero_pay,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     orderNo
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
  couponGetServe,
  serveOrderList,
  serveOrderGet,
  serveOrderPayResult,
  serveOrderCreate,
  serveOrderPrePay,
  serveOrderZeroPay
}
