Page({
    data: {
        serverData: {
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
                }
            ],
            defaultAddress: '34'
        }
    },
    chooseDefaultHandler(e) {
        let id = e.detail.value
        this.setData({
            'serverData.defaultAddress': id
        })

    },
    removeAddress(event) {
        let id = event.target.dataset.id
        wx.showModal({
            title: '提示',
            content: '确定要删除该地址么?',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })

    },
    editAddress(event) {
        let id = event.target.dataset.id
        wx.navigateTo({
            url: './edit?id=' + id,
        })
    }
})