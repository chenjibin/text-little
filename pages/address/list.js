var util = require('../../utils/area.js')
Page({
    data: {
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
            defaultAddress: '34'
        },
        mainData: {
            addressInfo: {},
            mainFlag: false,
            formShowClass: '',
            chooseAreaClass: '',
            maskShowClass: '',
            maskShowFlag: true,
            province: [],
            city: [],
            area: [],
            areaData: [0, 0, 0]
        }
    },
    onLoad() {
        let areaData = util.returnAreaData()
        let value = this.data.mainData.areaData
        this.setData({
            'mainData.province': areaData
        })
        this.getCorrectArea(value)
    },
    getCorrectArea(value) {
        let areaData = this.data.mainData.province
        let cityArr = []
        let areaArr = []
        let key = value
        cityArr = areaData[key[0]]['city'][key[1]]
        console.log(cityArr)
        cityArr ? key = value : key = [value[0], 0, 0]
        cityArr = areaData[key[0]]['city']
        console.log(key)
        areaArr = areaData[key[0]]['city'][key[1]]['area']
        this.setData({
            'mainData.city': cityArr,
            'mainData.area': areaArr,
            'mainData.areaData': key
        })
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
    chooseArea(event) {
        let mainAdraData = this.data.mainData.province
        let value = event.detail.value
        
        let province = mainAdraData[value[0]].name
        let city = mainAdraData[value[0]]['city'][value[1]]
        city ? value = value : value = [value[0], 0, 0]
        city = mainAdraData[value[0]]['city'][value[1]].name
        let area = mainAdraData[value[0]]['city'][value[1]]['area'][value[2]]
        console.log(area)
        area ? value = value : value = [value[0], value[1], 0]
        area = mainAdraData[value[0]]['city'][value[1]]['area'][value[2]].name
        this.getCorrectArea(value)
        this.setData({
            'mainData.addressInfo.province': province,
            'mainData.addressInfo.city': city,
            'mainData.addressInfo.area': area
        })
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