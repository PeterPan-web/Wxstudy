import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取最新一条尿酸数据
function vmPatientUricAcidGetLastOne (params) {
  return doGet(params, url.vm_patient_uricAcid_getLastOne)
}
// 获取尿酸详情
function vmPatientUricAcidGet (params) {
  return doGet(params, url.vm_patient_uricAcid_get)
}
// 获取尿酸列表
function vmPatientUricAcidList (params) {
  return doGet(params, url.vm_patient_uricAcid_list)
}
// 获取尿酸折线图数据
function vmPatientUricAcidStatistic (params) {
  return doGet(params, url.vm_patient_uricAcid_statistic)
}
// 获取尿酸折线图数据（按月统计）
function vmPatientUricAcidStatisticByMonth (params) {
  return doGet(params, url.vm_patient_uricAcid_statisticByMonth)
}
// 保存尿酸
function vmPatientUricAcidSave (params) {
  return doPost(params, url.vm_patient_uricAcid_save)
}

// 修改尿酸
function vmPatientUricAcidModify (params) {
  return doPost(params, url.vm_patient_uricAcid_modify)
}
// 删除尿酸记录
function vmPatientUricAcidDelete (params) {
  return doPost(params, url.vm_patient_uricAcid_delete)
}
export {
  vmPatientUricAcidGetLastOne,
  vmPatientUricAcidGet,
  vmPatientUricAcidList,
  vmPatientUricAcidStatistic,
  vmPatientUricAcidStatisticByMonth,
  vmPatientUricAcidSave,
  vmPatientUricAcidModify,
  vmPatientUricAcidDelete
}
