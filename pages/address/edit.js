Page({
    data: {
        serverData: {
            addressData: {
                name: '小明',
                mobile: '15061997844',
                area: '江苏省连云港市新浦区',
                address: '海连东路42号杰瑞科技创意产业园E1号楼5楼',
                defaultAddress: 1
            }
        }
    },
    onLoad(options) {
        console.log(options)
    },
    submitForm(e) {
        console.log(e)
        wx.navigateBack({
            delta: 1
        })
    }
})