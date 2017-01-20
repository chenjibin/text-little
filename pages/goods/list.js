//list.js
Page({
    data: {
        showClass: '',
        toggleClass: '',
        activeClass: 'active',
        radioData: {
            toggleFlag: true,
            nowSort: '综合排序',
            radioBoxData: [
                { name: 'allSort', value: '综合排序', checked: true },
                { name: 'priceToLow', value: '价格由高到低' },
                { name: 'priceToUp', value: '价格由低到高' },
            ],
            radioSaleNum: {
                name: 'saleNum',
                value: '销量优先'
            }
        },
        serverData: {
            keywords: ['阿迪男鞋', '耐克女鞋', '女式风衣', '阿迪小童', '耐克小童']
        },
        mainData: {
            searchValue: null,
            historyKeyword: null,
            searchShowClass: ''
        },
        mockGoods: [
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            }
        ],
        goodsData: [
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            },
            {
                gid: '6658',
                pic: 'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg?style=200x200',
                title: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
                nprice: '346.00',
                oprice: '499.00'
            }
        ]
    },
    onLoad(options) {
        console.log(options)
        let that = this
        wx.getStorage({
            key: 'historyKeyword',
            success: function (res) {
                console.log(res)
                that.setData({
                    'mainData.historyKeyword': res.data
                })
            },
            fail: function (res) {
                console.log(res)
                wx.setStorage({
                    key: "historyKeyword",
                    data: [],
                    success: function (a) {
                        console.log(a)
                        that.setData({
                            'mainData.historyKeyword': a.data
                        })
                    }
                })
            }
        })

    },
    loadList(event) {
        console.log(event)
        let goodList = this.data.goodsData
        let newList = this.data.mockGoods
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 500
        });
        newList.forEach((good) => {
            goodList.push(good)
        })
        this.setData({
            'goodsData': goodList
        })
    },
    sortChange(e) {//改变排序触发的事件
        let nowSort = e.detail.value
        let fixRadio = this.data.radioData.radioSaleNum.value
        if (nowSort === fixRadio) {
            this.setData({
                activeClass: '',
            })
        } else {
            this.setData({
                'activeClass': 'active',
                'radioData.nowSort': nowSort
            })
        }
        this.hideMask()
    },
    toggleSort() {//交替排序下拉
        let flag = !this.data.radioData.toggleFlag
        if (!flag) {
            this.setData({
                'radioData.toggleFlag': flag
            });
            setTimeout(() => {
                this.setData({
                    'showClass': 'show',
                    'toggleClass': 'show'
                })
            }, 10)
        } else {
            this.hideMask()
        }
    },
    cancelMask() {
        this.hideMask()
    },
    hideMask() { //关闭遮罩层和下拉收回
        this.setData({
            'showClass': '',
            'toggleClass': ''
        })
        setTimeout(() => {
            this.setData({
                'radioData.toggleFlag': true,
            });
        }, 300)
    },
    toggleSearchBox() {
        console.log('shw')
        let show = this.data.mainData.searchShowClass
        console.log(show)
        show ? show = '' : show = 'active'
        this.setData({
            'mainData.searchShowClass': show
        })
    },
    cancelHistory() {
        wx.setStorage({
            key: "historyKeyword",
            data: [],
            success: function (a) {
                console.log(a)
            }
        })
        this.setData({
            'mainData.historyKeyword': []
        })
    },
    inputHandler(e) {
        let value = e.detail.value
        this.setData({
            'mainData.searchValue': value
        })
    },
    cancelSearch() {
        this.setData({
            'mainData.searchShowClass': ''
        })
    },
    searchGood(e) {
        let value = e.detail.value['keyword']
        console.log(value['keyword'])
        if (value) {
            this.searchGoodHandler(value)
        }
    },
    confirmSearchGood(e) {
        let value = e.detail.value
        if (value) {
            this.searchGoodHandler(value)
        }
    },
    searchGoodHandler(value) {
        let keywords = this.data.mainData.historyKeyword
        let newKeywords = keywords.concat(value)
        wx.setStorage({
            key: "historyKeyword",
            data: newKeywords,
            success: function (a) {
                console.log(a)
            }
        })
        let url = './list?keyword=' + value['keyword']
        wx.redirectTo({
            url: url,
        })
    },
    changeKeyword() {
        let keywords = this.data.serverData.keywords
        keywords.reverse()
        this.setData({
            'serverData.keywords': keywords
        })
    }
})