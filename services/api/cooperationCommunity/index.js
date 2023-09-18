
import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取健康教育列表
function pmcCooperationCommunityGetCooperateCommunitys (params) {
  return doGet(params, url.pmc_CooperationCommunity_getCooperateCommunitys)
}
// 获取社区医生列表
function pmcCooperationCommunityDoctorList (params) {
  return doGet(params, url.pmc_CooperationCommunity_doctor_list)
}

export {
  pmcCooperationCommunityGetCooperateCommunitys,
  pmcCooperationCommunityDoctorList
}
