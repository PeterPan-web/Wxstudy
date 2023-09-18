import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// import Vue from 'vue'

// 查询患者最新的一条血糖记录
function sugarGetLatest (params) {
  return doGet(params, url.sugar_getLatest)
}
// 异常血糖新增标签
function bsMeasurementAbnormalReasonAdd (params) {
  return doPost(params, url.bs_measurement_abnormal_reason_add)
}
// function sugarGetLatest () {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_getLatest,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {}
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }
// 修改血糖测量时间
function sugarModify ({
  measureId = '',
  timeType = '',
  isOthers = '',
  remark = ''
} = {}) {
  return doPost({
    measureId,
    timeType,
    isOthers,
    remark
  }, url.sugar_modify)
}
// function sugarModify ({
//   measureId = '',
//   timeType = '',
//   isOthers = '',
//   remark = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_modify,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     measureId,
//     timeType,
//     isOthers,
//     remark
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 手动上传血糖测量数据
function sugarUpload ({
  timeType = '',
  measureTime = '',
  sugarValue = '',
  remark = ''
} = {}) {
  return doPost({
    timeType,
    measureTime,
    sugarValue,
    remark
  }, url.sugar_upload)
}
// function sugarUpload ({
//   timeType = '',
//   measureTime = '',
//   sugarValue = '',
//   remark = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.sugar_upload,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     timeType,
//     measureTime,
//     sugarValue,
//     remark
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
function sugarGroupAllTypeByMeasureDate ({
  patientId = '',
  timeTypeList = '',
  measureDateFrom = '',
  measureDateTo = ''
} = {}) {
  return doGet({
    patientId,
    timeTypeList,
    measureDateFrom,
    measureDateTo
  }, url.sugar_groupAllTypeByMeasureDate)
}
// function sugarGroupAllTypeByMeasureDate ({
//   timeTypeList = '',
//   measureDateFrom = '',
//   measureDateTo = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_groupAllTypeByMeasureDate,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     timeTypeList,
//     measureDateFrom,
//     measureDateTo
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

//绑定二维码
function patientQRCodeBind({ hospitalDynamicCodeId = "",productNo= "" } = {}) {
  return doGet(
    {
      hospitalDynamicCodeId,
      productNo
    },
    url.patient_QRCode_bind
  );
}
//领取二维码权益携带地址
function patientDeviceOrder(params) {
  return doPost(params, url.patient_QRCode_order);
}

// 查询患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
function patientDeviceBind ({
  deviceNo = ''
} = {}) {
  return doPost({
    deviceNo
  }, url.patient_device_bind)
}
// function patientDeviceBind ({
//   deviceNo = ''
// } = {}) {
//   const option = {
//     method: 'post',
//     path: url.webapiBase + url.patient_device_bind,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     deviceNo
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者最新的测量建议方案
function sugarGetLatestMeasureSchema (params) {
  return doGet(params, url.sugar_getLatestMeasureSchema)
}
// function sugarGetLatestMeasureSchema () {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_getLatestMeasureSchema,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {}
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者健康月报列表
function sugarListHealthyReport ({
  patientId = '',
  pageNum = '',
  pageSize = ''
} = {}) {
  return doGet({
    patientId,
    pageNum,
    pageSize
  }, url.sugar_listHealthyReport)
}
// function sugarListHealthyReport ({
//   patientId = '',
//   pageNum = '',
//   pageSize = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_listHealthyReport,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     patientId,
//     pageNum,
//     pageSize
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者健康月报内容
function sugarGetHealthyReport ({
  patientId = '',
  id = ''
} = {}) {
  return doGet({
    patientId,
    id
  }, url.sugar_getHealthyReport)
}
// function sugarGetHealthyReport ({
//   patientId = '',
//   id = ''
// } = {}) {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.sugar_getHealthyReport,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {
//     patientId,
//     id
//   }
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 查询患者最新健康月报内容
function bsGetLatestHealthyReport () {
  return doGet({}, url.bs_getLatestHealthyReport)
}
// function bsGetLatestHealthyReport () {
//   const option = {
//     method: 'get',
//     path: url.webapiBase + url.bs_getLatestHealthyReport,
//     timeout: '',
//     mock: false,
//     type: 'json'
//   }
//   const data = {}
//   return new Promise((resolve, reject) => {
//     httpServer(option, data)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(error => {
//         console.log(error)
//         reject(error)
//       })
//   })
// }

// 校验是否能发起手动上传血糖
function bsValidateUpload () {
  return doGet({}, url.bs_validateUpload)
}

// 查询付费上传的价格
function bsGetRechargePrice () {
  return doGet({}, url.bs_getRechargePrice)
}

// 查询付费上传的价格
function bsPayForRechargeUpload (params) {
  return doPost(params, url.bs_payForRechargeUpload)
}

// 查询付费上传的价格
function bsGetPayResult (params) {
  return doGet(params, url.bs_getPayResult)
}

// 检查是否可以修改血糖数据时间
function bsCheckModifyMeasureTimeAllowed (params) {
  return doGet(params, url.bs_checkModifyMeasureTimeAllowed)
}

// 根据时间测量间隔
function bsGetCurrentTimeType (params) {
  return doGet(params, url.bs_getCurrentTimeType)
}

export {
  sugarGetLatest,
  bsMeasurementAbnormalReasonAdd,
  sugarModify,
  sugarUpload,
  patientQRCodeBind,
  patientDeviceOrder,
  sugarGroupAllTypeByMeasureDate,
  patientDeviceBind,
  sugarGetLatestMeasureSchema,
  sugarListHealthyReport,
  sugarGetHealthyReport,
  bsGetLatestHealthyReport,
  bsValidateUpload,
  bsGetRechargePrice,
  bsPayForRechargeUpload,
  bsGetPayResult,
  bsCheckModifyMeasureTimeAllowed,
  bsGetCurrentTimeType
}
