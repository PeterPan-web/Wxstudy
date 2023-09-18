import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 阿斯利康产品列表
function dataAstrazenecaProductList (params) {
  return doGet(params, url.data_astrazenecaProduct_list)
}

export {
  dataAstrazenecaProductList
}
