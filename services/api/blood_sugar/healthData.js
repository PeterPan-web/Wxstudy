import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取全部用户动态
function dynList (params) {
  return doGet(params, url.dyn_list)
}
// 点赞
function dynLike (params) {
  return doPost(params, url.dyn_like)
}
// 点阅
function dynRead (params) {
  return doPost(params, url.dyn_read)
}
// 用户动态评论
function dynComment (params) {
  return doPost(params, url.dyn_comment)
}
// 用户动态评论回复
function dynCommentReply (params) {
  return doPost(params, url.dyn_commentReply)
}
// 用户动态评论删除
function dynCommentDelete (params) {
  return doPost(params, url.dyn_commentDelete)
}
// 获取签约医生是否五类医生
function orgDoctorGetIsBelongTypeFifthDoctor (params) {
  return doGet(params, url.org_doctor_getIsBelongTypeFifthDoctor)
}
// 动态上传图片
function dynUploadImg (params) {
  return doPost(params, url.dyn_uploadImg)
}

export {
  dynList,
  dynLike,
  dynRead,
  dynComment,
  dynCommentReply,
  dynCommentDelete,
  orgDoctorGetIsBelongTypeFifthDoctor,
  dynUploadImg
}
