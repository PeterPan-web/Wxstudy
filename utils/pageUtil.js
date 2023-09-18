import utils from './util'
/**
 * @description 跳转页面
 * @param  {} url
 * @param  {} params
 * @example
      let url = 'commonPage.html#/consult_doctor'
      let params = {
        from: '0b557f8fa03a4fcfafb815ea12a2c1a3',
        token: 'b0a9e568803ced14ac807b2cdaf0e951',
        to: '30e6d02e2f204042a173e099f7d4001a'
      }
      toOtherPage(url, params)
 */
function toOtherPage (url, params) {
  let preUrl = window.location.href.split('modules/')[0] + 'modules/'
  params = params || {}
  let str = utils.urlEncode(params)
  url = preUrl + url + `?${str}`
  window.location.href = url
}

var originalHeight = document.documentElement.clientHeight || document.body.clientHeight
/**
 * @description 解决手机键盘推起页面导致 样式 及 焦点 改变 bug
 */
function keyboardAdaptation () {
  if (utils.isIOS()) {
    document.body.addEventListener('focusout', () => {
      setTimeout(() => {
        window.scrollTo(0, 10000)
      }, 100)
    })
    document.body.addEventListener('focusin', () => {
      setTimeout(() => {
        window.scrollTo(0, 10000)
      }, 100)
    })
  } else {
    window.onresize = function () {
      // 键盘弹起与隐藏都会引起窗口的高度发生变化
      var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
      if (resizeHeight - 0 < originalHeight - 0) {
        // 当软键盘弹起，在此处操作
      } else {
        // 当软键盘收起，在此处操作
        setTimeout(() => {
          window.scrollTo(0, 10000)
        }, 100)
      }
    }
  }
}

export {
  toOtherPage,
  keyboardAdaptation
}
