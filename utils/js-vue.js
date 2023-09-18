import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
Toast.allowMultiple() // 允许同时存在多个 Toast
// 错误提示框
export function toastFail (msg) {
  // const toast = Toast.fail(msg)
  const toast = Toast.fail({
    duration: 0, // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner',
    message: msg
  })
  setTimeout(() => {
    toast.clear()
  }, 1500)
}

// 成功提示框
export function toastSucceed (msg) {
  const toast = Toast.success(msg)
  setTimeout(() => {
    toast.clear()
  }, 1500)
}

// loading start
export function loadingStart (msg = '', {
  forbidClick = true,
  loadingType = 'spinner',
  mask = true
} = {}) {
  Toast.loading({
    duration: 0, // 持续展示 toast
    mask,
    forbidClick: forbidClick, // 禁用背景点击
    loadingType: loadingType,
    message: msg
  })
}

// loading close  强制关闭所有Toast 慎用
export function loadingClose () {
  Toast.clear(true)
}

/**
 * @description 推荐使用的loading框
 * @example
 * import {loading} from '@/utils/js-vue'
 * let loadingInstance = loading() // loading 实例
 * loadingInstance.start()
 * loadingInstance.close()
 */
export function loading () {
  let toast = ''
  return {
    start: (msg = '', {
      forbidClick = true,
      loadingType = 'spinner',
      mask = true,
      className = ''
    } = {}) => {
      toast = Toast.loading({
        duration: 0, // 持续展示 toast
        mask,
        forbidClick: forbidClick, // 禁用背景点击
        loadingType: loadingType,
        message: msg,
        className
      })

      // setTimeout(() => {
      //   // 设置超时自动关闭loading框
      //   if (toast) {
      //     toast.clear()
      //     throw new Error('长时间未关闭loading框, loading自动关闭')
      //   }
      // }, 20000)
    },
    close: () => {
      // console.log('toast', toast)
      if (toast) {
        return toast.clear()
      }
    }
  }
}
