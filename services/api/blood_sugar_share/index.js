
import {
  url,
  doGet
} from '@/services/utils/util'
// 查询患者最新的测量建议方案
function vmFollowSugarGetLatestMeasureSchema (params) {
  return doGet(params, url.vm_follow_sugar_getLatestMeasureSchema)
}

// 查询患者最新的一条血糖记录
function vmFollowSugarGetLatest (params) {
  return doGet(params, url.vm_follow_sugar_getLatest)
}

// 查询患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
function vmFollowSugarGroupAllTypeByMeasureDate (params) {
  return doGet(params, url.vm_follow_sugar_groupAllTypeByMeasureDate)
}

// 患者血糖流水列表查询
function vmFollowSugarList (params) {
  return doGet(params, url.vm_follow_sugar_list)
}

// 查询患者一定时间范围内的血糖记录，按测量日期分组
function vmFollowSugarGroupByMeasureDate (params) {
  return doGet(params, url.vm_follow_sugar_groupByMeasureDate)
}

// 查询患者一定时间范围内的血糖记录，按测量时间类型分组
function vmFollowSugarGroupByTimeType (params) {
  return doGet(params, url.vm_follow_sugar_groupByTimeType)
}

// 统计患者一定时间范围内的血糖记录
function vmFollowSugarGetStatistics (params) {
  return doGet(params, url.vm_follow_sugar_getStatistics)
}

// 查询关注患者的血糖测量结果
function bsFollowGetMeasurement (params) {
  return doGet(params, url.bs_follow_getMeasurement)
}

// 查询关注患者的血糖测量结果
function bsFollowGetControlTarget (params) {
  return doGet(params, url.bs_follow_getControlTarget)
}

export {
  vmFollowSugarGetLatestMeasureSchema,
  vmFollowSugarGetLatest,
  vmFollowSugarGroupAllTypeByMeasureDate,
  vmFollowSugarList,
  vmFollowSugarGroupByMeasureDate,
  vmFollowSugarGroupByTimeType,
  vmFollowSugarGetStatistics,
  bsFollowGetMeasurement,
  bsFollowGetControlTarget
}
