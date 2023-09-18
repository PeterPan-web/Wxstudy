import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 卡路里日记列表
function vmCalDiaryList (params) {
  return doGet(params, url.vm_calDiary_list)
}

// 卡路里日记的可选时段
function vmCalDiaryOptionalTimeStage (params) {
  return doGet(params, url.vm_calDiary_optional_timeStage, {loading: false})
}

// 菜品识别接口
function dishClassifyImageClassifyDish (params) {
  return doPost(params, url.dish_classify_imageClassify_dish, {loading: false})
}

// 取出草稿
function vmCalDiaryCacheGet (params) {
  return doGet(params, url.vm_calDiary_cache_get)
}

// 缓存草稿
function vmCalDiaryCacheSet (params) {
  return doPost(params, url.vm_calDiary_cache_set, {loading: false})
}

// 所有食物分类
function dataCalFoodCategoryAll (params) {
  return doGet(params, url.data_calFoodCategory_all, {loading: false})
}

// 卡路里食物列表
function dataCalFoodList (params) {
  return doGet(params, url.data_calFood_list, {loading: false})
}

// 食物单位信息
function dataCalFoodUnitGet (params) {
  return doGet(params, url.data_calFoodUnit_get, {loading: false})
}

// 保存卡路里记录
function vmCalDiarySave (params) {
  return doPost(params, url.vm_calDiary_save)
}

// 卡路里日记详情
function vmCalDiaryGet (params) {
  return doGet(params, url.vm_calDiary_get)
}

// 卡路里日记更新
function vmCalDiaryUpdate (params) {
  return doPost(params, url.vm_calDiary_update)
}

// 手动输入时可选单位
function vmCalDiaryUnit (params) {
  return doGet(params, url.vm_calDiary_unit, {loading: false})
}

// 删除日记项
function vmCalDiaryItemDelete (params) {
  return doPost(params, url.vm_calDiaryItem_delete)
}

// 卡路里日记组的日记列表
function vmCalDiaryGroupGet (params) {
  return doGet(params, url.vm_calDiary_group_get)
}

// 检查日记是否存在
function vmCalDiaryIsExist (params) {
  return doGet(params, url.vm_calDiary_isExist)
}

// 保存日记项
function vmCalDiaryItemSave (params) {
  return doPost(params, url.vm_calDiaryItem_save)
}

// 获取时段详情
function vmCalDiaryTimeStageGet (params) {
  return doGet(params, url.vm_calDiary_timeStage_get)
}

// 指定日记项的卡路里日记详情
function vmCalDiarySingleItemGet (params) {
  return doGet(params, url.vm_calDiary_singleItem_get)
}

// 点击使用等按钮判断是否需要支付使用功能
function vmCalDiaryIsNeedPay (params) {
  return doGet(params, url.vm_calDiary_isNeedPay)
}

// 卡路里食物列表（全匹配）
function dataCalFoodCompleteMatchlist (params) {
  return doGet(params, url.data_calFood_completeMatchlist)
}

// 获取患者最新一条热量控制方案
function vmCalDiaryCalorieControl (params) {
  return doGet(params, url.vm_calDiary_calorieControl)
}

// 获取食谱详情
function vmWeeklyRecipeDetail (params) {
  return doGet(params, url.vm_weeklyRecipe_detail)
}

// 获取历史食谱列表
function vmWeeklyRecipeHistoryList (params) {
  return doGet(params, url.vm_weeklyRecipe_historyList)
}

// 获取历史食谱详情
function vmWeeklyRecipeHistoryDetail (params) {
  return doGet(params, url.vm_weeklyRecipe_historyDetail)
}

// 增加常吃食物
function vmMarkFoodAddMarkFood (params) {
  return doPost(params, url.vm_markFood_addMarkFood)
}

// 最后更新时间
function vmMarkFoodLastUpdateInfo (params) {
  return doGet(params, url.vm_markFood_lastUpdateInfo, {loading: false})
}

// 删除常吃食物
function vmMarkFoodRemoveMarkFood (params) {
  return doPost(params, url.vm_markFood_removeMarkFood)
}

// 获取标记食物列表
function vmMarkFoodList (params) {
  return doGet(params, url.vm_markFood_list, {loading: false})
}

// 获取标记食物列表
function vmMarkFoodAll (params) {
  return doGet(params, url.vm_markFood_all, {loading: false})
}
// 食物血糖指数类型
function vmCalFoodBloodSugarBsiType (params) {
  return doGet(params, url.vm_calFood_bloodSugarBsiType)
}
// 食物血糖指数列表
function vmCalFoodBloodSugarBsiList (params) {
  return doGet(params, url.vm_calFood_bloodSugarBsiList)
}
export {
  vmCalDiaryList,
  vmCalDiaryOptionalTimeStage,
  dishClassifyImageClassifyDish,
  vmCalDiaryCacheGet,
  vmCalDiaryCacheSet,
  dataCalFoodCategoryAll,
  dataCalFoodList,
  dataCalFoodUnitGet,
  vmCalDiarySave,
  vmCalDiaryGet,
  vmCalDiaryUpdate,
  vmCalDiaryUnit,
  vmCalDiaryItemDelete,
  vmCalDiaryGroupGet,
  vmCalDiaryIsExist,
  vmCalDiaryItemSave,
  vmCalDiaryTimeStageGet,
  vmCalDiarySingleItemGet,
  vmCalDiaryIsNeedPay,
  dataCalFoodCompleteMatchlist,
  vmCalDiaryCalorieControl,
  vmWeeklyRecipeDetail,
  vmWeeklyRecipeHistoryList,
  vmWeeklyRecipeHistoryDetail,
  vmMarkFoodAddMarkFood,
  vmMarkFoodLastUpdateInfo,
  vmMarkFoodRemoveMarkFood,
  vmMarkFoodList,
  vmMarkFoodAll,
  vmCalFoodBloodSugarBsiType,
  vmCalFoodBloodSugarBsiList
}
