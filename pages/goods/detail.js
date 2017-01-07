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
                    num: 0
                },
                {
                    name: '灰45',
                    num: 0
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
                        select: '',
                        out: ''
                    },
                    {
                        name: '红',
                        pic: 'http://img.gx.xyyzi.com/wd/product/20151211/1449775985-2843F09D-CC55-439E-820B-30C4F21B8B24.jpg',
                        select: '',
                        out: ''
                    }
                ]
            },
            {
                skuName: '鞋码',
                options: [
                    {
                        name: '40',
                        select: '',
                        out: ''
                    },
                    {
                        name: '41',
                        select: '',
                        out: ''
                    },
                    {
                        name: '42',
                        select: '',
                        out: ''
                    },
                    {
                        name: '43',
                        select: '',
                        out: ''
                    },
                    {
                        name: '45',
                        select: '',
                        out: ''
                    }
                ]
            }
        ],
        showBox: {
            cartClass: '',
            maskClass: '',
            flag: true
        },
        mainData: {
            stateArr:[],
            sendData: {}
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
        if (selectOne['out'] === 'out-of-stock') return
        let flag = selectOne['select'] === ''
        let defaultPic = this.data.goodInfo.defaultPicc
        let optionName = e.target.dataset.option
        let statedata = this.data.mainData.stateArr[optionNum]
        this.cancelAllSelect(skuData[optionNum]['options'], eachNum)
        if (flag) {
            let pic = selectOne['pic']
            if (pic) {
                this.setData({
                    'goodInfo.defaultPic': pic
                })
            }
            
            if(statedata) this.outHandler(statedata, skuData,'')
            selectOne['select'] = 'select'
            this.data.mainData.stateArr[optionNum] = optionName
            this.outHandler(optionName, skuData,'out-of-stock')

        } else {
            if (selectOne['pic']) {
                this.setData({
                    'goodInfo.defaultPic': defaultPic
                })
            }
            selectOne['select'] = ''
            this.outHandler(optionName, skuData,'')
        }
        this.setData({
            skuOptions: skuData
        })
    },
    cancelAllSelect(value, eachNum) {
        value.forEach((item, index) => {
           //  if (eachNum === index) return
            item.select = ''
        })
    },
    outHandler(name, skuData,calss) {
        let dataRaary = []
        let kucunArray = this.data.goodInfo.eachKucun
        kucunArray.forEach((item) => {
            if (item['name'].indexOf(name) >= 0) {
                dataRaary.push(item)
            }
        })
        dataRaary.forEach((item, index) => {
            if (item.num === 0) {
                let a = item['name'].replace(name, '')
                skuData.forEach((v, i) => {
                    v['options'].forEach((n, w) => {
                        if (n.name === a) {
                            n.out = calss
                        }
                    })
                })
            }
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