
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取腾讯云账户
function imTencentGetAccount (params) {
  return doGet(params, url.im_tencent_getAccount)
}
// 直播间状态
function liveRoomStatus (params) {
  return doGet(params, url.live_room_status, {loading: false})
}
// 观众进入直播间 (未开播和直播结束时调用无效，观众不会入场)
function liveRoomAudienceEnter (params) {
  return doPost(params, url.live_roomAudience_enter, {loading: false})
}
// 直播点赞 (未开播和直播结束时调用无效，点赞不算数)
function liveRoomStatisticsLike (params) {
  return doPost(params, url.live_roomStatistics_like, {loading: false})
}
// 发表评论 (未开播和直播结束时调用无效，评论不会记录)
function liveRoomCommentSave (params) {
  return doPost(params, url.live_roomComment_save, {loading: false})
}
// 直播间的统计信息
function liveRoomStatisticsGet (params) {
  return doGet(params, url.live_roomStatistics_get)
}
// 保存手机号
function vmMedicalCardSaveOrUpdateByPhone (params) {
  return doPost(params, url.vm_medicalCard_saveOrUpdateByPhone)
}
// 直播间提醒
function liveRoomAudienceSaveRemind (params) {
  return doPost(params, url.live_roomAudience_saveRemind)
}

export {
  imTencentGetAccount,
  liveRoomStatus,
  liveRoomAudienceEnter,
  liveRoomStatisticsLike,
  liveRoomCommentSave,
  liveRoomStatisticsGet,
  vmMedicalCardSaveOrUpdateByPhone,
  liveRoomAudienceSaveRemind
}
