
import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取医院紧急联系电话
function getCooperateHospitalHotline (params) {
  return doGet(params, url.cooperateHospitalHotline)
}

export {
  getCooperateHospitalHotline
}
