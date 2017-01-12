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
        stock_num: '9',
        sale_price: '169.00',
        num: '2',
        specification: '颜色:AZ9463  尺码:M（165/88A）',
        model_id: '2',
        check: false
      },
      {
        id: '537',
        title: 'Adidas阿迪达斯女装短袖 2016夏新款透气运动 针织圆领T恤AZ9463',
        pic: 'http://img2.xyyzi.com/Upload/images/20160703/5778dedabbab1.jpg',
        item_id: '6088',
        stock_num: '8',
        sale_price: '169.00',
        num: '3',
        specification: '颜色:AZ9463  尺码:M（165/88A）',
        model_id: '2',
        check: false
      }
    ],
    mainData: {
      allCheck: false,
      num: 0,
      totalPrice: 0,
      editShow: '',
      editShowFlag: false,
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
  checkboxChange(e) {// 点击checkbox的处理函数
    let value = e.detail.value
    let valueLength = value.length
    let cartData = this.data.cartData
    let cartDataLength = cartData.length
    if (valueLength === cartDataLength) {
      this.chooseAllGoodsHandler()
      cartData.forEach((item) => {
        item.check = true
      })
      this.setData({
        'mainData.allCheck': true
      })
    } else if (valueLength === 0) {
      this.clearSendData()
      cartData.forEach((item) => {
        item.check = false
      })
      this.setData({
        'mainData.allCheck': false
      })
    } else {
      this.changeOneHandler(value)
      this.setData({
        'mainData.allCheck': false
      })
    }
    this.setData({
      'mainData.num': valueLength
    })
  },
  chooseAll() { //点击全选的处理函数
    let flag = this.data.mainData.allCheck
    let cartData = this.data.cartData
    let cartDataLength = cartData.length
    let nowNum
    if (flag) {// 取消全选的逻辑
      nowNum = 0
      this.clearSendData()
    } else {// 全选的逻辑
      nowNum = cartDataLength
      this.chooseAllGoodsHandler()
    }
    cartData.forEach((item) => {
      item.check = !flag
    })
    this.setData({
      'cartData': cartData,
      'mainData.allCheck': !flag,
      'mainData.num': nowNum
    })
  },
  chooseAllGoodsHandler() {
    let cartData = this.data.cartData
    cartData.forEach((item) => {
      item.check = true
    })
    this.computedSendData(cartData)
  },
  changeOneHandler(value) {
    let cartData = this.data.cartData
    cartData.forEach((item) => {
      item.check = value.indexOf(item.id) >= 0 ? true : false
    })
    this.computedSendData(cartData)
  },
  clearSendData() {
    this.setData({
      'mainData.sendData': {
        oidArray: [],
        numberArray: []
      },
      'mainData.totalPrice': 0
    })
  },
  editHandler() {
    let flag = this.data.mainData.editShowFlag
    this.setData({
      'mainData.editShowFlag': !flag,
      'mainData.editShow': flag ? '' : 'show'
    })
  },
  inputBlurHandler(e) { // 在inpu输入框失去焦点时的处理函数
    let gid = e.target.dataset.gid
    let value = parseInt(e.detail.value)
    let cartData = this.data.cartData
    cartData.forEach((item) => {
      if (item.id === gid && 0 < value && value <= parseInt(item.stock_num)) {
        item.num = value
        this.setData({
          'cartData': cartData
        })
        if (item.check) this.computedSendData(cartData)
      } else {
        this.setData({
          'cartData': cartData
        })
      }
    })
  },
  computedSendData(cartData) {// 计算需要发送的数据
    let gidArray = []
    let numArray = []
    let totalPrice = 0
    cartData.forEach((newitem) => {
      if (newitem.check) {
        gidArray.push(newitem.id)
        numArray.push(newitem.num)
        totalPrice += parseInt(newitem.sale_price).toFixed(0) * parseInt(newitem.num)
      }
    })
    totalPrice += '.00'
    this.setData({
      'mainData.totalPrice': totalPrice,
      'mainData.sendData': {
        oidArray: gidArray,
        numberArray: numArray
      }
    })
  },
  decreaseNum(e) {
    let gid = e.target.dataset.gid
    let cartData = this.data.cartData
    cartData.forEach((item) => {
      if (item.id === gid) {
        let newNum = parseInt(item.num) - 1
        if (newNum > 0) {
          item.num = newNum
          if (item.check) this.computedSendData(cartData)
          this.setData({
            'cartData': cartData
          })
        }
      }
    })

  },
  addNum(e) {
    let gid = e.target.dataset.gid
    let cartData = this.data.cartData
    cartData.forEach((item) => {
      if (item.id === gid) {
        let newNum = parseInt(item.num) + 1
        if (!(newNum > parseInt(item.stock_num))) {
          item.num = newNum
          if (item.check) this.computedSendData(cartData)
          this.setData({
            'cartData': cartData
          })
        }
      }
    })
  },
  removeGoodHandler() {
  }
})