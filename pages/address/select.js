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
    selectAddress(e) {
        let id = e.detail.value
        console.log(id)
        wx.navigateBack({
          delta: 1
        })
    }
})