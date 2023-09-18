
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取健康管理方案首页详情
function vmPatientGetHealthManagerSchemeStatus (params) {
  return doGet(params, url.vm_patient_getHealthManagerSchemeStatus)
}

// 获取目标设定列表
function vmMonitorGetTargetList (params) {
  return doGet(params, url.vm_monitor_getTargetList)
}
// 获取频次类型列表
function vmMonitorGetFrequencyTypeList (params) {
  return doGet(params, url.vm_monitor_getFrequencyTypeList)
}

// // 检查项列表
// function vmFurtherConsultationCheckupList (params) {
//   return doGet(params, url.vm_furtherConsultation_checkup_list)
// }
// 获取复诊方案详情
function tcFurtherConsultationSchemeFetByPatient (params) {
  return doGet(params, url.tc_furtherConsultation_scheme_getByPatient)
}

// 获取当前留言建议
function vmChronicDiseaseSuggestGetCurrent (params) {
  return doGet(params, url.vm_chronic_disease_suggest_getCurrent)
}

// 获取所有监测方案
function vmMonitorGetAll (params) {
  return doGet(params, url.vm_monitor_getAll)
}

// 根据id获取监测方案
function vmMonitorGetById (params) {
  return doGet(params, url.vm_monitor_getById)
}
// 根据id获取监测方案
function vmMonitorSaveCustomContent (params) {
  return doPost(params, url.vm_monitor_saveCustomContent)
}

export {
  vmPatientGetHealthManagerSchemeStatus,
  vmMonitorGetTargetList,
  vmMonitorGetFrequencyTypeList,
  // vmFurtherConsultationCheckupList,
  tcFurtherConsultationSchemeFetByPatient,
  vmChronicDiseaseSuggestGetCurrent,
  vmMonitorGetAll,
  vmMonitorGetById,
  vmMonitorSaveCustomContent
}
