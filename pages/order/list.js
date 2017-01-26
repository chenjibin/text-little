Page({
    data: {
        serverData: {
            listData: [
                {
                    oid: '535',
                    storeName: '幸运叶子官方商城',
                    orderState: '交易完成',
                    totalPrice: '1098.00',
                    free: '0.00',
                    goodsInfo: [
                        {
                            title: 'Nike耐克男鞋2016夏季AIR zoom透气运动休闲跑步鞋749170-001',
                            pic: 'http://img2.xyyzi.com/Upload/images/20160708/577f57e901bc2.jpg',
                            gid: '5915',
                            newPrice: '549.00',
                            oldPrice: '699.00',
                            num: '1',
                            specification: '颜色:749170-001  鞋码:44/280',
                        },
                        {
                            oid: '535',
                            title: 'Nike耐克男鞋2016夏季AIR zoom透气运动休闲跑步鞋749170-001',
                            pic: 'http://img2.xyyzi.com/Upload/images/20160708/577f57e901bc2.jpg',
                            gid: '5915',
                            newPrice: '549.00',
                            oldPrice: '699.00', 
                            num: '1',
                            specification: '颜色:749170-001  鞋码:44/280',
                        }
                    ]
                },
                {
                    oid: '536',
                    storeName: '幸运叶子官方商城',
                    orderState: '交易完成',
                    totalPrice: '1098.00',
                    free: '0.00',
                    goodsInfo: [
                        {

                            title: 'Nike耐克男鞋2016夏季AIR zoom透气运动休闲跑步鞋749170-001',
                            pic: 'http://img2.xyyzi.com/Upload/images/20160708/577f57e901bc2.jpg',
                            gid: '5915',
                            newPrice: '549.00',
                            oldPrice: '699.00',
                            num: '1',
                            specification: '颜色:749170-001  鞋码:44/280',
                        },
                        {
                            oid: '535',
                            title: 'Nike耐克男鞋2016夏季AIR zoom透气运动休闲跑步鞋749170-001',
                            pic: 'http://img2.xyyzi.com/Upload/images/20160708/577f57e901bc2.jpg',
                            gid: '5915',
                            newPrice: '549.00',
                            oldPrice: '699.00',
                            num: '1',
                            specification: '颜色:749170-001  鞋码:44/280',
                        }
                    ]
                }
            ]
        },
        mainData: {
            checkedState: 'all',
            line:0,
            lineWidth:null,
            toolbarData: [
                {
                    name: '全部',
                    state: 'all'
                },
                {
                    name: '待付款',
                    state: 'waitPay'
                },
                {
                    name: '待发货',
                    state: 'waitSend'
                },
                {
                    name: '待收货',
                    state: 'waitAccept'
                },
                {
                    name: '待评价',
                    state: 'waitComment'
                }
            ]
        }
    },
    onLoad(options) {
        let state = options.state
        let toolbarData = this.data.mainData.toolbarData
        let toolbarLength = toolbarData.length
        let lineWidth = 100 / toolbarLength
        let linId = null
        toolbarData.forEach((item,index) => {
            if(item.state === state) {
                linId = index
                return
            }
        })
        console.log(lineWidth)
        this.setData({
            'mainData.checkedState': state,
            'mainData.lineWidth': lineWidth,
            'mainData.line': linId
        })
    },
    orderStateChange(e) {
    },
    loadList() {
        console.log('aa')
    },
    tabChange(e) {
        console.log(e)
        let line = parseInt(e.currentTarget.dataset.lid)
        console.log(line)
        this.setData({
            'mainData.line':line
        })
    }
})