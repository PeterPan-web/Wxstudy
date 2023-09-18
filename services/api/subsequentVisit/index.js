import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 可复诊医生列表
function vmFurtherConsultationOrderDoctorList (params) {
  return doGet(params, url.vm_further_consultation_order_doctor_list)
}
// 发起预约
function vmFurtherConsultationOrderCreate (params) {
  return doPost(params, url.vm_further_consultation_order_create)
}

// 复诊预约列表
function vmFurtherConsultationOrderList (params) {
  return doGet(params, url.vm_further_consultation_order_list)
}
// 复诊预约详情
function vmFurtherConsultationOrderInfo (params) {
  return doGet(params, url.vm_further_consultation_order_info)
}

// 查询未读复诊预约数
function vmFurtherConsultationOrderNoReadCount (params) {
  return doGet(params, url.vm_further_consultation_order_noReadCount)
}

// 复诊提醒任务详情
function tcFcrtGet (params) {
  return doGet(params, url.tc_fcrt_get)
}

// 复诊提醒操作记录
function tcFcrtGetLog (params) {
  return doGet(params, url.tc_fcrt_getLog)
}

export {
  vmFurtherConsultationOrderDoctorList,
  vmFurtherConsultationOrderCreate,
  vmFurtherConsultationOrderList,
  vmFurtherConsultationOrderInfo,
  vmFurtherConsultationOrderNoReadCount,
  tcFcrtGet,
  tcFcrtGetLog
}
