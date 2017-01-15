Page({
    data: {
        mainData: {
            totalPrice: 0
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
            totalPrice: '169.00'
        }
    },
    onLoad() {
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
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