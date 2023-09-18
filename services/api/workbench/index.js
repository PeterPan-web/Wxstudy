
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'
// 推送销售统计
function statisticPushStatistic (params) {
  return doGet(params, url.statistic_pushStatistic)
}

export {
  statisticPushStatistic
}
