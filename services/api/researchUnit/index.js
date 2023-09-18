import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取患者随访记录列表
function rwFollowupPatientVisitList (params) {
  return doGet(params, url.rw_followup_patientVisit_list)
}
// 获取随访记录详情
function rwFollowupPatientVisitGetDetail (params) {
  return doGet(params, url.rw_followup_patientVisit_getDetail)
}
// 提交随访
function rwFollowupPatientVisitSubmit (params) {
  return doPost(params, url.rw_followup_patientVisit_submit)
}
// 是否已填写资料
function rwPatientBaseInfoIsWriteData (params) {
  return doGet(params, url.rw_patientBaseInfo_isWriteData)
}
// 上传知情同意书
function rwProjectPatientUploadProjectConsent (params) {
  return doPost(params, url.rw_projectPatient_uploadProjectConsent)
}
// 是否已上传知情同意书
function rwProjectPatientIsUploadConsent (params) {
  return doGet(params, url.rw_projectPatient_isUploadConsent)
}
// 获取员工的项目列表
function rwProjectGetDoctorProjectList (params) {
  return doGet(params, url.rw_project_getDoctorProjectList)
}
// 获取项目的知情同意书详情
function rwProjectGetIcf (params) {
  return doGet(params, url.rw_project_getIcf)
}
// 获取扫码医生列表
function vmPatientGetDoctorList (params) {
  return doGet(params, url.vm_patient_getDoctorList)
}
// 患者选择加入项目
function rwProjectPatientSelectAndJoinProject (params) {
  return doPost(params, url.rw_projectPatient_selectAndJoinProject)
}
// 保存患者基本信息
function rwPatientBaseInfoSaveOrUpdate (params) {
  return doPost(params, url.rw_patientBaseInfo_saveOrUpdate)
}
// 获取患者基本信息
function rwPatientBaseInfoGet (params) {
  return doGet(params, url.rw_patientBaseInfo_get)
}
// 发送短信验证码
function rwPatientBaseInfoSmsCode (params) {
  return doGet(params, url.rw_patientBaseInfo_sms_code)
}
// 获取项目信息
function rwProjectGet (params) {
  return doGet(params, url.rw_project_get)
}
// 获取患者基本信息历史列表
function rwPatientBaseInfoHistorys (params) {
  return doGet(params, url.rw_patientBaseInfo_historys)
}
// 获取患者历史基本信息
function rwPatientBaseInfoGetHistory (params) {
  return doGet(params, url.rw_patientBaseInfo_getHistory)
}
// 获取参与项目患者基本信息
function rwPatientBaseInfoGetBaseInfo (params) {
  return doGet(params, url.rw_patientBaseInfo_getBaseInfo)
}
// 根据患者查询获取已提交的crf详情
function rwCrfGetFinishCrfDetailByPatientId (params) {
  return doGet(params, url.rw_crf_getFinishCrfDetailByPatientId)
}
// 是否已加入过该项目
function rwProjectPatientIsJoinProject (params) {
  return doGet(params, url.rw_projectPatient_isJoinProject)
}
// 获取患者历史crf记录列表
function rwCrfHistoryList (params) {
  return doGet(params, url.rw_crf_history_list)
}
// 获取历史crf详情
function rwCrfHistoryDetail (params) {
  return doGet(params, url.rw_crf_history_detail)
}
// 获取助理信息
function orgStaffGetResearchAssistant (params) {
  return doGet(params, url.org_staff_getResearchAssistant)
}
// 根据员工ID获取助理信息
function orgStaffGetById (params) {
  return doGet(params, url.org_staff_getById)
}
// 获取文章详情
function rwArticleGet (params) {
  return doGet(params, url.rw_article_get)
}
// 获取文章列表
function rwArticleList (params) {
  return doGet(params, url.rw_article_list)
}
// 设置项目打卡提醒
function rwProjectPatientSetNotice (params) {
  return doPost(params, url.rw_projectPatient_setNotice)
}

export {
  rwFollowupPatientVisitList,
  rwFollowupPatientVisitGetDetail,
  rwFollowupPatientVisitSubmit,
  rwPatientBaseInfoIsWriteData,
  rwProjectPatientUploadProjectConsent,
  rwProjectPatientIsUploadConsent,
  rwProjectGetDoctorProjectList,
  rwProjectGetIcf,
  vmPatientGetDoctorList,
  rwProjectPatientSelectAndJoinProject,
  rwPatientBaseInfoSaveOrUpdate,
  rwPatientBaseInfoGet,
  rwPatientBaseInfoSmsCode,
  rwProjectGet,
  rwPatientBaseInfoHistorys,
  rwPatientBaseInfoGetHistory,
  rwPatientBaseInfoGetBaseInfo,
  rwCrfGetFinishCrfDetailByPatientId,
  rwProjectPatientIsJoinProject,
  rwCrfHistoryList,
  rwCrfHistoryDetail,
  orgStaffGetResearchAssistant,
  orgStaffGetById,
  rwArticleGet,
  rwArticleList,
  rwProjectPatientSetNotice
}
