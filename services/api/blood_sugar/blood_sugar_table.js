import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 查询患者一定时间范围内的血糖记录，按测量日期分组
function sugarGroupByMeasureDate (params) {
  return doGet(params, url.sugar_groupByMeasureDate)
}
// function sugarGroupByMeasureDate ({
//   timeTypeList = '',
//   measureDateFrom = '',
//   measureDateTo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_groupByMeasureDate,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     timeTypeList,
//     measureDateFrom,
//     measureDateTo
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者一定时间范围内的血糖记录，按测量日期分组
function sugarGroupByTimeType (params) {
  return doGet(params, url.sugar_groupByTimeType)
}
// function sugarGroupByTimeType ({
//   timeTypeList = '',
//   measureDateFrom = '',
//   measureDateTo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_groupByTimeType,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     timeTypeList,
//     measureDateFrom,
//     measureDateTo
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

export {
  sugarGroupByMeasureDate,
  sugarGroupByTimeType
}
