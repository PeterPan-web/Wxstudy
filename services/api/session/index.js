/**
 * @file 会话相关
 * @access public
 * @author 燕鹏
*/

import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 刷新患者对员工的在线状态
function refreshOnlineStatus (staffId) {
  let config = {
    loading: false
  }
  return doPost({ staffId }, url.patient_conv_refreshOnlineStatus, config)
}

// 获取患者与员工的最新会话
function getSessionInfo (staffId) {
  return doGet({ staffId }, url.patient_conv_get)
}
// 回复员工
function replyEmployee (staffId) {
  return doPost({ staffId }, url.patient_conv_reply)
}

// 获取患者咨询员工的费用价格
function getFee (staffId) {
  return doGet({ staffId }, url.patient_conv_getFee)
}

// 付费开启会话
function payByMoney (params) {
  return doPost(params, url.patient_conv_payByMoney)
}

// 积分付费开启会话
function payByPoints (params) {
  return doPost(params, url.patient_conv_payByPoints)
}

// 查询支付结果
function getPayResult (paySerialNo) {
  return doGet({ paySerialNo }, url.patient_conv_getPayResult)
}

// 查询支付结果
function orgDirectorGetConsultingPrice (params) {
  return doGet(params, url.org_director_getConsultingPrice)
}

// 获取文件预览配置
function sysFileGetPreviewConfig (params) {
  return doGet(params, url.sys_file_getPreviewConfig)
}

// vip会员获取免费次数
function vmPatientConvGetVipFreeCount (params) {
  return doGet(params, url.vm_patient_conv_getVipFreeCount)
}

// vip免费次数开启会话
function vmPatientConvPayByVipFree (params) {
  return doPost(params, url.vm_patient_conv_payByVipFree)
}

// vip会员获取免费次数
function vmPatientConvGetAskNursePrice (params) {
  return doGet(params, url.vm_patient_conv_getAskNursePrice)
}

// 设置当前会话员工
function vmPatientConvSetCurrentSessionStaff (params) {
  return doPost(params, url.vm_patient_conv_setCurrentSessionStaff)
}

// 获取群聊状态
function imTeamConvStatus (params) {
  return doGet(params, url.im_team_conv_status)
}
// 群聊回复
function imTeamConvReply (params) {
  return doPost(params, url.im_team_conv_reply)
}
// 获取群成员列表
function imTeamMemberList (params) {
  return doGet(params, url.im_team_member_list)
}

export {
  getPayResult,
  refreshOnlineStatus,
  payByPoints,
  payByMoney,
  getFee,
  getSessionInfo,
  replyEmployee,
  orgDirectorGetConsultingPrice,
  sysFileGetPreviewConfig,
  vmPatientConvGetVipFreeCount,
  vmPatientConvPayByVipFree,
  vmPatientConvGetAskNursePrice,
  vmPatientConvSetCurrentSessionStaff,
  imTeamConvStatus,
  imTeamConvReply,
  imTeamMemberList
}
