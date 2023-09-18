
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取科室动态
function rwResearchDocumentList (params) {
  console.log(params);
  return doGet(params, url.rw_research_document_list)
}
// 科室动态分类列表
function rwResearchDocumentTypeList (params) {
  return doGet(params, url.rw_research_document_type_list)
}
// 科室动态详情
function rwResearchDocumentInfo (params) {
  return doGet(params, url.rw_research_document_info)
}
// 阅读+1
function rwResearchDocumentRead (params) {
  return doPost(params, url.rw_research_document_read)
}

export {
  rwResearchDocumentList,
  rwResearchDocumentTypeList,
  rwResearchDocumentInfo,
  rwResearchDocumentRead
}
