/**
 * 封装axios
 * 用于请求数据
 */
import axios from 'axios'
// import Cookies from 'js-cookie'

import {LOG_CONFIG, LOADING} from '@/config/index.js'
import {MOCK_CONFIG, MOCK_URL} from '@/config/index'
import {resetToken, getCurrToken} from '@/utils/wx'
import {
  checkError
} from './check'
import {
  loading,
  toastFail
  // loadingStart
  // loadingClose
} from '@/utils/js-vue.js'

axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }
  return Promise.reject(err)
})

function errorState (response, resolve, reject, loadingInstance) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    // toastFail('网络异常')
  }
  reject(response)
}

function successState (res, resolve, reject, loadingInstance) {
  // 统一判断后端返回的错误码
  let data = res.data
  if (data && data.code !== 0 && data.code !== -1) {
    // if (data.code !== 3333) { // 临时加上，修改随访
    //   toastFail(data.message)
    // }
    // reject(res)
    checkError(data, reject(res))
  } else if (data && data.code === -1) {
    // token超时
    // 微信授权
    // auth('token超时')
    resetToken()
    reject(res)
  } else {
    resolve(res)
  }
}

const httpServer = (opts, data) => {
  let token = getCurrToken()
  let loadingInstance = loading() // loading 实例
  if (opts.loading && LOADING) {
    // 根据全局配置和调用接口单个配置判断是否渲染loading框，当两个都为true是，渲染
    loadingInstance.start()
  }
  let Public = { // 公共参数
  }
  let contentType = ''
  if (opts.method === 'post' && opts.type !== 'file') {
    contentType = 'application/json'
    // contentType = 'multipart/form-data'
  } else if (opts.method === 'post' && opts.type === 'file') {
    contentType = 'multipart/form-data'
  } else {
    contentType = 'application/x-www-form-urlencoded'
  }
  let httpDefaultOpts = { // http默认配置
    method: opts.method || 'get',
    url: opts.path,
    mockPath: opts.mockPath,
    timeout: opts.timeout || 100000,
    params: data,
    data: Object.assign(Public, data),
    // data: JSON.stringify(data),
    // withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': contentType,
      token
    }
  }
  if (LOG_CONFIG) {
    console.log('data', JSON.stringify(data))
  }

  if (MOCK_CONFIG && opts.mock && opts.mockPath) {
    httpDefaultOpts.url = MOCK_URL + opts.mockPath
  }
  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  function realAjax (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        if (LOG_CONFIG) {
          console.log(res)
        }
        successState(res, resolve, reject, loadingInstance)
        if (opts.loading && LOADING) {
          setTimeout(() => {
            loadingInstance.close()
          }, 1000)
        }
      }
    ).catch(
      (response) => {
        errorState(response, resolve, reject, loadingInstance)
        if (opts.loading && LOADING) {
          setTimeout(() => {
            loadingInstance.close()
          }, 1000)
        }
      }
    )
  }

  let promise = new Promise(function (resolve, reject) {
    if (token !== undefined || token !== '') {
      // realAjax(resolve, reject)
      // try {
      realAjax(resolve, reject)
      // } catch (error) {
      //   alert(JSON.stringify(error))
      // }
    }
  })
  return promise
}

export default httpServer
