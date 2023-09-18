import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 是否提交了产品告知书签名
function prdMgntIsUploadProductConsent (params) {
  return doGet(params, url.prd_mgnt_isUploadProductConsent, {loading: false})
}
// 获取用户提交的产品告知书签名
function prdMgntGetPatientProductConsent (params) {
  return doGet(params, url.prd_mgnt_getPatientProductConsent, {loading: false})
}
// 保存患者的产品告知书签名
function prdMgntSavePatientProductConsent (params) {
  return doPost(params, url.prd_mgnt_savePatientProductConsent, {loading: false})
}
export {
  prdMgntIsUploadProductConsent,
  prdMgntGetPatientProductConsent,
  prdMgntSavePatientProductConsent
}
