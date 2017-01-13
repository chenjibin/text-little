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
        console.log(options.cateId)
    },
    onReachBottom() {
        let goodList = this.data.goodsData
        let newList = this.data.mockGoods
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
    }
})