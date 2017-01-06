//detail.js

Page({
    data: {
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: true,
        goodInfo: {
            defaultPic: 'http://img2.xyyzi.com/Upload/images/20160724/5794c70f29c68.jpg',
            defaultPicc: 'http://img2.xyyzi.com/Upload/images/20160724/5794c70f29c68.jpg',
            smallPic: [
                'http://img2.xyyzi.com/Upload/images/20160828/57c28da55b6b5.jpg',
                'http://img2.xyyzi.com/Upload/images/20160828/57c28da566251.jpg',
                'http://img2.xyyzi.com/Upload/images/20160828/57c28da5712e5.jpg',
                'http://img2.xyyzi.com/Upload/images/20160828/57c28da53d8a9.jpg'
            ],
            goodTitle: '【淘得6】Adidas阿迪达斯男鞋 2016新款训练鞋耐磨竞技网球鞋运动鞋AQ2279',
            goodSpec: '双12特价提前享，仅限9号到12号!',
            newPrice: '346.00',
            oldPrice: '499.00',
            saleNum: '0',
            totalKucun: '933',
            eachKucun: [
                {
                    name: '灰40',
                    num: 10
                },
                {
                    name: '灰41',
                    num: 0
                },
                {
                    name: '灰42',
                    num: 2
                },
                {
                    name: '灰43',
                    num: 3
                },
                {
                    name: '灰45',
                    num: 15
                },
                {
                    name: '红40',
                    num: 10
                },
                {
                    name: '红41',
                    num: 0
                },
                {
                    name: '红42',
                    num: 15
                },
                {
                    name: '红43',
                    num: 0
                },
                {
                    name: '红45',
                    num: 16
                }
            ]
    },
    skuOptions: [
        {
            skuName: '颜色分类',
            options: [
                {
                    name: '灰',
                    pic: 'http://img2.xyyzi.com/Upload/images/20160724/5794c70f29c68.jpg',
                    select: ''
                },
                {
                    name: '红',
                    pic: 'http://img.gx.xyyzi.com/wd/product/20151211/1449775985-2843F09D-CC55-439E-820B-30C4F21B8B24.jpg',
                    select: ''
                }
            ]
        },
        {
            skuName: '鞋码',
            options: [
                {
                    name: '40',
                    select: ''
                },
                {
                    name: '41',
                    select: ''
                },
                {
                    name: '42',
                    select: ''
                },
                {
                    name: '43',
                    select: ''
                },
                {
                    name: '45',
                    select: ''
                }
            ]
        }
    ],
    showBox: {
        cartClass: '',
        maskClass: '',
        flag: true
    }
},
    onLoad(options) {
        console.log(options)
    },
    picLook(event) {
        let that = this
        let urls = that.data.goodInfo.smallPic
        let current = event.target.dataset.src
        wx.previewImage({
            current: current,
            urls: urls
        })
    },
    chooseSku(e) {
        let skuData = this.data.skuOptions
        let optionNum = e.target.dataset.oid
        let eachNum = e.target.dataset.eid
        let selectOne = skuData[optionNum]['options'][eachNum]
        let flag = selectOne['select'] === ''
        let defaultPic = this.data.goodInfo.defaultPicc

        this.cancelAllSelect(skuData[optionNum]['options'], eachNum)
        if (flag) {
            let pic = selectOne['pic']
            if (pic) {
                this.setData({
                    'goodInfo.defaultPic': pic
                })
            }
            selectOne['select'] = 'select'

        } else {
            if(selectOne['pic']) {
                this.setData({
                    'goodInfo.defaultPic': defaultPic
                })
            }
            selectOne['select'] = ''
        }
        this.setData({
            skuOptions: skuData
        })
    },
    cancelAllSelect(value, eachNum) {
        value.forEach((item, index) => {
            if (eachNum === index) return
            item.select = ''
        })
    },
    showPopBox() {
        this.setData({
            showBox: {
                cartClass: 'show',
                flag: false
            }
        })
        setTimeout(() => {
        this.setData({
            'showBox.maskClass': 'show',
        })
    }, 10)
    },
hidePopBox() {
    this.setData({
        showBox: {
            cartClass: '',
            maskClass: ''
        }
    })
    setTimeout(() => {
        this.setData({
            'showBox.flag': true,
        })
    }, 300)
}
})