
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 分页查询产品列表
function mallPrdMgntList (params) {
  return doGet(params, url.mall_prd_mgnt_list)
}

// 根据产品编号查询产品详情
function mallPrdMgntGet (params) {
  return doGet(params, url.mall_prd_mgnt_get)
}

// 产品立即购买
function saleMallOrderBuy (params) {
  return doPost(params, url.sale_mallOrder_buy)
}

// 创建产品订单
function saleMallOrderCreate (params) {
  return doPost(params, url.sale_mallOrder_create)
}

// 查询产品订单详情
function saleMallOrderGetDetail (params) {
  return doGet(params, url.sale_mallOrder_getDetail)
}

// 产品订单立即支付
function saleMallOrderPay (params) {
  return doPost(params, url.sale_mallOrder_pay)
}

// 产品订单支付结果查询
function saleMallOrderPayResult (params) {
  return doGet(params, url.sale_mallOrder_pay_result)
}

// 取消订单
function bonusMallOrderCancel (params) {
  return doPost(params, url.bonus_mallOrder_cancel)
}

// 更新订单收货人信息
function saleMallOrderModifyOrderConsignee (params) {
  return doPost(params, url.sale_mallOrder_modifyOrderConsignee)
}

// 产品订单列表查询
function saleMallOrderList (params) {
  return doGet(params, url.sale_mallOrder_list)
}

// 物流查询
function saleMallOrderExpressQuery (params) {
  return doGet(params, url.sale_mallOrder_express_query)
}

// 获取患者试纸产品编号类型
function saleMallOrderGetTestPaperNos (params) {
  return doGet(params, url.sale_mallOrder_getTestPaperNos)
}

export {
  mallPrdMgntList,
  mallPrdMgntGet,
  saleMallOrderBuy,
  saleMallOrderCreate,
  saleMallOrderGetDetail,
  saleMallOrderPay,
  saleMallOrderPayResult,
  bonusMallOrderCancel,
  saleMallOrderModifyOrderConsignee,
  saleMallOrderList,
  saleMallOrderExpressQuery,
  saleMallOrderGetTestPaperNos
}
