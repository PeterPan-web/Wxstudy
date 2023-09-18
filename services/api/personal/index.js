import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'
// 查询患者的关注列表
function vmPatientFollowList (params) {
  return doGet(params, url.vm_patient_follow_list)
}

// 删除关注
function vmPatientFollowRemove (params) {
  return doPost(params, url.vm_patient_follow_remove)
}

// 查询患者的粉丝列表
function vmPatientFansList (params) {
  return doGet(params, url.vm_patient_fans_list)
}

// 删除粉丝
function vmPatientFansRemove (params) {
  return doPost(params, url.vm_patient_fans_remove)
}

// 获取患者绑定的设备信息
function vmPatientDeviceList (params) {
  return doGet(params, url.vm_patient_device_list)
}

// 解除设备绑定
function vmPatientDeviceUnbind (params) {
  return doPost(params, url.vm_patient_device_unbind)
}

// 获取用户剩余积分
function vmPointsGet (params) {
  return doGet(params, url.vm_points_get)
}

// 积分日志查询
function vmPointsListLog (params) {
  return doGet(params, url.vm_points_listLog)
}

// 查询患者控糖目标
function bsGetControlTarget (params) {
  return doGet(params, url.bs_getControlTarget)
}

// 查询患者生效的数字化管理方案列表
function vmFollowupPlanListCurrent (params) {
  return doGet(params, url.vm_followupPlan_listCurrent)
}

// 查询患者生效的数字化管理方案列表
function vmFollowupPlanGetEffective (params) {
  return doGet(params, url.vm_followupPlan_getEffective)
}

// 添加关注
function vmPatientFollow (params) {
  return doPost(params, url.vm_patient_follow)
}

// 判断是否关注某个患者
function vmPatientFollowIsFollow (params) {
  return doGet(params, url.vm_patient_follow_isFollow)
}

// 消费明细列表
function vmPatientBillingList (params) {
  return doGet(params, url.vm_patient_billing_list)
}

// 获取用药方案
function patientMedicationPlanGet (params) {
  return doGet(params, url.patient_medicationPlan_get)
}
// 获取患者出院小结(含用药)
function vmFollowupPlanGetDischargeSummary (params) {
  return doGet(params, url.vm_followupPlan_getDischargeSummary)
}
// 获取文章列表
function documentList (params) {
  return doGet(params, url.document_list)
}

// 获取文章详情
function documentGet (params) {
  return doGet(params, url.document_get)
}

// 复诊跟踪列表
function tcFurtherConsultationList (params) {
  return doGet(params, url.tc_furtherConsultation_list)
}

// 获取复诊方案详情
function tcFurtherConsultationGetDetail (params) {
  return doGet(params, url.tc_furtherConsultation_getDetail)
}

// 标记复诊
function tcFurtherConsultationRemark (params) {
  return doPost(params, url.tc_furtherConsultation_remark)
}

// 获取测量提醒开关
function bsGetRemindSwitch (params) {
  return doGet(params, url.bs_getRemindSwitch)
}

// 设置测量提醒开关
function bsSaveRemindSwitch (params) {
  return doPost(params, url.bs_saveRemindSwitch)
}

// 患者奖励金进度
function vmPatientBonusProgress (params) {
  return doGet(params, url.vm_patient_bonus_progress)
}

// 患者奖励金的变更列表
function vmPatientBonusLogList (params) {
  return doGet(params, url.vm_patient_bonus_log_list)
}

// 使用奖学金判断
function bonuOrderIsCanUse (params) {
  return doGet(params, url.bonus_order_isCanUse, {loading: false})
}

// 患者奖励金任务列表
function vmPatientBonusTaskGet (params) {
  return doGet(params, url.vm_patientBonusTask_get)
}

// 获取奖励金兑换通知
function vmPatientBonusExchangeNoticeFetch (params) {
  return doGet(params, url.vm_patient_bonusExchangeNotice_fetch)
}

// 确认兑换消息
function vmPatientBonusExchangeNoticeConfirm (params) {
  return doPost(params, url.vm_patient_bonusExchangeNotice_confirm)
}

// 患者奖励金通知开关
function vmPatientBonusNoticeSwitch (params) {
  return doPost(params, url.vm_patient_bonus_notice_switch)
}

// 患者奖励金开关状态
function vmPatientBonusChangeNoticeSwitchStatus (params) {
  return doGet(params, url.vm_patient_bonus_changeNoticeSwitch_status)
}

// 分享关注血糖二维码
function bsQrShare (params, url) {
  return doGet(params, url)
}

// 续费弹框信息
function saleRenewInfo (params) {
  return doGet(params, url.sale_renew_info)
}

// 使用权益码
function saleCouponWriteOffMembershipCoupon (params) {
  return doPost(params, url.sale_coupon_writeOffMembershipCoupon)
}

// 获取患者的服务保障明细
function vmPatientGetServiceAssuranceRecord (params) {
  return doGet(params, url.vm_patient_getServiceAssuranceRecord)
}

// 获取患者全流程操作记录列表
function vmPatientGetPatientActionLog (params) {
  return doGet(params, url.vm_patient_getPatientActionLog)
}

export {
  vmPatientFollowList,
  vmPatientFollowRemove,
  vmPatientFansList,
  vmPatientFansRemove,
  vmPatientDeviceList,
  vmPatientDeviceUnbind,
  vmPointsGet,
  vmPointsListLog,
  bsGetControlTarget,
  vmFollowupPlanListCurrent,
  vmFollowupPlanGetEffective,
  vmPatientFollow,
  vmPatientFollowIsFollow,
  vmPatientBillingList,
  patientMedicationPlanGet,
  vmFollowupPlanGetDischargeSummary,
  documentList,
  documentGet,
  tcFurtherConsultationList,
  tcFurtherConsultationGetDetail,
  tcFurtherConsultationRemark,
  bsGetRemindSwitch,
  bsSaveRemindSwitch,
  vmPatientBonusProgress,
  vmPatientBonusLogList,
  bonuOrderIsCanUse,
  vmPatientBonusTaskGet,
  vmPatientBonusExchangeNoticeFetch,
  vmPatientBonusExchangeNoticeConfirm,
  vmPatientBonusNoticeSwitch,
  vmPatientBonusChangeNoticeSwitchStatus,
  bsQrShare,
  saleRenewInfo,
  saleCouponWriteOffMembershipCoupon,
  vmPatientGetServiceAssuranceRecord,
  vmPatientGetPatientActionLog
}
