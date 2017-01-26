Page({
    data: {
        serverData: {
            couponData: [
                {
                    cid: '10',
                    money: '5',
                    desc: '满5.01元使用',
                    bottomText: '幸运叶子官网',
                    num: '101',
                    left: '98'
                },
                {
                    cid: '11',
                    money: '20',
                    desc: '满200元使用',
                    bottomText: '幸运叶子官网',
                    num: '110',
                    left: '81'
                },
                {
                    cid: '12',
                    money: '5',
                    desc: '满5.01元使用',
                    bottomText: '幸运叶子官网',
                    num: '120',
                    left: '65'
                },
                {
                    cid: '13',
                    money: '5',
                    desc: '满5.01元使用',
                    bottomText: '幸运叶子官网',
                    num: '130',
                    left: '33'
                }
            ]
        },
        mainData: {

        }
    },
    onLoad() {

    },
    onShow() {
        this.leftNumHandler()
    },
    leftNumHandler() {
        let couponData = this.data.serverData.couponData
        couponData.forEach((item) => {
            let leftNum = Math.ceil((item.left / item.num) * 100)
            item.leftNum = leftNum
        })
        this.setData({
            'serverData.couponData': couponData
        })
    }
})