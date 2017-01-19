Page({
    data: {
        mainData: {
            searchValue: null
        }
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
        let value = e.detail.value
        let url = './list?keyword='+value['keyword']
        wx.navigateTo({
          url: url,
        })
    }
})