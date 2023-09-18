
import {
  url,
  doGet2 as doGet
} from '@/services/utils/util2.0'

// RWCI任务列表
function vmRwciList (params) {
  return doGet(params, url.vm_rwci_list)
}

// 获取RWCI小结详情
function vmRwciDetail (params) {
  return doGet(params, url.vm_rwci_detail)
}

export {
  vmRwciList,
  vmRwciDetail
}
