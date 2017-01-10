Page({
  data: {
    cartData: [
      {
        id: '535',
        title: 'Nike耐克男鞋2016夏季AIR zoom透气运动休闲跑步鞋749170-001',
        pic: 'http://img2.xyyzi.com/Upload/images/20160708/577f57e901bc2.jpg',
        item_id: '5915',
        stock_num: '100',
        sale_price: '549.00',
        num: '1',
        specification: '颜色:749170-001  鞋码:44/280',
        model_id: '1',
        check: false
      }, {
        id: '536',
        title: 'Adidas阿迪达斯女装短袖 2016夏新款透气运动 针织圆领T恤AZ9463',
        pic: 'http://img2.xyyzi.com/Upload/images/20160703/5778dedabbab1.jpg',
        item_id: '6088',
        stock_num: '2',
        sale_price: '169.00',
        num: '1',
        specification: '颜色:AZ9463  尺码:M（165/88A）',
        model_id: '2',
        check: false
      }
    ],
    mainData: {
      allCheck: false,
      num: 0,
      totalPrice: 0,
      sendData: {
        oidArray: [],
        numberArray: []
      }
    }
  },
  onLoad() {
    console.log('bb')
  },
  onShow() {

  },
  checkboxChange(e) {
    let value = e.detail.value
    let valueLength = value.length
    let cartDataLength = this.data.cartData.length
    if (valueLength === cartDataLength) {
      this.setData({
        'mainData.allCheck': true
      })
    } else {
      this.setData({
        'mainData.allCheck': false
      })
    }
    this.setData({
      'mainData.num': valueLength
    })
  },
  chooseAll() {
    let flag = this.data.mainData.allCheck
    let cartData = this.data.cartData
    let cartDataLength = cartData.length
    let nowNum
    flag ? nowNum = 0 : nowNum = cartDataLength
    cartData.forEach((item) => {
      item.check = !flag
    })
    this.setData({
      'cartData': cartData,
      'mainData.allCheck': !flag,
      'mainData.num': nowNum
    })
  }
})