Page({
   submitForm(e) {
       console.log(e)
       wx.navigateBack({
         delta: 1
       })
   }
})