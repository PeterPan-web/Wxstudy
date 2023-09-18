import {
  toOtherPage
} from '@/utils/pageUtil.js'
import {
  toastFail
} from '@/utils/js-vue.js'
import {Dialog} from 'vant'
// /**
//  * 有特殊用途的错误码，不能修改为别的
//  */
// MUST_SCAN_ATTENDING_DOCTOR(3333, "您只有关注您的主诊医生才能购买该服务"),
// CANNOT_BUY_MEMBER_SERVICE_PACKAGE(3334, "如果您希望获得主诊医生及专属护士远程血糖精准管理的专业服务，请前往购买\"出院随访服务\"或\"门诊随访服务\""),
// /**
//  * 有特殊用途的错误码，不能修改为别的
//  */
// ADVICE_BUY_OUTPATIENT_SERVICE(3335, "如果您希望获得社区医生和三甲医院专家及专科护士的远程血糖精准管理的专业服务，请前往购买\"门诊随访服务\""),
const map = { // 错误码映射表
  LIVE_ROOM_PWD_CODE_ONE: 9001, // 被锁定
  LIVE_ROOM_PWD_CODE_TWO: 11002, // 直播码错误
  MUST_SCAN_ATTENDING_DOCTOR: 3333,
  CANNOT_BUY_MEMBER_SERVICE_PACKAGE: 3334,
  ADVICE_BUY_OUTPATIENT_SERVICE: 3335,
  MUST_SUCAN_PMC_DOCTOR_BUY_DEVICE: 3336,
  GIFT_ORDER_EXPIRED: 5314,
  GIFT_ORDER_HASGIVED: 5315,
  ONTRY_RENEW_GET_CHECK: 5318, // 正式会员不能购买试用产品错误码
  SERVICE_ASSURANCE_SCHEME: 5038 // 服务保障计划不能购买
}
/**
 * 统一接口错误码返回校验方法
 * @param  {Number} code 错误码 3333
 * @param  {Function} callBack 回调方法 () => {}
 * @example
 * var checkCode = new CheckCode(3333)
 * checkCode.checkScanDoctor().checkServicePackage().checkOutpatientService().checkOther()
 * checkOther() // 必须放到最后
 */
class CheckCode {
  constructor (data, callBack = () => { }) {
    this.data = data
    this.code = data.code
    this.message = data.message
    this.sign = true // 是否需要校验，默认为true,当某个校验不通过是设置为false
    this.callBack = callBack
  }
  checkScanDoctor (privateCallBack) { // 您只有关注您的主诊医生才能购买该服务
    if (this.sign && this.code === map.MUST_SCAN_ATTENDING_DOCTOR) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('commonPage.html#/nomaindc')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkServicePackage (privateCallBack) { // CANNOT_BUY_MEMBER_SERVICE_PACKAGE(3334, "如果您希望获得主诊医生及专属护士远程血糖精准管理的专业服务，请前往购买\"出院随访服务\"或\"门诊随访服务\""),
    if (this.sign && (this.code === map.CANNOT_BUY_MEMBER_SERVICE_PACKAGE || this.code === map.MUST_SUCAN_PMC_DOCTOR_BUY_DEVICE)) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('commonPage.html#/hasBuy')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkOutpatientService (privateCallBack) { // ADVICE_BUY_OUTPATIENT_SERVICE(3335, "如果您希望获得社区医生和三甲医院专家及专科护士的远程血糖精准管理的专业服务，请前往购买\"门诊随访服务\""),
    if (this.sign && this.code === map.ADVICE_BUY_OUTPATIENT_SERVICE) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('commonPage.html#/ong_community')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkGiftOrderShareExpired (privateCallBack) { // GIFT_ORDER_EXPIRED(3335, "转赠已过期，请联系转赠人"),
    if (this.sign && this.code === map.GIFT_ORDER_EXPIRED) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('giftGiving.html#/operationFailed_outTime')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkGiftOrderShareHasGived (privateCallBack) { // GIFT_ORDER_EXPIRED(5315, "当前赠品已经被领取"),
    if (this.sign && this.code === map.GIFT_ORDER_HASGIVED) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('giftGiving.html#/operationFailed')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkOntryRenew (privateCallBack) { // GIFT_ORDER_EXPIRED(5318, "正式会员不能购买试用产品"),
    if (this.sign && this.code === map.ONTRY_RENEW_GET_CHECK) { // 是否需要校验 判断 并且 是否满足校验条件
      this.sign = false
      console.log(`命中${this.code}`)
      toOtherPage('giftGiving.html#/operationFailed_outTime')
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkLiveRoomPwd (privateCallBack) { // 直播间错误判断
    if (this.sign && (this.code === map.LIVE_ROOM_PWD_CODE_ONE || this.code === map.LIVE_ROOM_PWD_CODE_TWO)) { // 直播间错误判断
      this.sign = false
      console.log(`命中${this.code}`)
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  serviceAssuranceScheme (privateCallBack) {
    if (this.sign && this.code === map.SERVICE_ASSURANCE_SCHEME) {
      this.sign = false
      Dialog.alert({
        title: '温馨提示',
        message: this.message,
        confirmButtonText: '好的'
      }).then(() => {
        // on close
      })
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
  checkOther (privateCallBack) { // 非指定code，提示错误
    if (this.sign) {
      this.sign = false
      if (this.code !== 9011) {
        toastFail(this.message)
      }
      privateCallBack ? privateCallBack() : this.callBack(this.data)
    }
    return this
  }
}

function checkError (code, reject) {
  let checkCode = new CheckCode(code, reject)
  checkCode.checkOutpatientService().checkScanDoctor().checkServicePackage().checkGiftOrderShareExpired().checkGiftOrderShareHasGived().checkOntryRenew().checkLiveRoomPwd().serviceAssuranceScheme().checkOther()
}
export {
  checkError
}
