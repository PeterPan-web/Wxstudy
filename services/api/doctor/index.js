
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'
// 获当前用户扫码医生列表
function orgDoctorScanDoctors (params) {
  return doGet(params, url.org_doctor_scanDoctors)
}
// 购买产品的医生列表
function vmPatientGetSignDoctorsAndRelateDoctor (params) {
  return doGet(params, url.vm_patient_getSignDoctorsAndRelateDoctor)
}
// 通过货架id返回患者的购买信息
function vmPatientGetPatientDoctorBuyInfo (params) {
  return doGet(params, url.vm_patient_getPatientDoctorBuyInfo)
}

// 获取指定医生信息
function orgDoctorChargeDoctor (params) {
  return doGet(params, url.org_doctor_charge_doctor)
}

// 登录用户的签约医生列表
function orgDoctorSignDoctors (params) {
  return doGet(params, url.org_doctor_signDoctors)
}
// 获取登录用户的签约的医生
function orgDoctorSignedDoctors (params) {
  return doGet(params, url.org_doctor_signedDoctor)
}
// 登录患者的所有扫码医生
function orgDoctorAllScanDoctors (params) {
  return doGet(params, url.org_doctor_allScanDoctors)
}

// 医生动态列表
function orgDoctorDynamicList (params) {
  return doGet(params, url.org_doctorDynamic_list, {loading: false})
}

// 患者与医生签约
function vmPatientBindDoctor (params) {
  return doPost(params, url.vm_patient_bindDoctor)
}

// 获取医生文章详情 （返回详见医生APP org/doctorDynamic/get）
function orgDoctorDynamicGet (params) {
  return doGet(params, url.org_doctorDynamic_get)
}

// 添加评论
function orgDoctorDynamicCommentSave (params) {
  return doPost(params, url.org_doctorDynamic_comment_save)
}

// 删除评论
function orgDoctorDynamicCommenDelete (params) {
  return doPost(params, url.org_doctorDynamic_comment_delete)
}

// 点赞或者取消点赞
function orgDoctorDynamicLike (params) {
  return doPost(params, url.org_doctorDynamic_like)
}

// 请求微信预支付
function orgDoctorDynamicAdmirePrePay (params) {
  return doPost(params, url.org_doctorDynamic_admire_prePay)
}

// 打赏支付结果查询
function orgDoctorDynamicPayResult (params) {
  return doGet(params, url.org_doctorDynamic_pay_result)
}

// 动态阅读量+1
function orgDoctorDynamicReadAdd (params) {
  return doPost(params, url.org_doctorDynamic_read_add)
}

// 会话评价
function vmPatientConvComment (params) {
  return doPost(params, url.vm_patient_conv_comment)
}

// 会话打赏
function vmPatientConvReward (params) {
  return doPost(params, url.vm_patient_conv_reward)
}

// 查询会话打赏支付结果
function vmPatientConvRewardGetPayResult (params) {
  return doGet(params, url.vm_patient_conv_reward_getPayResult)
}

// 获取指定指导专家信息
function orgDirectorChargeDirector (params) {
  return doGet(params, url.org_director_charge_director)
}

// 分页查询文章动态点赞人
function orgDoctorDynamicLikeList (params) {
  return doGet(params, url.org_doctorDynamic_like_list)
}
// 申请变更签约医生
function orgDoctorApplyChangeSign (params) {
  return doPost(params, url.org_doctor_applyChangeSign)
}

// 患者是否签约医生
function vmPatientDoctorHasSigned (params) {
  return doGet(params, url.vm_patient_doctorHasSigned)
}

// 获取扫码医生文章列表
function documentScanedDoctorDocumentlist (params) {
  return doGet(params, url.document_scanedDoctorDocumentlist)
}

// 是否可以更改签约医生
function vmPatientIsChangeSign (params) {
  return doGet(params, url.vm_patient_isChangeSign)
}

// 登录用户的签约医生列表（不区分医院公众号）
function orgDoctorSignDoctorsNotDiff (params) {
  return doGet(params, url.org_doctor_signDoctorsNotDiff)
}

export {
  orgDoctorScanDoctors,
  vmPatientGetSignDoctorsAndRelateDoctor,
  vmPatientGetPatientDoctorBuyInfo,
  orgDoctorSignDoctors,
  orgDoctorSignedDoctors,
  orgDoctorAllScanDoctors,
  orgDoctorChargeDoctor,
  orgDoctorDynamicList,
  vmPatientBindDoctor,
  orgDoctorDynamicGet,
  orgDoctorDynamicCommentSave,
  orgDoctorDynamicCommenDelete,
  orgDoctorDynamicLike,
  orgDoctorDynamicAdmirePrePay,
  orgDoctorDynamicPayResult,
  orgDoctorDynamicReadAdd,
  vmPatientConvComment,
  vmPatientConvReward,
  vmPatientConvRewardGetPayResult,
  orgDirectorChargeDirector,
  orgDoctorDynamicLikeList,
  orgDoctorApplyChangeSign,
  vmPatientDoctorHasSigned,
  documentScanedDoctorDocumentlist,
  vmPatientIsChangeSign,
  orgDoctorSignDoctorsNotDiff
}
