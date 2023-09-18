import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取转赠详细信息
function saleProductOrderGiftGetDetail (params) {
  return doGet(params, url.sale_productOrder_gift_getDetail)
}

// 转赠订单领取
function saleProductOrderGiftReceive (params) {
  return doPost(params, url.sale_productOrder_gift_receive)
}

// 转赠订单领取同意
function saleProductOrderGiftAgree (params) {
  return doPost(params, url.sale_productOrder_gift_agree)
}

// 转赠订单领取拒绝
function saleProductOrderGiftReject (params) {
  return doPost(params, url.sale_productOrder_gift_reject)
}

// 转赠订单分享
function saleProductOrderGiftShare (params) {
  return doPost(params, url.sale_productOrder_gift_share)
}

export {
  saleProductOrderGiftGetDetail,
  saleProductOrderGiftReceive,
  saleProductOrderGiftAgree,
  saleProductOrderGiftReject,
  saleProductOrderGiftShare
}
