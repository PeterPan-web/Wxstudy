
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取ldl-c列表
function vmPatientLdlCList (params) {
  return doGet(params, url.vm_patient_ldlC_list)
}

// 获取最新一条ldl-c
function vmPatientLdlCGetLastOne (params) {
  return doGet(params, url.vm_patient_ldlC_getLastOne)
}

// 保存ldl-c
function vmPatientLdlCSave (params) {
  return doPost(params, url.vm_patient_ldlC_save)
}

// 获取ldl-c折线图数据
function vmPatientLdlCStatistic (params) {
  return doGet(params, url.vm_patient_ldlC_statistic)
}

export {
  vmPatientLdlCList,
  vmPatientLdlCGetLastOne,
  vmPatientLdlCSave,
  vmPatientLdlCStatistic
}
