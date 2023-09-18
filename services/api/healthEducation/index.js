
import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取健康教育列表
function vmStaffDynamicDdmcNurseList (params) {
  return doGet(params, url.vm_staffDynamic_ddmcNurseList)
}

export {
  vmStaffDynamicDdmcNurseList
}
