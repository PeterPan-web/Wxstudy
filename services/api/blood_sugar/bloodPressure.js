
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取最新一条血压详情
function vmPatientBloodPressureGetLastOne (params) {
  return doGet(params, url.vm_patient_bloodPressure_getLastOne)
}
// 获取血压列表
function vmPatientBloodPressureList (params) {
  return doGet(params, url.vm_patient_bloodPressure_list)
}
// 保存血压
function vmPatientBloodPressureSave (params) {
  return doPost(params, url.vm_patient_bloodPressure_save)
}
// 获取血压折线图数据
function vmPatientBloodPressureStatistic (params) {
  return doGet(params, url.vm_patient_bloodPressure_statistic)
}
// 标记血压记录他人测量
function vmPatientBloodPressureSetOthers (params) {
  return doPost(params, url.vm_patient_bloodPressure_setOthers)
}
// 获取患者血压设备列表
function vmPatientBloodPressureDeviceList (params) {
  return doGet(params, url.vm_patient_bloodPressure_deviceList)
}
// 绑定血压设备
function vmPatientBloodPressureBind (params) {
  return doPost(params, url.vm_patient_bloodPressure_bind)
}
// 解绑血压设备
function vmPatientBloodPressureUnbind (params) {
  return doPost(params, url.vm_patient_bloodPressure_unbind)
}

export {
  vmPatientBloodPressureGetLastOne,
  vmPatientBloodPressureList,
  vmPatientBloodPressureSave,
  vmPatientBloodPressureStatistic,
  vmPatientBloodPressureSetOthers,
  vmPatientBloodPressureDeviceList,
  vmPatientBloodPressureBind,
  vmPatientBloodPressureUnbind
}
