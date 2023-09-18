function wxConfig (wx, res, sdk) {
  wx.config({
    debug: false,
    appId: res.appId,
    timestamp: res.timestamp,
    nonceStr: res.nonceStr,
    signature: res.signature,
    jsApiList: sdk.indexOf(',') >= 0 ? sdk.split(',') : [sdk]
  })
}

function getLocation (wx, resolve) {
  wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
      resolve(res)
    }
  })
}

function openAddress (wx, resolve) {
  wx.openAddress({
    success: function (res) {
      resolve(res)
    }
  })
}

function chooseWXPay (param, resolve) {
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      'appId': param.appId, // 公众号名称，由商户传入
      'timeStamp': param.timeStamp, // 时间戳，自1970年以来的秒数
      'nonceStr': param.nonceStr, // 随机串
      'package': param.package,
      'signType': param.signType, // 微信签名方式：
      'paySign': param.paySign // 微信签名
    },
    function (param) {
      if (param.err_msg === 'get_brand_wcpay_request:ok') {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        resolve('支付成功')
      } else {
        resolve('支付失败')
      }
    })
}

function scanQRCode (wx, param, resolve) {
  let num = param && typeof param.needResult !== 'undefined' ? Number(param.needResult) : 1
  // let num = param.needResult ? Number(param.needResult) : 1
  wx.scanQRCode({
    needResult: num, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
      // var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
      resolve(res)
    }
  })
}

function onMenuShareAppMessage (wx, param, resolve) {
  wx.onMenuShareAppMessage({
    title: param.title, // 分享标题
    desc: param.desc, // 分享描述
    link: param.urlData, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: param.imgUrl, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为
    success: function (res) {
      // 设置成功
      resolve(JSON.stringify(res))
    },
    cancel: function (res) {
    },
    complete: function (params) {
    }
  })
}

function onMenuShareTimeline (wx, param, resolve) {
  wx.onMenuShareTimeline({
    title: param.title, // 分享标题
    desc: param.desc, // 分享描述
    link: param.urlData, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: param.imgUrl, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为
    success: function (res) {
      // 设置成功
      resolve(JSON.stringify(res))
    }
  })
}

function updateTimelineShareData (wx, param) {
  wx.updateTimelineShareData({
    title: '', // 分享标题
    link: param.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: '', // 分享图标
    success: function () {
      // 设置成功
    }
  })
}

function chooseImage (wx, resolve) {
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      resolve(res) // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    }
  })
}

export {
  chooseImage,
  updateTimelineShareData,
  onMenuShareTimeline,
  onMenuShareAppMessage,
  scanQRCode,
  chooseWXPay,
  openAddress,
  getLocation,
  wxConfig
}
