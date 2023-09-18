import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取查房列表
function tcRoundsTaskPatientList (params) {
  return doGet(params, url.tc_roundsTask_patient_list)
}
// 获取查房详情
function vmRoundsGet (params) {
  return doGet(params, url.vm_rounds_get)
}

// 获取护士查房列表
function tcNurseRoundsTaskList (params) {
  return doGet(params, url.tc_nurse_roundsTask_list)
}
// 获取患者续费时间
function patientInfo (params) {
  return doGet(params, url.patient_loginInfo)
}

// 获取护士查房详情
function tcNurseRoundsTaskGet (params) {
  return doGet(params, url.tc_nurse_roundsTask_get)
}
// 获取护士查房详情
function bsGroupByMeasureDate (params) {
  return doGet(params, url.sugar_groupByMeasureDate)
}

export {
  tcRoundsTaskPatientList,
  vmRoundsGet,
  tcNurseRoundsTaskList,
  patientInfo,
  tcNurseRoundsTaskGet,
  bsGroupByMeasureDate
}
