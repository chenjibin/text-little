var app = getApp()
Page({
  data: {
    userInfo: null,
    serverData: {
      orderData: [
        {
          name: '待付款',
          state: 'waitPay',
          num: '1',
          iconClass: 'wait-pay'
        },
        {
          name: '待发货',
          state: 'waitSend',
          num: '2',
          iconClass: 'wait-send'
        }, {
          name: '待收货',
          state: 'waitAccept',
          num: '0',
          iconClass: 'wait-accept'
        }, {
          name: '待评价',
          state: 'waitComment',
          num: '4',
          iconClass: 'wait-comment'
        }
      ]
    }
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        'userInfo': userInfo
      })
    })
  },
  onShow() {
    console.log(this.data)

  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()

  }
})