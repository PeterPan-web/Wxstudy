import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'
// 运动记录统计
function vmSportRecordStatistic (params) {
  return doGet(params, url.vm_sport_recordStatistic)
}
// 获取运动记录列表
function vmSportRecordList (params) {
  return doGet(params, url.vm_sport_recordList)
}
// 获取运动类型数据列表
function vmSportDataList (params) {
  return doGet(params, url.vm_sport_dataList)
}
// 获取今日运动记录
function vmSportGetTodayRecord (params) {
  return doGet(params, url.vm_sport_getTodayRecord)
}
// 保存运动打卡
function vmSportSave (params) {
  return doPost(params, url.vm_sport_save)
}
// 删除运动打卡
function vmSportDelete (params) {
  return doPost(params, url.vm_sport_delete)
}

// 获取患者当前运动方案
function vmSportPlanCurrent (params) {
  return doGet(params, url.vm_sport_plan_current)
}
// 获取运动方案历史列表
function vmSportPlanHistoryList (params) {
  return doGet(params, url.vm_sport_plan_historyList)
}
// 获取患者历史运动方案
function vmSportPlanGetByHistoryId (params) {
  return doGet(params, url.vm_sport_plan_getByHistoryId)
}
export {
  vmSportRecordStatistic,
  vmSportRecordList,
  vmSportDataList,
  vmSportGetTodayRecord,
  vmSportSave,
  vmSportDelete,
  vmSportPlanCurrent,
  vmSportPlanHistoryList,
  vmSportPlanGetByHistoryId
}
