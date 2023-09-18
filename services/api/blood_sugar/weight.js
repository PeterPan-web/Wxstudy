import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取体重折线图数据
function vmPatientWeightStatistic (params) {
  return doGet(params, url.vm_patient_weight_statistic)
}

// 获取体重列表
function vmPatientWeightList (params) {
  return doGet(params, url.vm_patient_weight_list)
}

// 获取最新一条体重数据
function vmPatientWeightGetLastOne (params) {
  return doGet(params, url.vm_patient_weight_getLastOne)
}

// 获取体重详情
function vmPatientWeightGet (params) {
  return doGet(params, url.vm_patient_weight_get)
}

// 保存体重
function vmPatientWeightSave (params) {
  return doPost(params, url.vm_patient_weight_save)
}
// 修改体重
function vmPatientWeightModify (params) {
  return doPost(params, url.vm_patient_weight_modify)
}
// 删除体重记录
function vmPatientWeightDelete (params) {
  return doPost(params, url.vm_patient_weight_delete)
}
// 获取医生建议体重
function vmPatientWeightGetAdvice (params) {
  return doGet(params, url.vm_patient_weight_getAdvice)
}

// 获取体重折线图数据（按月份）
function vmPatientWeightStatisticByMonth (params) {
  return doGet(params, url.vm_patient_weight_statisticByMonth)
}
export {
  vmPatientWeightStatistic,
  vmPatientWeightList,
  vmPatientWeightGetLastOne,
  vmPatientWeightGet,
  vmPatientWeightSave,
  vmPatientWeightModify,
  vmPatientWeightDelete,
  vmPatientWeightGetAdvice,
  vmPatientWeightStatisticByMonth
}
