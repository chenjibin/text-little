Page({
    data: {
        mainData: {
            totalPrice: 0,
            popshowClass: '',
            payBarFlag: true
        },
        array: ['美国', '中国', '巴西', '日本'],
        index: 0,
        serverData: {
            addressInfo: {
                person: '天天',
                mobile: '15061997866',
                address: '江苏省  连云港市  新浦区  海连东路42号杰瑞科技创意产业园E1号楼5楼'
            },
            goodInfo: [
                {
                    title: 'Adidas阿迪达斯女装短袖 2016夏新款透气运动 针织圆领T恤AZ9463',
                    pic: 'http://img2.xyyzi.com/Upload/images/20160703/5778dedabbab1.jpg',
                    price: '169.00',
                    num: '2',
                    property: '颜色:AZ9463  尺码:M（165/88A）'
                }
            ],
            totalPrice: '169.00',
            addressData: [
                {
                    id: '33',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '34',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '35',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '36',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '37',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '38',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '37',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '38',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '37',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '38',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '37',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                },
                {
                    id: '38',
                    name: '小明',
                    mobile: '15061997866',
                    address: '江苏省 连云港市 新浦区 海连东路42号杰瑞科技创意产业园E1号楼5楼 '
                }
            ],
            defaultAddress: '34'
        }
    },
    onLoad() {
        console.log('confirm load')
    },
    onShow() {
        console.log('confirm show')
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    popShow() {
        this.setData({
            'mainData.payBarFlag': false
        })
        setTimeout(() => {
            this.setData({
                'mainData.popshowClass': 'show'
            })
        }, 10)
        wx.setNavigationBarTitle({
            title: '选择收货地址'
        })
    },
    hidePop() {
        wx.setNavigationBarTitle({
            title: '确认订单'
        })
        this.setData({
            'mainData.popshowClass': ''
        })
        setTimeout(() => {
            this.setData({
                'mainData.payBarFlag': true
            })
        },310)
    },
    selectAddress(e) {
        let id = e.detail.value
        console.log(id)
    },
    toAddressList() {
        wx.navigateTo({
            url: '../address/list'
        })
    },
    payHandler() {
        console.log('aaa')
        wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) {
            },
            'fail': function (res) {
            }
        })

    }
})