/**
 * @file service层接口调用util2.0版本
 * @description 此调用方式的产生是源于，使用util1.0的接口调用方式每次都要catch，即使是不需要的地方，使用方法繁琐，特地写此方法，方便开发
 * 不同点： 不能像promise对象一样无限调用then,只能使用一次
 * @access public
 * @author 燕鹏
*/
import {
  url,
  doGet,
  doPost
} from './util'

class Get {
  constructor (params, path, option) {
    this.callBack = () => {}
    this.catchBack = () => {}
    doGet(params, path, option).then((result) => {
      this.callBack(result)
    }).catch((err) => {
      console.log(err)
      this.catchBack(err)
    })
  }
  then (callBack) {
    this.callBack = callBack
    return this
  }
  catch (catchBack) {
    this.catchBack = catchBack
    return this
  }
}

class Post {
  constructor (params, path, option) {
    this.callBack = () => {}
    this.catchBack = () => {}
    doPost(params, path, option).then((result) => {
      this.callBack(result)
    }).catch((err) => {
      console.log(err)
      this.catchBack(err)
    })
  }
  then (callBack) {
    this.callBack = callBack
    return this
  }
  catch (catchBack) {
    this.catchBack = catchBack
    return this
  }
};

function doGet2 (params, path, option) {
  return new Get(params, path, option)
}

function doPost2 (params, path, option) {
  return new Post(params, path, option)
}

export {
  url,
  doGet2,
  doPost2
}
