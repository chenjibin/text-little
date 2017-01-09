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
                    name: '灰/透气/新款40/240',
                    num: 10
                },
                {
                    name: '灰/透气/新款41/245',
                    num: 0
                },
                {
                    name: '灰/透气/新款42/255',
                    num: 2
                },
                {
                    name: '灰/透气/新款43/260',
                    num: 0
                },
                {
                    name: '灰/透气/新款45/265',
                    num: 0
                },
                {
                    name: '红/新款/时尚/潮流40/240',
                    num: 10
                },
                {
                    name: '红/新款/时尚/潮流41/245',
                    num: 0
                },
                {
                    name: '红/新款/时尚/潮流42/255',
                    num: 15
                },
                {
                    name: '红/新款/时尚/潮流43/260',
                    num: 0
                },
                {
                    name: '红/新款/时尚/潮流45/265',
                    num: 16
                }
            ]
        },
        skuOptions: [
            {
                skuName: '颜色分类',
                name: 'cate',
                options: [
                    {
                        name: '灰/透气/新款',
                        pic: 'http://img2.xyyzi.com/Upload/images/20160724/5794c70f29c68.jpg',
                        select: '',
                        out: ''
                    },
                    {
                        name: '红/新款/时尚/潮流',
                        pic: 'http://img.gx.xyyzi.com/wd/product/20151211/1449775985-2843F09D-CC55-439E-820B-30C4F21B8B24.jpg',
                        select: '',
                        out: ''
                    }
                ]
            },
            {
                skuName: '鞋码',
                name: 'size',
                options: [
                    {
                        name: '40/240',
                        select: '',
                        out: ''
                    },
                    {
                        name: '41/245',
                        select: '',
                        out: ''
                    },
                    {
                        name: '42/255',
                        select: '',
                        out: ''
                    },
                    {
                        name: '43/260',
                        select: '',
                        out: ''
                    },
                    {
                        name: '45/265',
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
            btnState:'1',
            desc: '请选择',
            stateArr: [],
            stock: '933',
            sendData: {
                cate: '',
                size: '',
                num: '1'
            }
        }
    },
    onLoad(options) {
        console.log(options)
    },
    // 图片预览
    picLook(event) {
        let that = this
        let urls = that.data.goodInfo.smallPic
        let current = event.target.dataset.src
        wx.previewImage({
            current: current,
            urls: urls
        })
    },
    // 选择sku
    chooseSku(e) {
        let skuData = this.data.skuOptions
        let optionNum = e.target.dataset.oid
        let eachNum = e.target.dataset.eid
        let oName = e.target.dataset.oname
        let selectOne = skuData[optionNum]['options'][eachNum]
        if (selectOne['out'] === 'out-of-stock') return
        let flag = selectOne['select'] === ''
        let defaultPic = this.data.goodInfo.defaultPicc
        let optionName = e.target.dataset.option
        let statedata = this.data.mainData.stateArr[optionNum]
        if (flag) { // sku切换
            this.cancelAllSelect(skuData[optionNum]['options'], eachNum)
            let pic = selectOne['pic']
            if (pic) {
                this.setData({
                    'goodInfo.defaultPic': pic
                })
            }

            this.data.mainData.sendData[oName] = optionName

            let cate = this.data.mainData.sendData['cate']
            let size = this.data.mainData.sendData['size']

            if (cate && size) {
                let str = cate + size
                this.data.goodInfo.eachKucun.forEach((item) => {
                    if (item.name === str) {
                        this.data.mainData.stock = item.num
                    }
                })
                let newNum = parseInt(this.data.mainData.sendData.num)
                let nowStock = parseInt(this.data.mainData.stock)
                if (newNum > nowStock) {
                    this.data.mainData.sendData.num = nowStock
                }

                this.data.mainData.desc = '已选:'
            }
            this.setData({
                'mainData': this.data.mainData
            })


            if (statedata) this.outHandler(statedata, skuData, '')
            selectOne['select'] = 'select'
            this.data.mainData.stateArr[optionNum] = optionName
            this.outHandler(optionName, skuData, 'out-of-stock')

        } else { // 选中的suk取消选中
            if (selectOne['pic']) {
                this.setData({
                    'goodInfo.defaultPic': defaultPic
                })
            }

            this.data.mainData.sendData[oName] = ''
            this.data.mainData.desc = '请选择'
            this.data.mainData.stock = this.data.goodInfo.totalKucun


            this.setData({
                'mainData': this.data.mainData
            })

            this.setData({
                'mainData.sendData': this.data.mainData.sendData
            })

            selectOne['select'] = ''
            this.outHandler(optionName, skuData, '')
        }
        this.setData({
            skuOptions: skuData
        })
    },
    // 取消选中状态
    cancelAllSelect(value, eachNum) {
        value.forEach((item, index) => {
            //  if (eachNum === index) return
            item.select = ''
        })
    },
    // 处理无库存展示
    outHandler(name, skuData, calss) {
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
    // 数量加减一
    addNum() {
        let newNum = parseInt(this.data.mainData.sendData.num) + 1
        if (newNum > this.data.mainData.stock) return
        this.setData({
            'mainData.sendData.num': newNum
        })
    },
    // 数量减一
    decreaseNum() {
        let newNum = parseInt(this.data.mainData.sendData.num) - 1
        if (newNum <= 0) return
        this.setData({
            'mainData.sendData.num': newNum
        })
    },
    // input失去焦点的处理函数
    inputBlurHandler(event) {
        let newNum = parseInt(event.detail.value)
        newNum ? newNum = newNum : newNum = this.data.mainData.sendData.num
        let nowStock = parseInt(this.data.mainData.stock)
        newNum > nowStock ? newNum = nowStock : newNum = newNum
        this.setData({
            'mainData.sendData.num': newNum
        })
    },
    // pop弹出
    showPopBox(event) {
        let btnState = event.target.dataset.num

        this.setData({
            'mainData.btnState':btnState,
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

    addToCart() {
        console.log(this.data.mainData.sendData)
    },
    toHome() {
        wx.switchTab({
             url: '../index/index'
        })

    },
    // pop关闭
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