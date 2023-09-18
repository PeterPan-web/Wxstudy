import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 查询患者一定时间范围内的血糖记录，按测量日期分组
function sugarGetStatistics (params) {
  return doGet(params, url.sugar_getStatistics)
}
// function sugarGetStatistics ({
//   measureDateFrom = '',
//   measureDateTo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_getStatistics,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureDateFrom,
//     measureDateTo
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })
// }
export {
  sugarGetStatistics
}
