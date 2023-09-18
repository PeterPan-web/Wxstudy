
import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 医生直播间信息
function liveLiveRoomInfo (params) {
  return doGet(params, url.live_liveRoom_info)
}
// 获取医生历史直播房间列表
function liveHistoryLiveRoomList (params) {
  return doGet(params, url.live_historyLiveRoom_list)
}
// 获取直播房间回访列表
function liveRoomVideoList (params) {
  return doGet(params, url.live_roomVideo_list)
}
// 发送直播小程序卡片
function liveRoomSendMiniProgramMsg (params) {
  return doPost(params, url.live_room_sendMiniProgramMsg)
}
// 累计视频点击率
function liveRoomVideoCumulateViewCount (params) {
  return doPost(params, url.live_roomVideo_cumulateViewCount)
}
// 获取医生未直播列表
function liveRoomNotLivedList (params) {
  return doGet(params, url.live_room_notLivedList)
}
// 获取直播房间内容
function liveRoomRoomDetail (params) {
  return doGet(params, url.live_room_roomDetail)
}
// 获取客户端直播方式
function liveRoomGetPlayType (params) {
  return doGet(params, url.live_room_getPlayType)
}

// 获取医生正在直播的房间列表
function liveRoomLiveList (params) {
  return doGet(params, url.live_room_liveList)
}

// 获取精选课堂列表
function orgDoctorQualityMaterialList (params) {
  return doGet(params, url.org_doctorQualityMaterial_list)
}

// 获取广告视频列表
function liveRoomGetadvertisingVideoList (params) {
  return doGet(params, url.live_room_getadvertisingVideoList)
}

// 记录直播回放观众
function liveRoomAudienceVideoAudienceCheckIn (params) {
  return doPost(params, url.live_roomAudience_videoAudienceCheckIn)
}

// 直播间是否需要观看码
function liveRoomIsNeedViewCode (params) {
  return doGet(params, url.live_room_isNeedViewCode)
}

// 校验观看码
function liveRoomCodeValidate (params) {
  return doPost(params, url.live_room_code_validate)
}

export {
  liveLiveRoomInfo,
  liveHistoryLiveRoomList,
  liveRoomVideoList,
  liveRoomSendMiniProgramMsg,
  liveRoomVideoCumulateViewCount,
  liveRoomNotLivedList,
  liveRoomRoomDetail,
  liveRoomGetPlayType,
  liveRoomLiveList,
  orgDoctorQualityMaterialList,
  liveRoomGetadvertisingVideoList,
  liveRoomAudienceVideoAudienceCheckIn,
  liveRoomIsNeedViewCode,
  liveRoomCodeValidate
}
