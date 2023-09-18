/**
 * @file 服务层调用接口方法封装
 * @access public
 * @author 燕鹏
*/

import httpServer from './http.js'
import url from '@/services/url'
import {
  // toastFail,
  toastSucceed
  // loadingStart,
  // loadingClose
} from '@/utils/js-vue.js'
import {
  MOCK_URL
} from '@/config/index'
export {url}
/**
 * @param  {Object} params 请求参数
 * @param  {String} path 请求路径
 * @param  {} {mock=false 是否开启mock服务
 * @param  {} mockPath='' mock服务路径
 * }={}
 */
export function doGet (params, path, {
  customApiBase = '',
  loading = true,
  mock = false,
  mockPath = ''
} = {}) {
  const option = {
    method: 'get',
    loading,
    path: customApiBase ? customApiBase + path : url.webapiBase + path,
    timeout: '',
    mock,
    mockPath: MOCK_URL + mockPath
  }
  const data = params
  return new Promise((resolve, reject) => {
    return httpServer(option, data)
      .then(res => {
        if (res.data.code === 0) {}
        // return res
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        // return error
        reject(error)
      })
  })
}
/**
 * @param  {Object} params 请求参数
 * @param  {String} path 请求路径
 * @param  {} {loading=true 是否需要loading框
 * @param  {} mock=false 是否开启mock 服务
 * @param  {} mockPath=''}={} mock服务路径
 */
export function doPost (params, path, {
  successMessage = '',
  loading = true,
  mock = false,
  mockPath = ''
} = {}) {
  const option = {
    method: 'post',
    loading,
    path: url.webapiBase + path,
    timeout: '',
    mock,
    mockPath: MOCK_URL + mockPath
  }
  return new Promise((resolve, reject) => {
    return httpServer(option, params)
      .then(res => {
        if (res.data.code === 0) {
          if (successMessage) {
            toastSucceed(successMessage)
          }
        }
        // return res
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        // return error
        reject(error)
      })
  })
}
