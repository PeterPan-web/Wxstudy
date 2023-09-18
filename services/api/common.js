
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
import Cookies from 'js-cookie'
import { getPatientLoginInfo } from '@/services/api/my_cases/index'
import {
  vmPatientFollowIsFollow
} from '@/services/api/personal/index.js'
import {
  toastFail,
  loading
  // loadingStart,
  // loadingClose
} from '@/utils/js-vue.js'
import util from '@/utils/util'
import {toOtherPage} from '@/utils/pageUtil.js'

let loadingInstance = loading() // loading 实例
// 上传
function doUpload (file) {
  loadingInstance.start('上传中...')
  let FileController = url.webapiBase + url.upload
  let xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open('post', FileController, true)
    xhr.setRequestHeader(
      'token',
      Cookies.get('token') ? Cookies.get('token') : ''
    )
    xhr.onload = res => {
      loadingInstance.close()
      let response = res.target.response
      response = JSON.parse(response)
      if (response.code === 0) {
        resolve(response)
      } else {
        toastFail(response.message)
        reject(response)
      }
    }
    xhr.onerror = (err) => {
      loadingInstance.close()
      toastFail(err)
      reject(err)
    }
    xhr.send(file)
  })
}

// 判断是否扫描医生或者是否是会员
function checkPatientInInfo (param, pageType) {
  // param = scodeDoctor 只检查是否扫描医生
  // param = vip 只检查是否是会员
  // param = scodeDoctor&&vip 检查是否扫描医生再检查是否是会员
  // param = message 直接返回result
  return new Promise((resolve, reject) => {
    getPatientLoginInfo()
      .then(res => {
        sessionStorage.setItem('czero', res.data.data.id) // 保存患者ID
        sessionStorage.setItem('memberLevel', Number(res.data.data.memberLevel)) // 保存患者ID
        let data = window.location.href.split('modules/')[0]
        if (res.data.data.isSubscribe === 0) {
          // 没有关注公众号
          window.location.href = 'http://info.4001128178.cn/modules/data.html#/data_show?code=462d7dde9b0c46d5a587905129d557ce'
          return
        }
        if (res.data.data.isAgree === 0) {
          // 没有同意条款
          if (!sessionStorage.getItem('agreeProtocol')) {
            sessionStorage.setItem('afterAgreeProtocolUrl', window.location.href)
            let protocol = data + 'modules/protocol.html#/agreeProtocol'
            window.location.href = protocol
            return
          }
        }
        let unscannedDoctor = ''
        if (pageType === 'buy') {
          // 如果是购买页面
          unscannedDoctor = data + 'modules/commonPage.html#/unscannedDoctor_buy'
        } else {
          // 不是购买页面
          unscannedDoctor = data + 'modules/commonPage.html#/unscannedDoctor'
        }
        // let unscannedDoctor = data + 'modules/commonPage.html#/unscannedDoctor'
        let notVip = data + 'modules/commonPage.html#/notVip'
        // let unscannedDoctor = true
        // let notVip = true
        // window.location.href = data
        let result = res.data.data
        if (param === 'scodeDoctor') {
          // 只校验是否扫码了医生
          resolve(result.isScanQrCode === 1 ? true : unscannedDoctor)
        }
        if (param === 'vip') {
          // 只校验是否有会员资格
          resolve(Number(result.memberLevel) !== 4 ? true : notVip)
        }
        if (param === 'scodeDoctor&&vip') {
          // 只校验是否扫码了医生以及是否有会员资格
          if (result.isScanQrCode !== 1) {
            resolve(unscannedDoctor)
          } else if (Number(result.memberLevel) !== 4) {
            result.notVip = notVip
            resolve(result)
          } else {
            result.scodeDoctorVip = true
            resolve(result)
          }
        }
        if (param === 'message') {
          // 返回所以信息包括是否扫描医生和是否是会员
          result.isScanQrCodeUrl = result.isScanQrCode === 1 ? true : unscannedDoctor // 扫描医生
          result.isSignDoctorUrl = result.isSign === 1 ? true : unscannedDoctor // 签约医生
          result.hasMembershipUrl = Number(result.memberLevel) === 4 ? true : notVip // 游客
          resolve(result)
        } else {
          resolve('请选择相应的判断')
        }
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

// 测试token是否存在
function getEcho () {
  return doGet({}, url.echo, { loading: false })
}

// 获取token
function getToken (params) {
  return doGet(params, url.getToken, { loading: false })
}

// 获取web端的ststoken
function getStsToken () {
  return doGet({}, url.sys_file_web_stsToken, { loading: false })
}
// 获取获取患者信息
function vmPatientGetById (params) {
  return doGet(params, url.vmPatientGetById, { loading: false })
}
// 获取协议
function getProtocol (code) {
  return doGet({ code }, url.openapi_document_getByCode, {
    customApiBase: url.protocolBase
  })
}

// 获取医院公众号协议
function documentGetByAppId (params) {
  return doGet(params, url.document_getByAppId)
}

// 患者同意协议
function vmPatientAgreeProtocol (param) {
  return doPost(param, url.vm_patient_agreeProtocol)
}

// 判断粉丝还是本人还是游客
/**
 *
 * @param {*} patientId === 打开的页面对应的患者id // 必传
 * @param {*} status === 非粉丝能否查看的页面， false表示不可以，默认可以查看
 */
function checkPersonRole (patientId, status, options) {
  return new Promise((resolve, reject) => {
    let url = window.location.href
    let rolePage = url.split('.html')[0].split('/')[url.split('.html')[0].split('/').length - 1]
    let openUrlBase = url.split('modules/')[0]
    let openUrlAfter = url.split('modules/')[1]
    let id = ''
    // 改地址参数
    if (patientId) {
      id = patientId
      if (url.indexOf('patientId') < 0) {
        if (location.href.indexOf('?') >= 0) {
          // location.href = location.href + '&patientId=' + patientId
          history.replaceState('', '', openUrlAfter + '&patientId=' + patientId)
        } else {
          // location.href = location.href + '?patientId=' + patientId
          history.replaceState('', '', openUrlAfter + '?patientId=' + patientId)
        }
      }
    } else {
      // 没有patientId
      if (location.href.indexOf('?') >= 0) {
        // location.href = location.href + '&patientId=' + sessionStorage.getItem('czero')
        history.replaceState('', '', openUrlAfter + '&patientId=' + sessionStorage.getItem('czero'))
      } else {
        // location.href = location.href + '?patientId=' + sessionStorage.getItem('czero')
        history.replaceState('', '', openUrlAfter + '?patientId=' + sessionStorage.getItem('czero'))
      }
      id = sessionStorage.getItem('czero')
    }
    // 获取当前人是不是这个页面所属人
    vmPatientFollowIsFollow({
      followPatientId: id
    })
      .then(res => {
        let data = res.data.data
        console.log(data);
        console.log(rolePage, 'rolePage')
        let newUrl = window.location.href
        if (data.visitorType === 1) { // 本人打开
          // document.title = '我的' + document.title
          if (rolePage !== 'blood_sugar' && rolePage !== 'personal') {
            window.location.href = openUrlBase + 'modules/blood_sugar.html' + newUrl.split('.html')[1] + '&role=own'
          } else {
            resolve(true)
          }
        } else if (data.visitorType === 2) { // 非本人打开，并且关注（粉丝）
          if (options) { // 分享的标题
            if (options.titleType !== 1) {
              document.title = data.nickname + '的' + document.title
            }
          } else {
            document.title = data.nickname + '的' + document.title
          }
          if (rolePage !== 'fansPage') {
            window.location.href = openUrlBase + 'modules/fansPage.html' + newUrl.split('.html')[1] + '&role=fans'
          } else {
            resolve(true)
          }
        } else { // 非本人，未关注（游客）
          if (options) { // 分享的标题
            if (options.titleType !== 1) {
              document.title = data.nickname + '的' + document.title
            }
          } else {
            document.title = data.nickname + '的' + document.title
          }
          if (rolePage !== 'touristPage') {
            if (typeof status === 'undefined' || status) {
              window.location.href = openUrlBase + 'modules/touristPage.html' + newUrl.split('.html')[1] + '&role=tourist'
            } else {
              window.location.href = openUrlBase + 'modules/touristPage.html#/noFollow'
            }
          } else {
            resolve(true)
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  })
}

// 获取授权医院信息
function cooperateHospitalGetInfo (params) {
  return doGet(params, url.cooperate_hospital_getInfo)
}

// 获取授权医院信息
function cooperateHospitalGetWxHeadPic (params) {
  return doGet(params, url.cooperate_hospital_getWxHeadPic)
}

// 数据字典
function dataSysGetDictDetail (param) {
  return doGet(param, url.data_sys_getDictDetail)
}

// 根据患者等级获取页面权限
function wxMenuAuthorityGetByCode (param) {
  return doGet(param, url.wx_menuAuthority_getByCode)
}
// 判断入口请求
function checkPageAuthor (param) {
  return new Promise((resolve, reject) => {
    // return resolve(true)
    // if (sessionStorage.getItem('notVerify') * 1 === 1) return resolve(true) // 不校验
    wxMenuAuthorityGetByCode({
      code: param
    })
      .then(res => {
        let data = res.data.data
        if (data.isAuthority === 0) {
          if (data.url && data.url.indexOf('protocol.html#/agreeProtocol') > -1) {
            sessionStorage.setItem('afterAgreeProtocolUrl', window.location.href)
            toOtherPage('protocol.html#/agreeProtocol')
          } else if (data.url && data.url.indexOf('my_cases.html#/perfect_case') > -1) {
            sessionStorage.setItem('perfect_caseUrl', window.location.href)
            toOtherPage('my_cases.html#/perfect_case', Object.assign(util.getQueryObject(data.url), {from: 'consult_doctor', checkVip: 1}))
          } else if (data.url && data.url.indexOf('my_cases.html#/upLoadInformedConsent') > -1) {
            sessionStorage.setItem('upLoadInformedConsentUrl', window.location.href)
            toOtherPage('my_cases.html#/upLoadInformedConsent', util.getQueryObject(data.url))
          }
           else {
            toOtherPage('commonPage.html#/enterPageTips', util.getQueryObject(data.url))
          }
        } else {
          resolve(true)
        }
      })
      .catch(error => {
        console.log('获取页面权限失败', error)
      })
  })
}

/**
 *紧急联系：ddmcUrgencyCon
 *复诊预约：ddmcFcBook
 *我的医生：ddmcMyDoctor
 *我的护士：ddmcMyNurse

 *院外RWCI：ddmcPrdList
 *补充试纸：ddmcTestPaper
 *方案查询：ddmcFollowupPlan
 *我的数据：ddmcMyData
 *卡路里日记：ddmcCalDiary

 *参与研究：ddmcResearch
 *科室动态：ddmcDynamic
 *合作社区：ddmcCommunity
 *健康教育：ddmcEducation
 *个人中心：ddmcPersonal
 */

// 根据患者等级获取操作权限
function wxMemberGradeAuthorityGetOptAuthorityByCode (param) {
  let code = {
    code: param
  }
  return doGet(code, url.wx_memberGradeAuthority_getOptAuthorityByCode)
}

// 设置短信提醒记录为已处理
function vmPatientSetSmsRemindIsHandled (param) {
  return doPost(param, url.vm_patient_setSmsRemindIsHandled, {loading: false})
}

// 获取用药模块用法用药时间
function vmPatientMedicationPlanGetBaseDictData (param) {
  return doGet(param, url.vm_patient_medicationPlan_getBaseDictData, {loading: false})
}

// 患者星资格预支付
function vmPatientStarPrePay (param) {
  return doPost(param, url.vm_patientStar_prePay)
}

// 查询支付结果
function vmPatientStarPayResult (param) {
  return doGet(param, url.vm_patientStar_pay_result)
}

export {
  getStsToken,
  getToken,
  vmPatientGetById,
  doUpload,
  checkPatientInInfo,
  getEcho,
  getProtocol,
  vmPatientAgreeProtocol,
  checkPersonRole,
  documentGetByAppId,
  cooperateHospitalGetInfo,
  cooperateHospitalGetWxHeadPic,
  dataSysGetDictDetail,
  wxMenuAuthorityGetByCode,
  checkPageAuthor,
  wxMemberGradeAuthorityGetOptAuthorityByCode,
  vmPatientSetSmsRemindIsHandled,
  vmPatientMedicationPlanGetBaseDictData,
  vmPatientStarPrePay,
  vmPatientStarPayResult
}
