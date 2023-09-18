import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 患者问卷列表
function qtnQuestionnaireList (params) {
  return doGet(params, url.qtn_questionnaire_list, {loading: false})
}

// 获取问卷详情
function qtnQuestionnaireGet (params) {
  return doGet(params, url.qtn_questionnaire_get)
}

// 提交问卷
function qtnQuestionnaireSubmitQuestionnaire (params) {
  return doPost(params, url.qtn_questionnaire_submitQuestionnaire)
}

// 获取问卷详情包含用户答案
function qtnQuestionnaireGetIncludeAnswer (params) {
  return doGet(params, url.qtn_questionnaire_getIncludeAnswer)
}

// 获取患者和问卷状态
function qtnQuestionnaireGetPatientQuestionnaireStatus (params) {
  return doGet(params, url.qtn_questionnaire_getPatientQuestionnaireStatus)
}

export {
  qtnQuestionnaireList,
  qtnQuestionnaireGet,
  qtnQuestionnaireSubmitQuestionnaire,
  qtnQuestionnaireGetIncludeAnswer,
  qtnQuestionnaireGetPatientQuestionnaireStatus
}
