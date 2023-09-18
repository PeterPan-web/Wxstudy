/**
 * 保存所有接口信息
 */
console.log(process.env)
let httpUrl = process.env.VUE_APP_http_url
console.log('VUE_APP_http_url', httpUrl)
let httpEnv = process.env.VUE_APP_http_env
let protocolBase = ''
if (httpEnv === 'dev') {
  protocolBase = 'https://ektangdev.4001128178.cn/dev/api/manager/'
} else if (httpEnv === 'dev2') {
  protocolBase = 'https://ektangdev.4001128178.cn/dev2/api/manager/'
} else if (httpEnv === 'test') {
  protocolBase = 'https://ektangdev.4001128178.cn/test/api/manager/'
} else if (httpEnv === 'staging') {
  protocolBase = 'https://ektangdev.4001128178.cn/staging/api/manager/'
} else {
  protocolBase = 'https://bs.medicine-o2o.com/api/manager/'
}

export default {
  webapiBase: httpUrl, //
  imgBase: httpUrl,
  protocolBase, // 协议
  wx_security_oauth2Login: 'wx/security/oauth2Login', // 授权
  echo: 'echo', // 测试token是否存在
  getToken: 'wx/security/getToken', // 获取用户token
  vmPatientGetById: 'vm/patient/getById', // 根据患者id获取患者信息
  sys_file_web_stsToken: '/sys/file/web/stsToken', // 获取web端的ststoken
  cooperate_hospital_getInfo: 'cooperate/hospital/getInfo', // 获取授权医院信息
  upload: 'sys/file/upload', // 文件上传
  vm_patient_setSmsRemindIsHandled: 'vm/patient/setSmsRemindIsHandled', // 设置短信提醒记录为已处理
  cooperate_hospital_getWxHeadPic: 'cooperate/hospital/getWxHeadPic', // 获取医院公众号头像
  vm_patientStar_prePay: 'vm/patientStar/prePay', // 患者星资格预支付
  vm_patientStar_pay_result: 'vm/patientStar/pay/result', // 查询支付结果
  // 会话 start
  im_personalConv_historyList: '/im/personalConv/historyList', // 获取单聊会话历史记录
  org_staff_getDutyNurse: 'org/staff/getDutyNurse', // 获取eKtang热线的信息
  patient_conv_refreshOnlineStatus: 'vm/patient/conv/refreshOnlineStatus', // 刷新患者对员工的在线状态
  patient_conv_payByPoints: 'vm/patient/conv/payByPoints', // 积分付费开启会话
  patient_conv_payByMoney: 'vm/patient/conv/payByMoney', // 付费开启会话
  patient_conv_getPayResult: 'vm/patient/conv/getPayResult', // 查询支付结果
  patient_conv_getFee: 'vm/patient/conv/getFee', // 获取患者咨询医生的费用价格
  org_director_getConsultingPrice: 'org/director/getConsultingPrice', // 查询指导专家的咨询费
  patient_conv_reply: 'vm/patient/conv/reply', // 回复员工
  patient_conv_get: 'vm/patient/conv/get', // 获取患者与员工的最新会话
  vm_patient_conv_getVipFreeCount: 'vm/patient/conv/getVipFreeCount', // vip会员获取免费次数
  vm_patient_conv_payByVipFree: 'vm/patient/conv/payByVipFree', // vip免费次数开启会话
  vm_patient_conv_getAskNursePrice: 'vm/patient/conv/getAskNursePrice', // 获取非vip咨询护士价钱
  vm_patient_conv_getIsDdmcWorkTime: 'vm/patient/conv/getIsDdmcWorkTime', // 获取当前时间是否DDMC护士工作时间
  vm_patient_conv_setCurrentSessionStaff: 'vm/patient/conv/setCurrentSessionStaff', // 设置当前会话员工
  im_team_conv_status: 'im/team/conv/status', // 获取群聊状态
  im_team_conv_reply: 'im/team/conv/reply', // 群聊回复
  im_team_member_list: 'im/team/member/list', // 获取群成员列表
  // 会话 end;

  // 个人病例start
  photoRecord_delete: 'vm/photoRecord/delete', // 删除拍照病历
  patient_loginInfo: 'vm/patient/loginInfo', // 登录患者的信息
  medicalRecordHistory_info: 'vm/medicalRecordHistory/get', // 获取病历详情历史记录（结果参数与获取病历详情保持一致）
  medicalRecordHistory_delete: 'vm/medicalRecordHistory/delete', // 删除病历详情历史记录
  photoRecord_list: 'vm/photoRecord/list', // 拍照病历列表
  data_department_all: 'data/department/all', // 所有医院科室
  photoRecord_save: 'vm/photoRecord/save', // 新建拍照病例
  medicalRecord_delete: 'vm/medicalRecord/delete', // 删除病历详情
  medicalRecordHistory_get: 'vm/medicalRecordHistory/list', //  历史记录列表
  vm_complication_get: 'vm/complication/all', // 所有慢性并发症
  medicalRecord_save: 'vm/medicalRecord/saveOrUpdate', // 保存或修改病历详情
  medicalRecord_get: 'vm/medicalRecord/get', // 获取病历详情
  medicalCard_sms_code: 'vm/medicalCard/sms/code', // 发送短信验证码
  medicalCard_arithmetic_code: 'vm/medicalCard/arithmetic/code', // 获取算数验证码
  medicalCard_save: 'vm/medicalCard/saveOrUpdate', // 保存患者病历卡
  data_department_getByAppId: 'data/department/getByAppId', // 获取医院子科室
  medicalCard_get: 'vm/medicalCard/get', // 获取病历卡详情
  vm_patient_getSignDoctors: 'vm/patient/getSignDoctors', // 获取患者的签约医生信息
  vm_patient_getAllSignDoctors: 'vm/patient/getAllSignDoctors', // 获取患者的签约医生信息(所有医生)
  vm_medicalCard_getBaseInfo: 'vm/medicalCard/getBaseInfo', // 获取基本信息
  vm_medicalCard_SaveBaseInfo: 'vm/medicalCard/saveBaseInfo', // 保存基本信息
  vm_medicalCard_allDiabetesType: 'vm/medicalCard/allDiabetesType', // 糖尿病类型
  vm_complication_existAll: 'vm/complication/existAll', // 所有已有并发症接口
  data_drug_list: 'data/drug/list', // 获取药品列表
  data_drug_save: 'data/drug/save', // 保存药品
  vm_evaluation_isPatientFilled: 'vm/evaluation/isPatientFilled', // 患者是否已经有测评
  vm_evaluation_questionList: 'vm/evaluation/questionList', // 测评问卷列表
  vm_evaluation_saveEvaluation: 'vm/evaluation/saveEvaluation', // 提交测评
  vm_evaluation_patientScore: 'vm/evaluation/patientScore', // 患者测评得分
  vm_evaluation_patientAnswerList: 'vm/evaluation/patientAnswerList', // 获取患者的答卷列表
  vm_evaluation_saveEvaluationMedical: 'vm/evaluation/saveEvaluationMedical', // 提交测评的病例内容
  vm_evaluation_getEvaluationData: 'vm/evaluation/getEvaluationData', // 获取测评信息
  vm_evaluation_saveEvaluationData: 'vm/evaluation/saveEvaluationData', // 保存测评信息
  // 个人病例start

  createOrder: 'sale/order/createOrder', // 创建订单
  prePay: 'pay/mp/prePay', // 预支付接口
  getLoginUrl: 'test/getLoginUrl', // 获取登录的url
  security_getSignPackage: 'wx/security/getSignPackage', // 获取js-sdk签名

  // 个人中心 start
  vm_patient_follow_list: 'vm/patient/follow/list', // 查询患者的关注列表
  vm_patient_follow_remove: 'vm/patient/follow/remove', // 删除关注
  vm_patient_fans_list: 'vm/patient/fans/list', // 查询患者的粉丝列表
  vm_patient_fans_remove: 'vm/patient/fans/remove', // 删除粉丝
  vm_patient_device_list: 'vm/patient/device/list', // 获取患者绑定的设备信息
  vm_patient_device_unbind: 'vm/patient/device/unbind', // 解除设备绑定
  vm_points_get: 'vm/points/get', // 获取用户剩余积分
  vm_points_listLog: 'vm/points/listLog', // 积分日志查询
  bs_getControlTarget: 'bs/getControlTarget', // 查询患者控糖目标
  vm_followupPlan_listCurrent: 'vm/followupPlan/listCurrent', // 查询患者生效的数字化管理方案列表
  vm_followupPlan_getEffective: 'vm/followupPlan/getEffective', // 获取患者生效的数字化管理方案
  openapi_document_getByCode: 'openapi/document/getByCode', // 通过文档code获取文档资料接口
  document_getByAppId: 'document/getByAppId', // 获取医院公众号协议
  vm_patient_agreeProtocol: 'vm/patient/agreeProtocol', // 患者同意协议
  vm_patient_follow: 'vm/patient/follow', // 添加关注
  vm_patient_follow_isFollow: 'vm/patient/follow/isFollow', // 判断是否关注某个患者
  vm_patient_billing_list: 'vm/patient/billing/list', // 消费明细列表
  patient_medicationPlan_get: 'vm/patient/medicationPlan/get', // 获取用药方案
  vm_followupPlan_getDischargeSummary: 'vm/followupPlan/getDischargeSummary', // 获取患者出院小结(含用药)
  bs_getRemindSwitch: 'bs/getRemindSwitch', // 获取测量提醒开关
  bs_saveRemindSwitch: 'bs/saveRemindSwitch', // 设置测量提醒开关
  vm_patient_bonus_progress: 'vm/patient/bonus/progress', // 患者奖励金进度
  vm_patient_bonus_log_list: 'vm/patient/bonus/log/list', // 患者奖励金的变更列表
  bonus_order_isCanUse: 'bonus/order/isCanUse', // 使用奖学金判断
  vm_patientBonusTask_get: 'vm/patientBonusTask/get', // 患者奖励金任务列表
  vm_patient_bonus_changeNoticeSwitch_status: 'vm/patient/bonus/changeNoticeSwitch/status', // 患者奖励金开关状态
  vm_patient_bonus_notice_switch: 'vm/patient/bonus/notice/switch', // 患者奖励金通知开关
  bs_qr_share: 'bs/qr/share', // 分享关注血糖二维码
  sale_renew_info: 'sale/renew/info', // 续费信息
  sale_coupon_writeOffMembershipCoupon: 'sale/coupon/writeOffMembershipCoupon', // 使用权益码
  rw_projectPatient_setNotice: 'rw/projectPatient/setNotice', // 设置项目打卡提醒
  vm_patient_getServiceAssuranceRecord: 'vm/patient/getServiceAssuranceRecord', // 获取患者的服务保障明细
  vm_patient_getPatientActionLog: 'vm/patient/getPatientActionLog', // 获取患者的服务保障明细
  // 个人中心 end
  // 奖学金 商城 start
  bonus_order_use: 'bonus/order/use', // 直接支付使用奖学金
  bonus_order_create: 'bonus/order/create', // 提交订单
  bonus_order_detail: 'bonus/order/getDetail', // 获取订单详情
  bonus_order_pay: 'bonus/order/pay', // 立即支付
  bonus_order_zeroPay: 'bonus/order/zeroPay', // 0元支付
  bonus_order_pay_result: 'bonus/order/pay/result', // 查询支付结果
  bonus_order_cancel: 'bonus/order/cancel', // 取消订单
  bs_getFullStatistics: 'bs/getFullStatistics', // 获取某个患者一定时间范围内的血糖记录完整的统计数据
  bs_getLatestMeasureSchemaWithTest: 'bs/getLatestMeasureSchemaWithTest', // 查询患者最新的测量建议方案
  vm_patient_bonusExchangeNotice_fetch: 'vm/patient/bonusExchangeNotice/fetch', // 获取奖励金兑换通知
  vm_patient_bonusExchangeNotice_confirm: 'vm/patient/bonusExchangeNotice/confirm', // 确认兑换消息
  mall_prd_mgnt_list: 'mall/prd/mgnt/list', // 分页查询产品列表
  mall_prd_mgnt_get: 'mall/prd/mgnt/get', // 根据产品编号查询产品详情
  sale_mallOrder_buy: 'sale/mallOrder/buy', // 产品立即购买
  sale_mallOrder_create: 'sale/mallOrder/create', // 创建产品订单
  sale_mallOrder_getDetail: 'sale/mallOrder/getDetail', // 查询产品订单详情
  sale_mallOrder_pay: 'sale/mallOrder/pay', // 产品订单立即支付
  sale_mallOrder_pay_result: 'sale/mallOrder/pay/result', // 产品订单支付结果查询
  bonus_mallOrder_cancel: 'sale/mallOrder/cancel', // 取消订单
  sale_mallOrder_modifyOrderConsignee: 'sale/mallOrder/modifyOrderConsignee', // 更新订单收货人信息
  sale_mallOrder_list: 'sale/mallOrder/list', // 产品订单列表查询
  sale_mallOrder_express_query: 'sale/mallOrder/express/query', // 物流查询
  sale_mallOrder_getTestPaperNos: 'sale/mallOrder/getTestPaperNos', // 获取患者试纸产品编号类型
  // 奖学金 商城 end
  statistic_pushStatistic: 'statistic/pushStatistic', // 推送销售统计
  document_getOnlineClassList: 'document/getOnlineClassList', // 获取会员课堂列表
  document_get: 'document/get', // 获取文章详情会员课堂
  document_read: 'document/read', // 阅读文章会员课堂
  document_getMemberClassTypeList: 'document/getMemberClassTypeList', // 获取会员课堂分类列表
  document_getByMember: 'document/getByMember', // 会员课堂获取文章详情

  // 医生 start
  vm_patient_isChangeSign: 'vm/patient/isChangeSign', // 是否可以更改签约医生
  org_doctor_applyChangeSign: 'org/doctor/applyChangeSign', // 申请变更签约医生
  org_doctor_scanDoctors: 'org/doctor/scanDoctors', // 登录用户的扫码医生列表
  org_doctor_signDoctors: 'org/doctor/signDoctors', // 登录用户的签约医生列表
  org_doctor_signedDoctor: 'org/doctor/signedDoctor', // 获取登录用户的签约的医生
  org_doctor_allScanDoctors: 'org/doctor/allScanDoctors', // 登录患者的所有扫码医生
  org_doctor_charge_doctor: 'org/doctor/charge/doctor', // 获取指定医生信息
  org_doctorDynamic_list: 'org/staffDynamic/list', // 医生动态列表
  vm_patient_bindDoctor: 'vm/patient/bindDoctor', // 患者与医生签约
  org_doctorDynamic_get: 'org/staffDynamic/get', // 获取医生文章详情 （返回详见医生APP org/doctorDynamic/get）
  org_doctorDynamic_comment_save: 'org/staffDynamic/comment/save', // 添加评论
  org_doctorDynamic_comment_delete: 'org/staffDynamic/comment/delete', // 删除评论
  org_doctorDynamic_like: 'org/staffDynamic/like', // 点赞或者取消点赞
  org_doctorDynamic_admire_prePay: 'org/staffDynamic/admire/prePay', // 医生请求微信预支付
  org_doctorDynamic_pay_result: 'org/staffDynamic/pay/result', // 打赏支付结果查询
  org_doctorDynamic_read_add: 'org/staffDynamic/read/add', // 动态阅读量+1
  vm_patient_conv_comment: 'vm/patient/conv/comment', // 会话评价
  vm_patient_conv_reward: 'vm/patient/conv/reward', // 会话打赏
  vm_patient_conv_reward_getPayResult: 'vm/patient/conv/reward/getPayResult', // 查询会话打赏支付结果
  org_director_charge_director: 'org/director/charge/director', // 获取指定指导专家信息
  org_doctorDynamic_like_list: '/org/staffDynamic/like/list', // 分页查询文章动态点赞人
  org_doctorQualityMaterial_list: 'org/doctorQualityMaterial/list', // 获取精选课堂列表
  vm_patient_getSignDoctorsAndRelateDoctor: 'vm/patient/getSignDoctorsAndRelateDoctor', // 购买产品的医生列表
  vm_patient_getPatientDoctorBuyInfo: 'vm/patient/getPatientDoctorBuyInfo', // 通过货架id返回患者的购买信息
  org_doctor_signDoctorsNotDiff: 'org/doctor/signDoctorsNotDiff', // 登录用户的签约医生列表（不区分医院公众号）
  // 医生end

  // 护士 start
  org_nurse_charge_nurse: 'org/nurse/charge/nurse', // 当前用户的责任护士信息
  vm_generalAdvice_get: 'vm/generalAdvice/get', // 查找患者的总体建议
  vm_sportAdvice_get: 'vm/sportAdvice/get', // 获取运动建议详情
  vm_foodAdvice_get: 'vm/foodAdvice/get', // 查找用户的饮食建议
  vm_sugar_listHealthyReport: 'bs/listHealthyReport', // 查询患者健康月报列表
  org_nurse_list: 'org/nurse/list', // 签约医生对应的护士列表
  org_followupNurse_get: 'org/followupNurse/get', // 随访护士
  org_cmntNurse_get: 'org/cmntNurse/get', // 获取社区护士详情
  org_nurse_ddmcMyNurse: 'org/nurse/ddmcMyNurse', // DDMC公众号我的护士列表
  tc_rwci_nurseSchedule_scheduleList: 'tc/rwci/nurseSchedule/scheduleList', // RWCI周期工作计划明细
  tc_rwci_nurseSchedule_summaryTaskDetail: 'tc/rwci/nurseSchedule/summaryTaskDetail', // 护士工作计划小结任务详情
  tc_rwci_nurseSchedule_confirmFinished: 'tc/rwci/nurseSchedule/confirmFinished', // 患者确认任务已完成
  // 护士end

  // 产品 start
  category_listVisible: 'prd/category/listVisible', // 查询所有标记为显示的产品分类
  mgnt_list: 'prd/mgnt/list', // 分页查询产品列表
  mgnt_get: 'prd/mgnt/get', // 根据产品id查询产品详情
  comment_list: 'prd/comment/list', // 分页查询产品评论
  comment_listKeyCount: 'prd/comment/listKeyCount', // 获取产品评论分组统计
  mgnt_getDefaultTestPaperProductNo: 'prd/mgnt/getDefaultTestPaperProductNo', // 获取"试纸"菜单对应的产品编号
  mgnt_getDefaultDeviceProductNo: 'prd/mgnt/getDefaultDeviceProductNo', // 获取"设备"菜单对应的产品编号
  prd_mgnt_getSpecialProductNo: 'prd/mgnt/getSpecialProductNo', // 获取套餐产品编号
  prd_mgnt_getProtocol: 'prd/mgnt/getProtocol', // 获取产品服务协议内容
  prd_mgnt_patientBuyStatus: 'prd/mgnt/patientBuyStatus', // 患者对产品的购买状态
  sale_productOrder_validateBuy: 'sale/productOrder/validateBuy', // 购买校验
  prd_mgnt_isUploadProductConsent: 'prd/mgnt/isUploadProductConsent', // 是否提交了产品告知书签名
  prd_mgnt_getPatientProductConsent: 'prd/mgnt/getPatientProductConsent', // 获取用户提交的产品告知书签名
  prd_mgnt_savePatientProductConsent: 'prd/mgnt/savePatientProductConsent', // 保存患者的产品告知书签名
  prd_mgnt_adaptation_disease_list: 'prd/mgnt/adaptation/disease/list', // 获取慢病适应症列表
  // 产品 end

  // 服务 start
  serve_list: 'svc/serve/list', // 服务售卖列表
  serve_get: 'svc/serve/get', // 获取服务售卖详情
  serveRating_list: 'svc/serveRating/list', // 服务评价列表
  serveType_listVisible: 'svc/serveType/listVisible', // 服务分类列表
  serveRating_ratingCount: 'svc/serveRating/ratingCount', // 评价数数
  serviceCenter_get: 'org/serviceCenter/get', // 获取服务中心详情
  vm_remissionCure_getBoughtRemissionCure: 'vm/remissionCure/getBoughtRemissionCure', // 获取购买缓解治疗服务信息
  vm_remissionCure_activate: 'vm/remissionCure/activate', // 激活
  // 服务 end

  // 购物车 start
  shoppingCart_save: 'sale/shoppingCart/save', // 添加商品到购物车
  shoppingCart_list: 'sale/shoppingCart/list', // 购物车商品列表
  shoppingCart_changeQuantity: 'sale/shoppingCart/changeQuantity', // 修改商品数量
  shoppingCart_delete: 'sale/shoppingCart/delete', // 删除购物车条目
  // 购物车 end

  // 产品订单 start
  productOrder_list: 'sale/productOrder/list', // 产品订单列表查询
  productOrder_getDetail: 'sale/productOrder/getDetail', // 查询产品订单详情
  productOrder_buy: 'sale/productOrder/buy', // 产品立即购买
  get_order_installment: 'sale/productOrder/getOrderInstallment', // 获取订单的分期详情
  get_installment_buy:"sale/order/installment/buy", //分期订单后续支付创建接口
  get_installment_create:'sale/order/installment/create',//提交分期订单后续订单
  get_installment_getDetail:"sale/order/installment/getDetail",//获取分期订单详情
  get_installment_pay:"sale/order/installment/pay",//分期订单立即支付
  get_installment_pay_result:"sale/order/installment/pay/result",//产品订单支付结果查询

  productOrder_pay: 'sale/productOrder/pay', // 产品订单立即支付
  productOrder_create: 'sale/productOrder/create', // 创建产品订单
  promotion_prd_checkValid: 'promotion/prd/checkValid', // 检查产品优惠券是否可用
  sale_coupon_checkValid: 'sale/coupon/checkValid', // 检查补贴卡是否可用
  sale_coupon_writeOff: 'sale/coupon/writeOff', // 补贴卡核销
  sale_coupon_beforeSubmitCheck: 'sale/coupon/beforeSubmitCheck', // 校验提交补贴卡申请
  sale_coupon_getOrderListForCoupon: 'sale/coupon/getOrderListForCoupon', // 获取可以使用优惠券的订单
  sale_productOrder_pay_result: 'sale/productOrder/pay/result', // 产品订单支付结果查询
  sale_coupon_submitSubsidyApply: 'sale/coupon/submitSubsidyApply', // 提交补贴卡申请
  sale_productOrder_express_query: 'sale/productOrder/express/query', // 查询物流信息
  sale_productOrder_getTrialType: 'sale/productOrder/getTrialType', // 获取我要试用2种类型产品编号信息
  vm_patient_getTrialRenewInfo: 'vm/patient/getTrialRenewInfo', // 获取患者试用会员续费信息
  data_sys_getParamValue: 'data/sys/getParamValue', // 获取系统参数值
  sale_productOrder_acceptGift: 'sale/productOrder/acceptGift', // 确认领取订单赠品
  sale_productOrder_modifyOrderConsignee: 'sale/productOrder/modifyOrderConsignee', // 更新订单收货人信息
  // 产品订单 end

  // 试用退款 start
  sale_orderTrialRefund_detail: 'sale/orderTrialRefund/detail', // 获取试用退款详情
  sale_orderTrialRefund_apply: 'sale/orderTrialRefund/apply', // 申请退款
  sale_orderTrialRefund_cancel: 'sale/orderTrialRefund/cancel', // 取消退款申请
  data_express_all: 'data/express/all', // 所有快递公司下拉
  sale_trialRefundExpresss_saveOrUpdate: 'sale/trialRefundExpresss/saveOrUpdate', // 保存或者更新快递信息
  // 试用退款 end

  // 服务订单 start
  coupon_getServe: 'sale/coupon/getServe', // 服务结算时，获取可用的卡券
  serveOrder_get: 'sale/serveOrder/get', // 获取订单详情
  serveOrder_prePay: 'sale/serveOrder/prePay', // 服务订单预支付
  serveOrder_create: 'sale/serveOrder/create', // 创建服务购买订单
  serveOrder_zero_pay: 'sale/serveOrder/zero/pay', // 订单零元付
  serveOrder_pay_result: 'sale/serveOrder/pay/result', // 支付结果查询
  serveOrder_list: 'sale/serveOrder/list', // 我的订单列表
  // 服务订单 end
  patient_QRCode_bind:"sale/hospitalQRCode/verifyQrCode",//扫码绑定方案
  patient_QRCode_order:"sale/productOrder/createHospitalOrder",//扫码领取权益
  
  // 血糖 start
  sugar_getLatest: 'bs/getLatest', // 查询患者最新的一条血糖记录
  bs_measurement_abnormal_reason_add: 'bs/measurement/abnormal/reason/add', // 异常血糖新增标签
  sugar_upload: 'bs/upload', // 手动上传血糖测量数据
  sugar_modify: 'bs/modify', // 修改血糖测量时间
  sugar_groupAllTypeByMeasureDate: 'bs/groupAllTypeByMeasureDate', // 查询患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
  sugar_uploadImg: 'bs/uploadImg', // 血糖测量结果上传图片
  sugar_getMeasurement: 'bs/getMeasurement', // 查询患者血糖测量结果
  sugar_comment: 'bs/comment', // 血糖测量评论
  patient_device_bind: 'vm/patient/device/bind', // 扫码绑定设备
  sugar_commentReply: 'bs/commentReply', // 血糖测量评论回复
  sugar_like: 'bs/like', // 对血糖测量结果点赞
  sugar_read: 'bs/read', // 对血糖测量结果点阅
  sugar_groupByMeasureDate: 'bs/groupByMeasureDate', // 查询患者一定时间范围内的血糖记录，按测量日期分组
  sugar_groupByTimeType: 'bs/groupByTimeType', // 查询患者一定时间范围内的血糖记录，按测量时间类型分组
  sugar_getStatistics: 'bs/getStatistics', // 统计患者一定时间范围内的血糖记录
  sugar_getLatestMeasureSchema: 'bs/getLatestMeasureSchema', // 查询患者最新的测量建议方案
  bs_follow_getLatest: 'bs/follow/getLatest', // 查询患者最新的一条血糖记录
  sugar_listHealthyReport: 'bs/listHealthyReport', // 查询患者健康月报列表
  sugar_getHealthyReport: 'bs/getHealthyReport', // 查询患者健康月报内容
  sugar_commentDelete: 'bs/commentDelete', // 血糖测量评论删除
  sugar_list: 'bs/list', // 患者血糖流水列表查询
  bs_getShareImageUrl: 'bs/getShareImageUrl', // 获取分享链接中的血糖图片地址
  bs_updateFirstViewDetail: 'bs/updateFirstViewDetail', // 更新查看血糖测量详情状态
  bs_listAdviceTemplate: 'bs/listAdviceTemplate', // 获取血糖测量结果建议模板列表
  bs_checkModifyMeasureTimeAllowed: 'bs/checkModifyMeasureTimeAllowed', // 检查是否可以修改血糖数据时间
  bs_getCurrentTimeType: 'bs/getCurrentTimeType', // 根据时间测量间隔
  // bs_controlTarget_getCurrentForEdit: 'bs/controlTarget/getCurrentForEdit', // 查询要设置的控糖目标
  bs_controlTarget_getCurrent: 'bs/controlTarget/getCurrent', // 查询患者当前的控糖目标
  // bs_controlTarget_save: 'bs/controlTarget/save', // 设置控糖目标
  bs_schema_getLatest: 'bs/schema/getLatest', // 查询某个患者最新的测量建议方案
  // bs_schema_template_save: 'bs/schema/save', // 设置测量建议方案
  // 血糖 end

  // 血糖（关注） start
  bs_follow_getControlTarget: 'bs/follow/getControlTarget', // 查询患者控糖目标（关注者）
  bs_follow_getMeasurement: 'bs/follow/getMeasurement', // 查询关注患者的血糖测量结果
  vm_follow_sugar_getLatest: 'bs/follow/getLatest', // 查询患者最新的一条血糖记录
  bs_getLatestHealthyReport: 'bs/getLatestHealthyReport', // 查询患者最新健康月报内容
  vm_follow_sugar_groupAllTypeByMeasureDate: 'bs/follow/groupAllTypeByMeasureDate', // 查询患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
  vm_follow_sugar_list: 'bs/follow/list', // 患者血糖流水列表查询
  vm_follow_sugar_groupByMeasureDate: 'bs/follow/groupByMeasureDate', // 查询患者一定时间范围内的血糖记录，按测量日期分组
  vm_follow_sugar_groupByTimeType: 'bs/follow/groupByTimeType', // 查询患者一定时间范围内的血糖记录，按测量时间类型分组
  vm_follow_sugar_getStatistics: 'bs/follow/getStatistics', // 统计患者一定时间范围内的血糖记录
  vm_follow_sugar_getLatestMeasureSchema: 'bs/follow/getLatestMeasureSchema', // 查询患者最新的测量建议方案
  bs_validateUpload: 'bs/validateUpload', // 校验是否能发起手动上传血糖
  bs_getRechargePrice: 'bs/getRechargePrice', // 查询付费上传的价格
  bs_payForRechargeUpload: 'bs/payForRechargeUpload', // 付费充值手动上传次数
  bs_getPayResult: 'bs/getPayResult', // 查询付费充值手动上传支付结果
  // 血糖（关注） start
  // wx_sign: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxccd168f14354ea8e&redirect_uri=http%3A%2F%2F22m187f189.iask.in%2Fwx%2Fsecurity%2Flogin%3Furl%3DTODO_REDIRECT_URL&response_type=code&scope=snsapi_base&state=&connect_redirect=1#wechat_redirect'

  // 转赠 statrt
  sale_productOrder_gift_getDetail: 'sale/productOrder/gift/getDetail', // 获取转赠详细信息
  sale_productOrder_gift_receive: 'sale/productOrder/gift/receive', // 转赠订单领取
  sale_productOrder_gift_agree: 'sale/productOrder/gift/agree', // 转赠订单领取同意
  sale_productOrder_gift_reject: 'sale/productOrder/gift/reject', // 转赠订单领取拒绝
  sale_productOrder_gift_share: 'sale/productOrder/gift/share', // 转赠订单分享
  // 转赠 end

  // 复诊 start
  tc_furtherConsultation_list: 'tc/furtherConsultation/list', // 复诊跟踪列表
  tc_furtherConsultation_getDetail: 'tc/furtherConsultation/getDetail', // 获取复诊方案详情
  tc_furtherConsultation_remark: 'tc/furtherConsultation/remark', // 标记复诊
  // 复诊 end
  // 使用手册 start
  document_list: 'document/list', // 获取文章列表
  // 使用手册 end

  // 文件预览
  sys_file_getPreviewConfig: 'sys/file/getPreviewConfig', // 获取文件预览配置

  // 数据字典 start
  data_sys_getDictDetail: 'data/sys/getDictDetail', // 数据字典
  // 数据字典 end

  // 阿斯利康产品列表
  data_astrazenecaProduct_list: 'data/astrazenecaProduct/list', // 阿斯利康产品列表
  // 阿斯利康产品列表
  document_typeList: 'document/typeList', // 根据模块获取分类列表
  vm_patient_doctorHasSigned: 'vm/patient/doctorHasSigned', // 患者是否签约医生
  // 直播start
  live_liveRoom_info: 'live/room/info', // 医生直播间信息
  live_historyLiveRoom_list: 'live/room/historyList', // 获取医生历史直播房间列表
  live_roomVideo_list: 'live/roomVideo/list', // 获取直播房间回访列表
  live_room_notLivedList: 'live/room/notLivedList', // 获取医生未直播列表
  live_room_sendMiniProgramMsg: 'live/room/sendMiniProgramMsg', // 发送直播小程序卡片
  live_roomVideo_cumulateViewCount: 'live/roomVideo/cumulateViewCount', // 累计视频点击率
  live_room_roomDetail: 'live/room/roomDetail', // 获取直播房间内容
  im_tencent_getAccount: 'im/tencent/getAccount', // 获取腾讯云账户
  live_room_status: 'live/room/status', // 直播间状态
  live_roomAudience_enter: 'live/roomAudience/enter', // 观众进入直播间 (未开播和直播结束时调用无效，观众不会入场)
  live_roomStatistics_like: 'live/roomStatistics/like', // 直播点赞 (未开播和直播结束时调用无效，点赞不算数)
  live_roomComment_save: 'live/roomComment/save', // 发表评论 (未开播和直播结束时调用无效，评论不会记录)
  live_roomStatistics_get: 'live/roomStatistics/get', // 直播间的统计信息
  vm_medicalCard_saveOrUpdateByPhone: 'vm/medicalCard/saveOrUpdateByPhone', // 保存手机号
  live_room_getPlayType: 'live/room/getPlayType', // 获取客户端直播方式
  live_roomAudience_saveRemind: 'live/roomAudience/saveRemind', // 直播间提醒
  live_room_liveList: 'live/room/liveList', // 获取医生正在直播的房间列表
  document_scanedDoctorDocumentlist: 'org/staffDynamic/scanDoctorDynamiclist', // 获取扫码医生文章列表
  live_room_getadvertisingVideoList: 'live/room/getAdvertisingVideoList', // 获取广告视频列表
  live_roomAudience_videoAudienceCheckIn: 'live/roomAudience/videoAudienceCheckIn', // 记录直播回放观众
  live_room_isNeedViewCode: 'live/room/isNeedViewCode', // 直播间是否需要观看码
  live_room_code_validate: 'live/room/code/validate', // 校验观看码
  // 直播end

  data_astrazeneca_getHospital: 'data/astrazeneca/getHospital', // 获取医院
  data_astrazeneca_submitRegister: 'data/astrazeneca/submitRegister', // 提交医生注册信息
  wx_menuAuthority_getByCode: 'wx/memberGradeAuthority/getPageAuthorityByCode', // 根据患者等级获取页面权限
  wx_memberGradeAuthority_getOptAuthorityByCode: 'wx/memberGradeAuthority/getOptAuthorityByCode', // 根据患者等级获取操作权限
  // ldlc start
  vm_patient_ldlC_list: 'vm/patient/ldlC/list', // 获取ldl-c列表
  vm_patient_ldlC_getLastOne: 'vm/patient/ldlC/getLastOne', // 获取最新一条ldl-c
  vm_patient_ldlC_save: 'vm/patient/ldlC/save', // 保存ldl-c
  vm_patient_ldlC_statistic: 'vm/patient/ldlC/statistic', // 获取ldl-c折线图数据
  // ldlc end
  // 血压 start
  vm_patient_bloodPressure_statistic: 'vm/patient/bloodPressure/statistic', // 获取血压折线图数据
  vm_patient_bloodPressure_save: 'vm/patient/bloodPressure/save', // 保存血压
  vm_patient_bloodPressure_getLastOne: 'vm/patient/bloodPressure/getLastOne', // 获取最新一条血压详情
  vm_patient_bloodPressure_list: 'vm/patient/bloodPressure/list', // 获取血压列表
  vm_patient_bloodPressure_setOthers: 'vm/patient/bloodPressure/setOthers', // 标记血压记录他人测量
  vm_patient_bloodPressure_deviceList: 'vm/patient/bloodPressure/deviceList', // 获取患者血压设备列表
  vm_patient_bloodPressure_bind: 'vm/patient/bloodPressure/bind', // 绑定血压设备
  vm_patient_bloodPressure_unbind: 'vm/patient/bloodPressure/unbind', // 解绑血压设备

  // 血压 end

  // 体重 start
  vm_patient_weight_statistic: 'vm/patient/weight/statistic', // 获取体重折线图数据
  vm_patient_weight_statisticByMonth: 'vm/patient/weight/statisticByMonth', // 获取体重折线图数据(按月份)
  vm_patient_weight_list: 'vm/patient/weight/list', // 获取体重列表
  vm_patient_weight_getLastOne: 'vm/patient/weight/getLastOne', // 获取最新一条体重数据
  vm_patient_weight_get: 'vm/patient/weight/get', // 获取体重详情
  vm_patient_weight_save: 'vm/patient/weight/save', // 保存体重
  vm_patient_weight_modify: 'vm/patient/weight/modify', // 修改体重
  vm_patient_weight_delete: '/vm/patient/weight/delete', // 删除体重记录
  vm_patient_weight_getAdvice: 'vm/patient/weight/getAdvice', // 获取医生建议体重
  // 体重 end
  // 卡路里 start
  vm_calDiary_list: 'vm/calDiary/list', // 卡路里日记列表
  vm_calDiary_optional_timeStage: 'vm/calDiary/optional/timeStage', // 卡路里日记的可选时段
  dish_classify_imageClassify_dish: 'dish/classify/imageClassify/dish', // 菜品识别接口
  vm_calDiary_cache_get: 'vm/calDiary/cache/get', // 取出草稿
  vm_calDiary_cache_set: 'vm/calDiary/cache/set', // 缓存草稿
  data_calFoodCategory_all: 'data/calFoodCategory/all', // 所有食物分类
  data_calFood_list: 'data/calFood/list', // 卡路里食物列表
  data_calFood_completeMatchlist: 'data/calFood/completeMatchlist', // 卡路里食物列表（全匹配）
  data_calFoodUnit_get: 'data/calFoodUnit/get', // 食物单位信息
  vm_calDiary_save: 'vm/calDiary/save', // 保存卡路里记录
  vm_calDiary_get: 'vm/calDiary/get', // 卡路里日记详情
  vm_calDiary_update: 'vm/calDiary/update', // 卡路里日记更新
  vm_calDiary_unit: 'vm/calDiary/unit', // 手动输入时可选单位
  vm_calDiaryItem_delete: 'vm/calDiaryItem/delete', // 删除日记项
  vm_calDiary_group_get: 'vm/calDiary/group/get', // 卡路里日记组的日记列表
  vm_calDiary_isExist: 'vm/calDiary/isExist', // 检查日记是否存在
  vm_calDiaryItem_save: 'vm/calDiaryItem/save', // 保存日记项
  vm_calDiary_timeStage_get: 'vm/calDiary/timeStage/get', // 获取时段详情
  vm_calDiary_singleItem_get: 'vm/calDiary/singleItem/get', // 指定日记项的卡路里日记详情
  vm_calDiary_isNeedPay: 'vm/calDiary/isNeedPay', // 点击使用等按钮判断是否需要支付使用功能
  vm_calDiary_calorieControl: 'vm/calDiary/calorieControl', // 获取患者最新一条热量控制方案
  vm_weeklyRecipe_detail: 'vm/weeklyRecipe/detail', // 获取食谱详情
  vm_weeklyRecipe_historyList: 'vm/weeklyRecipe/historyList', // 获取历史食谱列表
  vm_weeklyRecipe_historyDetail: 'vm/weeklyRecipe/historyDetail', // 获取历史食谱详情
  vm_markFood_addMarkFood: 'vm/markFood/addMarkFood', // 增加常吃食物
  vm_markFood_lastUpdateInfo: 'vm/markFood/lastUpdateInfo', // 最后更新时间
  vm_markFood_removeMarkFood: 'vm/markFood/removeMarkFood', // 删除常吃食物
  vm_markFood_list: 'vm/markFood/list', // 获取标记食物列表
  vm_markFood_all: 'vm/markFood/all', // 获取患者所有标记食物
  vm_calFood_bloodSugarBsiType: 'data/calFood/bloodSugarBsiType', // 食物血糖指数类型
  vm_calFood_bloodSugarBsiList: 'data/calFood/bloodSugarBsiList', // 食物血糖指数列表
  // 卡路里 end

  // 季度控糖报告 srart
  org_nurse_getScore: 'org/nurse/getScore', // 获取护士评分
  bs_quarterlyReport_setScore: 'bs/quarterlyReport/setScore', // 评分季度控糖报告
  bs_quarterlyReport_commentDelete: 'bs/quarterlyReport/commentDelete', // 季度控糖报告评论删除
  bs_quarterlyReport_comment: 'bs/quarterlyReport/comment', // 季度控糖报告评论
  bs_quarterlyReport_commentReply: 'bs/quarterlyReport/commentReply', // 季度控糖报告评论回复
  bs_quarterlyReport_list: 'bs/quarterlyReport/list', // 获取报告列表
  bs_quarterlyReport_saveOrUpdate: 'bs/quarterlyReport/saveOrUpdate', // 提交完善报告
  bs_quarterlyReport_detail: 'bs/quarterlyReport/detail', // 详情
  // 季度控糖报告 end

  // 问卷 start
  qtn_questionnaire_get: 'qtn/questionnaire/get', // 获取问卷详情
  qtn_questionnaire_submitQuestionnaire: 'qtn/questionnaire/submitQuestionnaire', // 提交问卷
  qtn_questionnaire_getIncludeAnswer: 'qtn/questionnaire/getIncludeAnswer', // 获取问卷详情包含用户答案
  qtn_questionnaire_list: 'qtn/questionnaire/list', // 患者问卷列表
  qtn_questionnaire_getPatientQuestionnaireStatus: 'qtn/questionnaire/getPatientQuestionnaireStatus', // 获取患者和问卷状态
  // 问卷 end
  // 用药模块用法用药时间 start
  vm_patient_medicationPlan_getBaseDictData: 'vm/patient/medicationPlan/getBaseDictData',
  // 用药模块用法用药时间 end
  // 在线查房 start
  tc_roundsTask_patient_list: 'tc/roundsTask/patient/list', // 查房列表
  vm_rounds_get: 'vm/rounds/get', // 查房详情
  tc_nurse_roundsTask_list: 'tc/nurse/roundsTask/list', // 查房列表
  tc_nurse_roundsTask_get: 'tc/nurse/roundsTask/get', // 获取查房任务详情
  vm_patient_drugUsageBook_getList: 'vm/patient/drugUsageBook/getList', // 获取用药详情
  // 在线查房 end
  // 科研系统 start
  rw_followup_patientVisit_list: 'rw/followup/patientVisit/list', // 获取患者随访记录列表
  rw_followup_patientVisit_getDetail: 'rw/followup/patientVisit/getDetail', // 获取随访记录详情
  rw_followup_patientVisit_submit: 'rw/followup/patientVisit/submit', // 提交随访
  rw_patientBaseInfo_isWriteData: 'rw/patientBaseInfo/isWriteData', // 是否已填写资料
  rw_projectPatient_uploadProjectConsent: 'rw/projectPatient/uploadProjectConsent', // 上传知情同意书
  rw_projectPatient_isUploadConsent: 'rw/projectPatient/isUploadConsent', // 是否已上传知情同意书
  rw_project_getDoctorProjectList: 'rw/project/getDoctorProjectList', // 获取员工的项目列表
  rw_project_getIcf: 'rw/project/getIcf', // 获取项目的知情同意书详情
  vm_patient_getDoctorList: 'vm/patient/getDoctorList', // 获取扫码医生列表
  rw_projectPatient_selectAndJoinProject: 'rw/projectPatient/selectAndJoinProject', // 患者选择加入项目
  rw_patientBaseInfo_saveOrUpdate: 'rw/patientBaseInfo/saveOrUpdate', // 保存患者基本信息
  rw_patientBaseInfo_get: 'rw/patientBaseInfo/get', // 获取患者基本信息
  rw_patientBaseInfo_sms_code: 'rw/patientBaseInfo/sms/code', // 发送短信验证码
  rw_project_get: 'rw/project/get', // 获取项目信息
  rw_patientBaseInfo_historys: 'rw/patientBaseInfo/historys', // 获取患者基本信息历史列表
  rw_patientBaseInfo_getHistory: 'rw/patientBaseInfo/getHistory', // 获取患者历史基本信息
  rw_patientBaseInfo_getBaseInfo: 'rw/patientBaseInfo/getBaseInfo', // 获取参与项目患者基本信息
  rw_crf_getFinishCrfDetailByPatientId: 'rw/crf/getFinishCrfDetailByPatientId', // 根据患者查询获取已提交的crf详情
  rw_projectPatient_isJoinProject: 'rw/projectPatient/isJoinProject', // 是否已加入过该项目
  rw_crf_history_list: 'rw/crf/history/list', // 获取患者历史crf记录列表
  rw_crf_history_detail: 'rw/crf/history/detail', // 获取历史crf详情
  org_staff_getResearchAssistant: 'org/staff/getResearchAssistant', // 获取助理信息
  org_staff_getById: 'org/staff/getById', // 根据员工ID获取助理信息
  rw_article_list: 'rw/article/list', // 获取文章列表
  rw_article_get: 'rw/article/get', // 获取文章详情
  // 科研系统 end
  // 复诊 start
  vm_further_consultation_order_doctor_list: 'vm/further/consultation/order/doctor_list', // 可复诊医生列表
  vm_further_consultation_order_create: 'vm/further/consultation/order/create', // 发起预约
  vm_further_consultation_order_list: 'vm/further/consultation/order/list', // 复诊预约列表
  vm_further_consultation_order_info: 'vm/further/consultation/order/info', // 复诊预约详情
  vm_further_consultation_order_noReadCount: 'vm/further/consultation/order/noReadCount', // 查询未读复诊预约数
  tc_fcrt_get: 'tc/fcrt/get', // 复诊提醒任务详情
  tc_fcrt_getLog: 'tc/fcrt/getLog', // 复诊提醒操作记录
  // 复诊 end
  // 知情同意书 start
  vm_patient_consent_save: 'vm/patient/consent/save', // 保存知情同意书（DDMC）
  vm_patient_consent_getConfig: 'vm/patient/consent/getConfig', // 获取知情同意书配置（DDMC）
  // 知情同意书 end
  // rwci小结 start
  vm_rwci_list: 'vm/rwci/list',
  vm_rwci_detail: 'vm/rwci/detail',
  // rwci小结 end
  // 健康教育 start
  vm_staffDynamic_ddmcNurseList: 'org/staffDynamic/ddmcNurseList', // 健康教育列表
  // 健康教育 end
  // 合作社区 start
  pmc_CooperationCommunity_getCooperateCommunitys: 'pmc/CooperationCommunity/getCooperateCommunitys', // 合作社区列表
  pmc_CooperationCommunity_doctor_list: 'pmc/CooperationCommunity/doctor/list', // 获取社区医生列表
  // 合作社区 end
  // 紧急联系 start
  cooperateHospitalHotline: 'cooperate/hospital/hotline', // 获取医院紧急联系电话
  // 紧急联系 end
  // 科室动态 start
  rw_research_document_list: 'rw/research/document/list', // 获取科室动态列表
  rw_research_document_type_list: 'rw/research/document/type/list', // 科室动态分类列表
  rw_research_document_info: 'rw/research/document/info', // 科室动态详情
  rw_research_document_read: 'rw/research/document/read', // 阅读+1
  // 科室动态 end
  // 运动打卡 start
  vm_sport_recordStatistic: 'vm/sport/recordStatistic', // 运动记录统计
  vm_sport_recordList: 'vm/sport/recordList', // 获取运动记录列表
  vm_sport_dataList: 'vm/sport/dataList', // 获取运动类型数据列表
  vm_sport_getTodayRecord: 'vm/sport/getTodayRecord', // 获取今日运动记录
  vm_sport_save: 'vm/sport/save', // 保存运动打卡
  vm_sport_delete: 'vm/sport/delete', // 删除运动打卡
  vm_sport_plan_current: 'vm/sport/plan/current', // 获取患者当前运动方案
  vm_sport_plan_historyList: 'vm/sport/plan/historyList', // 获取运动方案历史列表
  vm_sport_plan_getByHistoryId: '/vm/sport/plan/getByHistoryId', // 获取患者历史运动方案
  // 运动打卡 end
  // 缓解治疗疗程回顾 start
  vm_remissionCure_summary_list: 'vm/remissionCure/summary/list', // 缓解治疗疗程回顾列表
  vm_remissionCure_summary_detail: 'vm/remissionCure/summary/detail', // 获取疗程总结详情
  vm_remissionCure_submitEvaluation: 'vm/remissionCure/submitEvaluation', // 提交缓解治疗评价
  vm_remissionCure_summary_finalDetail: 'vm/remissionCure/summary/finalDetail', // 获取疗程总结总成绩单详情
  // 缓解治疗疗程回顾 end
  //控糖服务的
  vm_remissionCure_report_detail: 'vm/remissionCure/report/detail', // 获取疗程总结详情
  //控糖服务的
  // 健康管理 start
  vm_patient_getHealthManagerSchemeStatus: 'vm/patient/getHealthManagerSchemeStatus', // 获取健康管理方案首页详情
  //                     ------监测-------
  vm_monitor_getTargetList: 'vm/monitor/getTargetList', // 获取目标设定列表
  vm_monitor_getFrequencyTypeList: 'vm/monitor/getFrequencyTypeList', // 获取频次类型列表
  vm_monitor_getAll: 'vm/monitor/getAll', // 获取所有监测方案
  vm_monitor_getById: 'vm/monitor/getById', // 根据id获取监测方案
  vm_monitor_saveCustomContent: 'vm/monitor/saveCustomContent', // 自定义监测方案内容提交
  //                     ------复诊-------
  // vm_furtherConsultation_checkup_list: 'vm/furtherConsultation/checkup/list', // 检查项列表
  tc_furtherConsultation_scheme_getByPatient: 'tc/furtherConsultation/scheme/getByPatient', // 获取复诊方案详情
  //                     ------留言-------
  vm_chronic_disease_suggest_getCurrent: 'vm/chronic/disease/suggest/getCurrent', // 获取当前留言建议
  // 健康管理 end
  // 健康数据 start
  dyn_list: 'dyn/list', // 获取全部用户动态
  dyn_like: 'dyn/like', // 点赞
  dyn_read: 'dyn/read', // 点阅
  dyn_comment: 'dyn/comment', // 用户动态评论
  dyn_commentReply: 'dyn/commentReply', // 用户动态评论回复
  dyn_commentDelete: 'dyn/commentDelete', // 用户动态评论删除
  org_doctor_getIsBelongTypeFifthDoctor: 'org/doctor/getIsBelongTypeFifthDoctor', // 获取签约医生是否五类医生
  dyn_uploadImg: 'dyn/uploadImg', // 动态上传图片
  // 健康数据 end

  // 尿酸 start
  vm_patient_uricAcid_getLastOne: 'vm/patient/uricAcid/getLastOne', // 获取最新一条尿酸数据
  vm_patient_uricAcid_get: 'vm/patient/uricAcid/get', // 获取尿酸详情
  vm_patient_uricAcid_list: 'vm/patient/uricAcid/list', // 获取尿酸列表
  vm_patient_uricAcid_statistic: 'vm/patient/uricAcid/statistic', // 获取尿酸折线图数据
  vm_patient_uricAcid_statisticByMonth: 'vm/patient/uricAcid/statisticByMonth', // 获取尿酸折线图数据（按月统计）
  vm_patient_uricAcid_save: 'vm/patient/uricAcid/save', // 保存尿酸
  vm_patient_uricAcid_modify: 'vm/patient/uricAcid/modify', // 修改尿酸
  vm_patient_uricAcid_delete: 'vm/patient/uricAcid/delete' // 删除尿酸记录
  // 尿酸 end

}
