import httpServer from '@/services/utils/http.js'
import url from '@/services/url'
// import Vue from 'vue'

function testLogin (roleId, permissions) {
  const option = {
    method: 'get',
    path: url.webapiBase + url.getLoginUrl,
    timeout: '',
    mock: false,
    type: 'json'
  }
  const data = {
    roleId,
    permissions
  }
  return new Promise((resolve, reject) => {
    httpServer(option, data)
      .then(res => {
        // Vue.prototype.$message.success('保存成功')
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
export {
  testLogin
}
