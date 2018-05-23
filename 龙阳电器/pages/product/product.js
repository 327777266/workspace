// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  toProductOne:function(){
    wx.navigateTo({
      url: '/pages/productone/productone',
    })
  },

  toProductTwo: function () {
    wx.navigateTo({
      url: '/pages/producttwo/producttwo',
    })
  },

  toProductThree: function () {
    wx.navigateTo({
      url: '/pages/productthree/productthree',
    })
  },

  toProductFour: function () {
    wx.navigateTo({
      url: '/pages/productfour/productfour',
    })
  },

  toProductFive: function () {
    wx.navigateTo({
      url: '/pages/productfive/productfive',
    })
  }
})