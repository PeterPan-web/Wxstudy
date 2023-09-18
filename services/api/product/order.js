import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 产品订单列表查询
function productOrderList (params) {
  return doGet(params, url.productOrder_list)
}
// function productOrderList ({
//   pageNum = 1,
//   pageSize = 10
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.productOrder_list,
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

// 查询产品订单详情
function productOrderGetDetail (params) {
  return doGet(params, url.productOrder_getDetail)
}
// function productOrderGetDetail ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.productOrder_getDetail,
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

// 创建订单
function createOrder () {
  return doPost({}, url.createOrder)
}
// function createOrder () {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.createOrder,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
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
/**
 * 预支付
 */
function prePay (orderNo) {
  return doPost({orderNo}, url.prePay)
}
// function prePay (orderNo) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.prePay,
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

/**
 * 获取分期订单后续支付创建接口
 */
function getInstallmentBuy(params) {
  return doPost(params, url.get_installment_buy)
}
/**
 * 提交分期订单后续订单
 */
function getInstallmentCreate(params) {
  return doPost(params, url.get_installment_create)
}
/**
 * 获取分期订单详情
 */
function getInstallmentGetDetail(params) {
  return doGet(params, url.get_installment_getDetail)
}
/**
 * 分期订单立即支付
 */
function getInstallmentPay(params) {
  return doPost(params, url.get_installment_pay)
}
/**
 * 产品订单支付结果查询
 */
function getInstallmentPayResult(params) {
  return doGet(params, url.get_installment_pay_result)
}
/**
 * 获取订单的分期详情
 */
function getOrderInstallment (params) {
  return doGet(params, url.get_order_installment)
}
/**
 * 产品立即购买
 */
function productOrderBuy (params) {
  return doPost(params, url.productOrder_buy)
}
// function productOrderBuy (params) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.productOrder_buy,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = params
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

/**
 * 创建产品订单
 */
function productOrderCreate (params) {
  return doPost(params, url.productOrder_create)
}
// function productOrderCreate (params) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.productOrder_create,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = params
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

/**
 * 产品订单立即支付
 */
function productOrderPay (params) {
  return doPost(params, url.productOrder_pay)
}
// function productOrderPay ({
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.productOrder_pay,
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

/**
 * 检查产品优惠券是否可用
 */
function promotionPrdCheckValid (params) {
  return doGet(params, url.promotion_prd_checkValid)
}
// function promotionPrdCheckValid ({
//   writeOffNo = '',
//   productNoList = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.promotion_prd_checkValid,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     writeOffNo,
//     productNoList
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

/**
 * 检查产品优惠券是否可用
 */
function saleCouponGetOrderListForCoupon (params) {
  return doGet(params, url.sale_coupon_getOrderListForCoupon)
}

/**
 * 校验提交补贴卡申请
 */
function saleCouponDeforeSubmitCheck (params) {
  return doGet(params, url.sale_coupon_beforeSubmitCheck)
}
// function saleCouponGetOrderListForCoupon ({
//   writeOffNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sale_coupon_getOrderListForCoupon,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     writeOffNo
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

/**
 * 产品订单支付结果查询
 */
function saleProductOrderPayResult (params) {
  return doGet(params, url.sale_productOrder_pay_result)
}
// function saleProductOrderPayResult ({
//   paySerialNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sale_productOrder_pay_result,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     paySerialNo
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

/**
 * 检查补贴卡是否可用
 */
function saleCouponCheckValid (params) {
  return doGet(params, url.sale_coupon_checkValid, {loading: false})
}
// function saleCouponCheckValid ({
//   writeOffNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sale_coupon_checkValid,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     writeOffNo
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

/**
 * 补贴卡核销
 */
function saleCouponWriteOff (params) {
  return doPost(params, url.sale_coupon_writeOff)
}
// function saleCouponWriteOff ({
//   writeOffNo = '',
//   orderNo = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sale_coupon_writeOff,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     writeOffNo,
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

/**
 * 补贴卡核销
 */
function saleCouponSubmitSubsidyApply (params) {
  return doPost(params, url.sale_coupon_submitSubsidyApply)
}
// function saleCouponSubmitSubsidyApply ({
//   writeOffNo = '',
//   name = '',
//   gender = '',
//   age = '',
//   orderNo = '',
//   diabetesType = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sale_coupon_submitSubsidyApply,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     writeOffNo,
//     name,
//     gender,
//     age,
//     orderNo,
//     diabetesType
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

/**
 * 查询物流信息
 */
function saleProductOrderExpressQuery (params) {
  return doGet(params, url.sale_productOrder_express_query)
}
// function saleProductOrderExpressQuery ({
//   orderNo = '',
//   expressCode = '',
//   courierNo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sale_productOrder_express_query,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     orderNo,
//     expressCode,
//     courierNo
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

/**
 * 查询2种试用类型
 */
function saleProductOrderGetTrialType (params) {
  return doGet(params, url.sale_productOrder_getTrialType)
}

/**
 * 获取患者试用会员续费信息
 */
function vmPatientGetTrialRenewInfo (params) {
  return doGet(params, url.vm_patient_getTrialRenewInfo)
}

/**
 * 获取系统参数值
 */
function dataSysGetParamValue (params) {
  return doGet(params, url.data_sys_getParamValue)
}

// 确认领取订单赠品
function saleProductOrderAcceptGift (params) {
  return doPost(params, url.sale_productOrder_acceptGift)
}

// 更新订单收货人信息
function saleProductOrderModifyOrderConsignee (params) {
  return doPost(params, url.sale_productOrder_modifyOrderConsignee)
}

export {
  getInstallmentPayResult,
  getInstallmentPay,
  getInstallmentGetDetail,
  getInstallmentCreate,
  getInstallmentBuy,
  getOrderInstallment,
  productOrderList,
  productOrderGetDetail,
  createOrder,
  prePay,
  productOrderBuy,
  productOrderCreate,
  productOrderPay,
  promotionPrdCheckValid,
  saleProductOrderPayResult,
  saleCouponGetOrderListForCoupon,
  saleCouponCheckValid,
  saleCouponWriteOff,
  saleCouponSubmitSubsidyApply,
  saleProductOrderExpressQuery,
  saleProductOrderGetTrialType,
  vmPatientGetTrialRenewInfo,
  dataSysGetParamValue,
  saleProductOrderAcceptGift,
  saleProductOrderModifyOrderConsignee,
  saleCouponDeforeSubmitCheck
}
