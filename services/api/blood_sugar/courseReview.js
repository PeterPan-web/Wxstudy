
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 缓解治疗疗程回顾列表
function vmRemissionCureSummaryList (params) {
  return doGet(params, url.vm_remissionCure_summary_list)
}

// 获取疗程总结详情
function vmRemissionCureSummaryDetail (params) {
  return doGet(params, url.vm_remissionCure_summary_detail)
}
// 获取疗程总结详情
function vmRemissionCureReportDetail (params) {
  return doGet(params, url.vm_remissionCure_report_detail)
}


// 提交缓解治疗评价
function vmRemissionCureSubmitEvaluation (params) {
  return doPost(params, url.vm_remissionCure_submitEvaluation)
}

// 获取疗程总结总成绩单详情
function vmRemissionCureSummaryFinalDetail (params) {
  return doGet(params, url.vm_remissionCure_summary_finalDetail)
}

export {
  vmRemissionCureSummaryList,
  vmRemissionCureReportDetail,
  vmRemissionCureSummaryDetail,
  vmRemissionCureSubmitEvaluation,
  vmRemissionCureSummaryFinalDetail
}
