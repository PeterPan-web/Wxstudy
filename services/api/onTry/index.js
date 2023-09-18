
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取试用退款详情
function saleOrderTrialRefundDetail (params) {
  return doGet(params, url.sale_orderTrialRefund_detail)
}

// 申请退款
function saleOrderTrialRefundApply (params) {
  return doPost(params, url.sale_orderTrialRefund_apply)
}

// 取消退款申请
function saleOrderTrialRefundCancel (params) {
  return doPost(params, url.sale_orderTrialRefund_cancel)
}

// 所有快递公司下拉
function dataExpressAll (params) {
  return doGet(params, url.data_express_all)
}

// 保存或者更新快递信息
function saleTrialRefundExpresssSaveOrUpdate (params) {
  return doPost(params, url.sale_trialRefundExpresss_saveOrUpdate)
}

export {
  saleOrderTrialRefundDetail,
  saleOrderTrialRefundApply,
  saleOrderTrialRefundCancel,
  dataExpressAll,
  saleTrialRefundExpresssSaveOrUpdate
}
