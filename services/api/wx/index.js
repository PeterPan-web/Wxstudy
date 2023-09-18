import {
  url,
  doGet
} from '@/services/utils/util'

/**
 * 获取js-sdk签名
 * @param  {string} redirectUrl 当前使用js-sdk的url
 */
function signPackage (redirectUrl) {
  return doGet({
    url: redirectUrl
  }, url.security_getSignPackage, { loading: false })
}
export {
  signPackage
}
