import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// 当前用户的责任护士信息
function orgNurseChargenurse (params) {
  return doGet(params, url.org_nurse_charge_nurse)
}
// 查找患者的总体建议
function vmGeneralAdviceGet (params) {
  return doGet(params, url.vm_generalAdvice_get)
}
// 获取运动建议详情
function vmSportAdviceGet (params) {
  return doGet(params, url.vm_sportAdvice_get)
}
// 查找用户的饮食建议
function vmGoodAdviceGet (params) {
  return doGet(params, url.vm_foodAdvice_get)
}

// 查询患者健康月报列表
function vmSugarListHealthyReport (params) {
  return doGet(params, url.vm_sugar_listHealthyReport)
}

// 签约医生对应的护士列表
function orgNurseList (params) {
  return doGet(params, url.org_nurse_list)
}

// 随访护士
function orgFollowupNurseGet (params) {
  return doGet(params, url.org_followupNurse_get)
}

//  获取eKtang热线的信息
function getDutyNurse (params) {
  return doGet(params, url.org_staff_getDutyNurse)
}

//  获取社区护士详情
function orgCmntNurseGet (params) {
  return doGet(params, url.org_cmntNurse_get)
}

//  获取单聊会话历史记录
function getHistoryList (params) {
  return doGet(params, url.im_personalConv_historyList)
}

//  获取护士评分
function orgNurseGetScore (params) {
  return doGet(params, url.org_nurse_getScore)
}

//  DDMC公众号我的护士列表
function orgNurseDdmcMyNurse (params) {
  return doGet(params, url.org_nurse_ddmcMyNurse)
}

//  获取当前时间是否DDMC护士工作时间
function vmPatientConvGetIsDdmcWorkTime (params) {
  return doGet(params, url.vm_patient_conv_getIsDdmcWorkTime)
}
//  RWCI周期工作计划明细
function tcRwciNurseScheduleScheduleList (params) {
  return doGet(params, url.tc_rwci_nurseSchedule_scheduleList)
}
//  护士工作计划小结任务详情
function tcRwciNurseScheduleSummaryTaskDetail (params) {
  return doGet(params, url.tc_rwci_nurseSchedule_summaryTaskDetail)
}
//  患者确认任务已完成
function tcRwciNurseScheduleConfirmFinished (params) {
  return doPost(params, url.tc_rwci_nurseSchedule_confirmFinished)
}

export {
  getHistoryList,
  getDutyNurse,
  orgNurseChargenurse,
  vmGeneralAdviceGet,
  vmSportAdviceGet,
  vmGoodAdviceGet,
  vmSugarListHealthyReport,
  orgNurseList,
  orgFollowupNurseGet,
  orgCmntNurseGet,
  orgNurseGetScore,
  orgNurseDdmcMyNurse,
  vmPatientConvGetIsDdmcWorkTime,
  tcRwciNurseScheduleScheduleList,
  tcRwciNurseScheduleSummaryTaskDetail,
  tcRwciNurseScheduleConfirmFinished
}
