// import Cookies from 'js-cookie'
import util from '@/utils/util'
import wx from 'weixin-js-sdk'
import { compatibility } from '@/config/index'
import { signPackage } from 'api/wx/index.js'
import {getToken, getEcho, cooperateHospitalGetWxHeadPic} from '@/services/api/common'
import urlData from '@/services/url'
import store from '@/commomStore/index'
import {
  chooseImage,
  onMenuShareTimeline,
  onMenuShareAppMessage,
  scanQRCode,
  chooseWXPay,
  openAddress,
  getLocation,
  wxConfig
} from './wx_utils'
let _ = require('lodash')
/**
 * 设置token
 * @param  {String} token
 */
function setWXToken (token) {
  const url = window.location.href
  let WX_APPID = getappid(url)
  let tokenCurr = getWXToken()
  tokenCurr[WX_APPID] = token
  localStorage.setItem('wx_token', JSON.stringify(tokenCurr))
}
/**
 * 获取token
 */
function getWXToken () {
  // body
  let tokenStr = localStorage.getItem('wx_token') || '{}'
  return JSON.parse(tokenStr)
}

function getCurrToken () {
  const url = window.location.href
  let WX_APPID = getappid(url)
  let tokenCurr = getWXToken()
  return tokenCurr[WX_APPID]
}

function deleteWXToken () {
  const url = window.location.href
  let WX_APPID = getappid(url)
  let tokenCurr = getWXToken()
  delete tokenCurr[WX_APPID]
  localStorage.setItem('wx_token', JSON.stringify(tokenCurr))
  // localStorage.removeItem('wx_token')
}

function wxSecurityLogin () {
  console.log('wxSecurityLogin')
  deleteWXToken()
  // const url = window.location.href
  const url = window.location.href.split('modules/')[0] + 'modules/springBoard.html#/'
  sessionStorage.setItem('openUrl', window.location.href)
  console.log(`url:${url}`)
  if (!store.state.wxToken.token || location.href.includes('https://open.weixin.qq.com/connect/oauth2/authorize')) {
    console.log('resetToken重复命中，此次授权无效return')
    return
  }
  store.dispatch('wxToken/changeToken')
  let WX_APPID = getappid(url)
  location.href = `${process.env.VUE_APP_http_url}${urlData.wx_security_oauth2Login}?appId=${WX_APPID}&frontUrl=${encodeURIComponent(url)}`
  // throw SyntaxError('location.href异步请求数据刷新页面，导致后续代码会继续执行，有可能导致多次请求微信授权，在此使用throw SyntaxError终止后续代码的执行')
}

/**
 * @description 用于和后台交互后，报错token超时，重新获取token
 */
let resetToken = _.debounce(wxSecurityLogin, 300)

function getappid (url) {
  let WX_APPID
  let matcht = new RegExp(process.env.VUE_APP_staticPath + '(.+?)/module', 'ig')
  let arr = matcht.exec(url)
  WX_APPID = arr ? arr[1] : ''
  return WX_APPID
  // http://ektangdev.4001128178.cn/dev2/web/hosp-mp/cqj/wxb12a7a90a08a08b4/modules/commonPage.html#/unscannedDoctor_buy
}
/**
 * 逻辑
 * cookie存在并能使用
 * cookie存在不能使用
 * 无cookie,有loginTicket
 * 无cookie,无loginTicket
 * 校验token是否存在
 */
function checkToken () {
  // let token = Cookies.get('token')
  let token = getCurrToken()
  const obj = util.getQueryObject()

  let loginTicket = obj.loginTicket
  let params = {
    ticket: loginTicket
  }
  if (compatibility.compatibility) {
    console.log('checkToken-调试模式')
    return new Promise((resolve, reject) => {
      // Cookies.set('token', compatibility.token)
      setWXToken(compatibility.token)
      resolve('有token')
    })
  } else {
    console.log('checkToken-授权')
    return new Promise((resolve, reject) => {
      if (token && token.length > 0) {
        getEcho().then((result) => {
          // 有token 并且能使用
          resolve('有token')
        }).catch((err) => {
          // 有token，不能使用
          deleteWXToken()
          console.log(err)
        })
      } else if (typeof loginTicket !== 'undefined') {
        // 无cookie,有loginTicket
        getToken(params).then((result) => {
          setWXToken(result.data.data.token)
          resolve('有token')
        }).catch((err) => {
          console.log(err)
        })
      } else {
        // 我cookie,无loginTicket
        var myDate = new Date() // 获取系统当前时间 myDate.getTime()
        let loginTimes = localStorage.getItem('login_times')
        if (loginTimes && Number(loginTimes.length) >= 4 && (myDate.getTime() - loginTimes[loginTimes.length - 1]) / 1000 >= 5) {
          deleteWXToken()
        } else {
          let arr = loginTimes || []
          arr.push(myDate.getTime())
          localStorage.setItem('login_times', arr)
        }
        // let redirectUrl = encodeURIComponent(`${process.env.VUE_APP_http_url}wx/security/login?url=${encodeURIComponent(url)}`)
        // location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.WX_APPID}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect`
        // throw SyntaxError('location.href异步请求数据刷新页面，导致后续代码会继续执行，有可能导致多次请求微信授权，在此使用throw SyntaxError终止后续代码的执行')
        resetToken(1)
        resetToken(2)
        resetToken(3)
        resetToken(4)
      }
    })
  }
}

/**
 *
 */
function getSign () {
  // body
  const url = window.location.href.split('#')[0]
  return new Promise((resolve, reject) => {
    signPackage(url).then((result) => {
      resolve(result)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
// 调用微信jssdk
/**
 *import {getWxSign} from '@/utils/wx.js'
 * getWxSign('getLocation') 定位
 * getWxSign('openAddress') 共享收货地址接口
 */
function getWxSign (sdk, param) {
  return new Promise((resolve, reject) => {
    if (getCurrToken()) {
      getSign().then((result) => {
        wxInit(result.data.data, sdk, param).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    } else {
      resolve('未授权')
    }
  })
}
function wxInit (res, sdk, param = {}) {
  return new Promise((resolve, reject) => {
    wxConfig(wx, res, sdk)
    console.log(sdk, '请求的SDK')
    wx.ready(function () {
      if (sdk === 'hideOptionMenu') {
        wx.hideOptionMenu()
        return
      }
      // 开启按钮调用
      wx.showOptionMenu({})
      if (sdk === 'getLocation') {
        getLocation(wx, resolve)
      } else if (sdk === 'openAddress') {
        openAddress(wx, resolve)
      } else if (sdk === 'chooseWXPay') {
        // 微信旧支付调用接口
        chooseWXPay(param, resolve)
      } else if (sdk === 'scanQRCode') {
        scanQRCode(wx, param, resolve)
      } else if (sdk === 'onMenuShareAppMessage,onMenuShareTimeline') { // 需在用户可能点击分享按钮前就先调用 分享给朋友或者qq
        // 分享给朋友
        onMenuShareAppMessage(wx, param, resolve)
        // 分享给朋友圈
        onMenuShareTimeline(wx, param, resolve)
      } else if (sdk === 'updateTimelineShareData') { // 分享到朋友圈
        // updateTimelineShareData(wx, param)
      } else if (sdk === 'chooseImage') { // 拍照或从手机相册中选图接口
        chooseImage(wx, resolve)
      } else {
        resolve('未定义微信jssdk接口')
      }
    })
    // wx.error(function (err) {
    //   alert(JSON.stringify(err))
    // })
  })
}
function shareAllPage (module, data) {
  // 整页分享
  cooperateHospitalGetWxHeadPic()
    .then(res => {
      let imgUrl = res.data.data
      let url = window.location.href
      let openUrlBase = url.split('modules/')[0]
      openUrlBase = openUrlBase + 'modules/' + module + '.html' + url.split('.html')[1]
      // let WX_APPID = getappid(url)
      let param = data || {
        title: document.title, // 分享标题
        desc: '点击查看', // 分享描述
        urlData: openUrlBase, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl || location.href.split('modules/')[0] + 'images/logo.png' // 如果截取到appid就用appid对应的医院logo,否则用eKtang的logo
      }
      getWxSign('onMenuShareAppMessage,onMenuShareTimeline', param)
    })
}
export {
  getCurrToken,
  resetToken,
  checkToken,
  getSign,
  // onBridgeReady,
  getWxSign,
  shareAllPage,
  getappid
}
