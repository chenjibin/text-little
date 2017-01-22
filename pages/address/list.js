const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
    years.push(i)
}

for (let i = 1; i <= 12; i++) {
    months.push(i)
}

for (let i = 1; i <= 31; i++) {
    days.push(i)
}

Page({
    data: {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        year: date.getFullYear(),
        value: [9999, 1, 1],
        serverData: {
            addressData: [
                {
                    id: '33',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '新浦区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 0
                },
                {
                    id: '34',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '新浦区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 1
                },
                {
                    id: '35',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '海州区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 0
                },
                {
                    id: '36',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '高新区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 0
                },
                {
                    id: '37',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '海州区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 0
                },
                {
                    id: '38',
                    name: '小明',
                    mobile: '15061997866',
                    province: '江苏省',
                    city: '连云港市',
                    area: '海州区',
                    address: '海连东路42号杰瑞科技创意产业园E1号楼5楼 ',
                    defaultAddress: 0
                }
            ],
            defaultAddress: '34',

        },
        mainData: {
            addressInfo: {},
            mainFlag: false,
            formShowClass: '',
            chooseAreaClass: '',
            maskShowClass: '',
            maskShowFlag:true,
            areaData: [0, 0, 0],
            provinceArr: ['北京', '江苏省', '重庆', '山东省', '河北省', '北京', '江苏省', '重庆', '山东省', '河北省']
        }
    },
    chooseDefaultHandler(e) {
        let id = e.detail.value
        this.setData({
            'serverData.defaultAddress': id
        })
    },
    submitForm(e) {
        console.log(e)
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
    addAddress() {
        this.setData({
            'mainData.addressInfo': {}
        })
        wx.setNavigationBarTitle({
            title: '新增收货地址'
        })
        this.showPop()
    },
    editAddress(event) {
        let id = event.target.dataset.id
        let addressData = this.data.serverData.addressData
        let addressInfo = {}
        addressData.forEach((item) => {
            if (item.id === id) {
                addressInfo = item
                return
            }
        })
        this.setData({
            'mainData.addressInfo': addressInfo
        })
        wx.setNavigationBarTitle({
            title: '编辑收货地址'
        })
        this.showPop()
    },
    chooseAreaShow() {
        this.setData({
            'mainData.chooseAreaClass': 'show',
            'mainData.maskShowClass': 'show',
             'mainData.maskShowFlag': false
        })
    },
    chooseArea(e) {
        console.log(e)

    },
    hideChooseArea() {
        this.hideMaskBox()
    },
    hideMaskBox() {
        this.setData({
            'mainData.chooseAreaClass': '',
            'mainData.maskShowClass': '',
             'mainData.maskShowFlag': true
        })
    },
    cancelPop() {
        wx.setNavigationBarTitle({
            title: '管理收货地址'
        })
        this.setData({
            'mainData.mainFlag': false,
            'mainData.formShowClass': ''
        })
    },
    showPop() {
        this.setData({
            'mainData.mainFlag': true,
            'mainData.formShowClass': 'show'
        })
    },
})