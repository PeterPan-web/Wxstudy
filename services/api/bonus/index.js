import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 直接支付使用奖学金
function bonusOrderUse (params) {
  return doGet(params, url.bonus_order_use)
}

// 提交订单
function bonusOrderCreate (params) {
  return doPost(params, url.bonus_order_create)
}

// 获取订单详情
function bonusOrderDetail (params) {
  return doGet(params, url.bonus_order_detail)
}

// 立即支付
function bonusOrderPay (params) {
  return doPost(params, url.bonus_order_pay)
}

// 0元支付
function bonusOrderZeroPay (params) {
  return doPost(params, url.bonus_order_zeroPay)
}

// 查询支付结果
function bonusOrderPayResult (params) {
  return doGet(params, url.bonus_order_pay_result)
}

// 取消订单
function bonusOrderCancel (params) {
  return doPost(params, url.bonus_order_cancel)
}

// 获取某个患者一定时间范围内的血糖记录完整的统计数据
function bsGetFullStatistics (params) {
  return doGet(params, url.bs_getFullStatistics)
}

// 查询患者最新的测量建议方案
function bsGetLatestMeasureSchemaWithTest (params) {
  return doGet(params, url.bs_getLatestMeasureSchemaWithTest)
}

export {
  bonusOrderUse,
  bonusOrderCreate,
  bonusOrderDetail,
  bonusOrderPay,
  bonusOrderZeroPay,
  bonusOrderPayResult,
  bonusOrderCancel,
  bsGetFullStatistics,
  bsGetLatestMeasureSchemaWithTest
}
