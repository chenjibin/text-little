//detail.js

Page({
    data: {
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: true,
        goodInfo: {
            defaultPic: 'http://img2.xyyzi.com/Upload/images/20160411/570b6641552dd.jpg',
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
            saleNum: '0'
        },
        skuOptions: [
            {
                skuName: '颜色分类',
                options: [
                    {
                        name: '灰',
                        pic: 'http://img2.xyyzi.com/Upload/images/20160411/570b6641552dd.jpg'
                    },
                     {
                        name: '红',
                        pic: 'http://img2.xyyzi.com/Upload/images/20160502/57274f5aeb3c6.jpg'
                    }
                ]
            },
             {
                skuName: '鞋码',
                options: [
                    {
                        name: '40'
                    },
                     {
                        name: '41'
                    },
                     {
                        name: '42'
                    },
                     {
                        name: '43'
                    },
                     {
                        name: '45'
                    }
                ]
            }
        ]
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
    skuOptionChange(e) {
       console.log(e)
    }
})