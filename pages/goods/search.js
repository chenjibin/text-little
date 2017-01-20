Page({
    data: {
        serverData: {
            keywords: ['阿迪男鞋', '耐克女鞋', '女式风衣', '阿迪小童', '耐克小童']
        },
        mainData: {
            searchValue: null,
            historyKeyword: null
        }
    },
    onShow() {
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
        wx.navigateBack({
            delta: 1
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