/**
 * descript
 * 全局自定义指令
 * @access public
 * @author 燕鹏
*/

import util from './util'
import {BUTTON_PERMISSION} from '@/config/index.js'
import permissions from '@/config/permissions'
/**
 * 判断是否存在按钮级全下的方法
 * 通过页面传入的值 在前端维护的按钮级权限控制表 取得指向的后台权限
 * 更具其值与登录时后台返回的权限数据进行对比 判断是否有按钮级权限
 * @param  {} value
 */
function check (value) {
  let isExist = false
  let buttonpermsStr = util.getSession('operationList') // 后台返回的按钮级权限列表
  if (BUTTON_PERMISSION) {
    if (buttonpermsStr === undefined || buttonpermsStr == null) {
      return false
    }
    let buttonperms = JSON.parse(buttonpermsStr)
    for (let i = 0; i < buttonperms.length; i++) {
      if (buttonperms[i].indexOf(permissions[value]) > -1) {
        isExist = true
        break
      }
    }
    return isExist
  } else {
    return true
  }
};

export default {
  install: (Vue, options) => {
    Vue.directive('focus', {
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    })
    Vue.directive('has', {
      // 按钮级权限控制指令
      bind: function (el, binding) {
        if (!check(binding.value)) {
          el.parentNode.removeChild(el)
        }
      }
    })
    Vue.directive('number', {
      bind: function (el) {
        el = el.tagName === 'INPUT' ? el : el.getElementsByTagName('input')[0]
        el.handler = function () {
          el.value = el.value.replace(/\D+/, '')
        }
        el.addEventListener('input', el.handler)
      },
      unbind: function (el) {
        el = el.tagName === 'INPUT' ? el : el.getElementsByTagName('input')[0]
        el.removeEventListener('input', el.handler)
      }
    })
    Vue.directive('alphabet', {
      bind: function (el, binding, vnode) {
        el = el.tagName === 'INPUT' ? el : el.querySelector('input')
        el.handler = function () {
          el.value = el.value.replace(/[^A-Za-z0-9]/g, '')
          vnode.context.$set(binding.value[0], binding.value[1], el.value.replace(/[^A-Za-z0-9]/g, ''))
        }
        el.addEventListener('input', el.handler)
      },
      unbind: function (el) {
        el = el.tagName === 'INPUT' ? el : el.querySelector('input')
        el.removeEventListener('input', el.handler)
      }
    })
  }

}
