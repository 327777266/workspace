Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/images/banner1.jpg",
      "/images/banner2.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
 calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13354308248',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }, 
 toProduct: function (){
    wx.navigateTo({
      url: '/pages/product/product',
    })
  },
 toSuccess: function (){
   wx.navigateTo({
     url: '/pages/success/success',
   })
 },
 toInformation: function () {
   wx.navigateTo({
     url: '/pages/information/information',
   })
 },
 toHonor: function () {
   wx.navigateTo({
     url: '/pages/honor/honor',
   })
 },
 toAbout: function () {
   wx.navigateTo({
     url: '/pages/about/about',
   })
 }
})