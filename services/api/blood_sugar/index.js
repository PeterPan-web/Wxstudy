import {
  url,
  doGet2 as doGet
} from '@/services/utils/util2.0'

// // 查询要设置的控糖目标
// function bsControlTargetGetCurrentForEdit (param) {
//   return doGet(param, url.bs_controlTarget_getCurrentForEdit, {loading: false})
// }
// 查询患者当前的控糖目标
function bsControlTargetGetCurrent (param) {
  return doGet(param, url.bs_controlTarget_getCurrent, {loading: false})
}

// 查询某个患者最新的测量建议方案
function bsSchemaGetLatest (param) {
  return doGet(param, url.bs_schema_getLatest)
}
export {
  // bsControlTargetGetCurrentForEdit,
  bsControlTargetGetCurrent,
  bsSchemaGetLatest
}
