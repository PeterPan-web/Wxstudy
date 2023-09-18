
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// 获取会员课堂列表
function documentGetOnlineClassList (params) {
  return doGet(params, url.document_getOnlineClassList, {loading: false})
}

// 阅读文章
function documentRead (params) {
  return doPost(params, url.document_read)
}

// 获取文章详情
function documentGet (params) {
  return doGet(params, url.document_getByMember)
}

// 获取会员课堂分类列表
function documentGetMemberClassTypeList (params) {
  return doGet(params, url.document_getMemberClassTypeList)
}

// 会员课堂获取文章详情
function documentGetByMember (params) {
  return doGet(params, url.document_getByMember)
}

export {
  documentGetOnlineClassList,
  documentRead,
  documentGet,
  documentGetMemberClassTypeList,
  documentGetByMember
}
