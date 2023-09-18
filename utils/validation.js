/**
 * 通用
 * form表单验证
 * @access public
 * @author 燕鹏
 */
var IDValidator = require('id-validator')
var Validator = new IDValidator()
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('年龄不能为空'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'))
    } else {
      if (value < 18) {
        callback(new Error('必须年满18岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}
/**
 * 校验电话号码
 * 使用: 无
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const checkMobile = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('电话不能为空'))
  }

  if (!Number.isInteger(value)) {
    callback(new Error('请输入数字值'))
  } else {
    if (value.length < 11) {
      callback(new Error('请输入11位电话'))
    } else {
      callback()
    }
  }
}
/**
 * 账号规则
 * 使用: 服务中心
 * @access public
 */
var accountPrefixRules = function (rule, value, callback) {
  if (!(new RegExp('^[A-Z0-9]{3}$')).test(value) || value === undefined || value === '') {
    callback(new Error('请输入正确的账号规则, 3个字符，限制为大写字母或数字。!'))
  } else {
    callback()
  }
}
/**
 * 判断身份证输入格式是否正确
 * @access public
 * @author 燕鹏
 * @param {string} card - 身份证号
 * @return {Boolean} true / false
*/
function isCardNo (card) {
  return Validator.isValid(card)
}
export {
  checkAge,
  checkMobile,
  accountPrefixRules,
  isCardNo
}
