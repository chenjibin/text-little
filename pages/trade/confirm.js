Page({
    data: {
        mainData: {
            totalPrice: 0
        },
        array: ['美国', '中国', '巴西', '日本'],
        index:0,
        serverData: {
            addressInfo: {
                person: '天天',
                mobile: '15061997866',
                address: '	地址：江苏省  连云港市  新浦区  海连东路42号杰瑞科技创意产业园E1号楼5楼'
            }
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
})