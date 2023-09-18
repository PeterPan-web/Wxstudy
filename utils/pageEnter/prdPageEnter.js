// 产品入口判断
import {
  vmPatientGetSignDoctorsAndRelateDoctor,
  orgDoctorScanDoctors
} from '@/services/api/doctor/index'
import {
  vmPatientGetSignDoctors
} from '@/services/api/my_cases/index'
import {toOtherPage} from '@/utils/pageUtil.js'
function prdPageEnter (_this) {
  return new Promise((resolve, reject) => {
    checkoutDoctor(_this).then(checkoutDoctorresult => {
      orgDoctorScanDoctors({
        pageNum: 1,
        pageSize: 100
      }).then(res => {
        if (checkoutDoctorresult.isBuy) {
          resolve({isBuy: true, doctorId: sessionStorage.getItem('isSignDoctorId')})
        } else {
          let data = res.data.data.content
          if (data.length > 1) {
            // 扫码了多个医生
            _this.$nextTick(function () {
              document.title = '选择医生'
            })
            _this.noSignDoctor = true
          } else if (data.length === 1) {
            sessionStorage.setItem('isSignDoctorId', data[0].id)
            if (_this.searchForm) {
              _this.searchForm.doctorId = sessionStorage.getItem('isSignDoctorId')
            }
            _this.checkMyBlood = true
            resolve({isBuy: false, scanDoctorNum: 1, doctorId: sessionStorage.getItem('isSignDoctorId')})
          } else {
            // 游客
            _this.checkMyBlood = true
            resolve({isBuy: false, scanDoctorNum: 0})
          }
        }
      })
    })
  })
}

function checkoutDoctor (_this) {
  return new Promise((resolve, reject) => {
    let signDoctorAndBuy = false
    vmPatientGetSignDoctors().then(res => {
      let data = res.data.data
      let signDoctor = data.signDoctor || []
      let cmntSignDoctor = data.cmntSignDoctor || []
      for (let item of signDoctor) {
        if (Number(item.isBuy) === 1 || Number(item.isGift) === 1) {
          signDoctorAndBuy = true
          sessionStorage.setItem('isSignDoctorId', item.staffId)
          if (_this.searchForm) {
            _this.searchForm.doctorId = sessionStorage.getItem('isSignDoctorId')
          }
          _this.checkMyBlood = true
          resolve({isBuy: true, doctorId: sessionStorage.getItem('isSignDoctorId')})
        }
      }
      for (let item of cmntSignDoctor) {
        if (Number(item.isBuy) === 1 || Number(item.isGift) === 1) {
          signDoctorAndBuy = true
          sessionStorage.setItem('isSignDoctorId', item.staffId)
          if (_this.searchForm) {
            _this.searchForm.doctorId = sessionStorage.getItem('isSignDoctorId')
          }
          _this.checkMyBlood = true
          resolve({isBuy: true, doctorId: sessionStorage.getItem('isSignDoctorId')})
        }
      }
      if (!signDoctorAndBuy) {
        resolve({isBuy: false})
      }
    })
  })
}
function prdPageRelateDoctorEnter (_this) {
  return new Promise((resolve, reject) => {
    vmPatientGetSignDoctorsAndRelateDoctor().then(res => {
      let data = res.data.data
      let signDoctor = data.signDoctor || []
      // 只有一个医生并且是签约医生直接展示该医生的产品列表
      if (signDoctor.length === 1 && signDoctor[0].isSign === 1) {
        sessionStorage.setItem('isSignDoctorId', signDoctor[0].staffId)
        if (_this.searchForm) {
          _this.searchForm.doctorId = sessionStorage.getItem('isSignDoctorId')
        }
        _this.checkMyBlood = true
        resolve({isBuy: signDoctor[0].isBuy, scanDoctorNum: 1, doctorId: sessionStorage.getItem('isSignDoctorId')})
      } else if (signDoctor.length === 0) {
        toOtherPage('commonPage.html#/enterPageTips', {msg: '患者您好！请在就诊时咨询医生，经医生评估后由DDMC专职护士指导您如何使用此功能。'})
      } else {
        _this.$nextTick(function () {
          document.title = '选择医生'
        })
        _this.noSignDoctor = true
        resolve({isBuy: false})
      }
    })
  })
}
export {
  prdPageEnter,
  prdPageRelateDoctorEnter
}
