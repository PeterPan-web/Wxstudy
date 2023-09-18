
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// 获取病历卡详情
function getMedicalCard () {
  return doGet({}, url.medicalCard_get)
}
// 获取医院子科室
function dataDepartmentGetByAppId () {
  return doGet({}, url.data_department_getByAppId)
}
// 添加病历卡
function medicalCardSave (params, tips = '添加成功') {
  return doPost(params, url.medicalCard_save, tips)
}

// 获取算数验证码
function getArithmeticCode () {
  return doGet({}, url.medicalCard_arithmetic_code)
}

// 发送短信验证码
function getSmsCode (mobile, arithmeticCode) {
  return doGet({mobile, arithmeticCode}, url.medicalCard_sms_code)
}

// 获取病历详情
function getMedicalRecord () {
  return doGet({}, url.medicalRecord_get)
}

// 保存或修改病历详情
function saveMedicalRecord (params, tips = '保存成功') {
  return doPost(params, url.medicalRecord_save, tips)
}

// 所有慢性并发症
function getComplication () {
  return doGet({}, url.vm_complication_get)
}

// 历史记录列表
function getMedicalRecordHistory () {
  return doGet({}, url.medicalRecordHistory_get)
}

// 删除病例
function DeletemedicalRecord (params) {
  return doPost(params, url.medicalRecord_delete)
}

// 新建拍照病例
function savePhotoRecords (params) {
  return doPost(params, url.photoRecord_save, '添加成功')
}

// 获取医院科室
function getDepartmentAll () {
  return doGet({}, url.data_department_all)
}

// 拍照病历列表
function getPhotoRecordList () {
  return doGet({}, url.photoRecord_list)
}
// 删除拍照病历
function deletePhotoRecord (photoRecordId) {
  return doPost({photoRecordId}, url.photoRecord_delete, '删除成功')
}

// 删除病历详情历史记录
function deleteMedicalRecordHistory (historyId) {
  return doPost({historyId}, url.medicalRecordHistory_delete, '删除成功')
}

// 获取病历详情历史记录（结果参数与获取病历详情保持一致）
function getMedicalRecordHistoryInfo (historyId) {
  return doGet({historyId}, url.medicalRecordHistory_info)
}

// 登录患者的信息
function getPatientLoginInfo () {
  return doGet({}, url.patient_loginInfo)
}

// 获取患者的签约医生信息
function vmPatientGetSignDoctors () {
  return doGet({}, url.vm_patient_getSignDoctors)
}

// 获取基本信息
function vmMedicalCardGetBaseInfo () {
  return doGet({}, url.vm_medicalCard_getBaseInfo)
}

// 保存基本信息
function vmMedicalCardSaveBaseInfo (params) {
  return doPost(params, url.vm_medicalCard_SaveBaseInfo)
}

// 糖尿病类型
function vmMedicalCardAllDiabetesType () {
  return doGet({}, url.vm_medicalCard_allDiabetesType)
}

// 所有已有并发症接口
function vmComplicationExistAll () {
  return doGet({}, url.vm_complication_existAll)
}

// 获取药品列表
function dataDrugList (params) {
  return doGet(params, url.data_drug_list)
}

// 保存药品
function dataDrugSave (params) {
  return doPost(params, url.data_drug_save)
}

// 患者是否已经有测评
function vmEvaluationIsPatientFilled (params) {
  return doGet(params, url.vm_evaluation_isPatientFilled)
}

// 测评问卷列表
function vmEvaluationQuestionList (params) {
  return doGet(params, url.vm_evaluation_questionList)
}

// 提交测评
function vmEvaluationSaveEvaluation (params) {
  return doPost(params, url.vm_evaluation_saveEvaluation)
}

// 患者测评得分
function vmEvaluationPatientScore (params) {
  return doGet(params, url.vm_evaluation_patientScore)
}

// 获取患者的答卷列表
function vmEvaluationPatientAnswerList (params) {
  return doGet(params, url.vm_evaluation_patientAnswerList)
}

// 提交测评的病例内容
function vmEvaluationSaveEvaluationMedical (params) {
  return doPost(params, url.vm_evaluation_saveEvaluationMedical)
}

// 获取患者的签约医生信息(所有医生)
function vmPatientGetAllSignDoctors (params) {
  return doGet(params, url.vm_patient_getAllSignDoctors)
}

// 获取测评信息（新）
function vmEvaluationGetEvaluationData (params) {
  return doGet(params, url.vm_evaluation_getEvaluationData)
}

// 保存测评信息（新）
function vmEvaluationSaveEvaluationData (params) {
  return doPost(params, url.vm_evaluation_saveEvaluationData)
}

// 保存知情同意书（DDMC）
function vmPatientConsentSave (params) {
  return doPost(params, url.vm_patient_consent_save)
}

// 获取知情同意书配置（DDMC）
function vmPatientConsentGetConfig (params) {
  return doGet(params, url.vm_patient_consent_getConfig)
}

export {
  getMedicalCard,
  dataDepartmentGetByAppId,
  medicalCardSave,
  getArithmeticCode,
  getSmsCode,
  getMedicalRecord,
  saveMedicalRecord,
  getComplication,
  getMedicalRecordHistory,
  DeletemedicalRecord,
  savePhotoRecords,
  getDepartmentAll,
  getPhotoRecordList,
  deleteMedicalRecordHistory,
  getMedicalRecordHistoryInfo,
  getPatientLoginInfo,
  deletePhotoRecord,
  vmPatientGetSignDoctors,
  vmMedicalCardGetBaseInfo,
  vmMedicalCardSaveBaseInfo,
  vmMedicalCardAllDiabetesType,
  vmComplicationExistAll,
  dataDrugList,
  dataDrugSave,
  vmEvaluationIsPatientFilled,
  vmEvaluationQuestionList,
  vmEvaluationSaveEvaluation,
  vmEvaluationPatientScore,
  vmEvaluationPatientAnswerList,
  vmEvaluationSaveEvaluationMedical,
  vmPatientGetAllSignDoctors,
  vmEvaluationGetEvaluationData,
  vmEvaluationSaveEvaluationData,
  vmPatientConsentSave,
  vmPatientConsentGetConfig
}
