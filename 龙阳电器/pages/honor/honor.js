// pages/honor/honor.js
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
  honorOne:function(){
    wx.previewImage({
      urls: [
        "http://ccslydq.com/wap/Upload/news/51BC4D4D9918D18A920907F090972360.jpg",
        "http://ccslydq.com/wap/Upload/news/C91866C04C56D6E59EEAC3A144D52EE9.jpg",
        "http://ccslydq.com/wap/Upload/news/7FD2E60FD40BA86C3AE4E5F8AAE96E90.jpg"
      ],
    })
  },
  honorTwo: function () {
    wx.previewImage({
      current:"http://ccslydq.com/wap/Upload/news/C91866C04C56D6E59EEAC3A144D52EE9.jpg",
      urls: [
        "http://ccslydq.com/wap/Upload/news/51BC4D4D9918D18A920907F090972360.jpg",
        "http://ccslydq.com/wap/Upload/news/C91866C04C56D6E59EEAC3A144D52EE9.jpg",
        "http://ccslydq.com/wap/Upload/news/7FD2E60FD40BA86C3AE4E5F8AAE96E90.jpg"
      ],
    })
  },
  honorThree: function () {
    wx.previewImage({
      current:"http://ccslydq.com/wap/Upload/news/7FD2E60FD40BA86C3AE4E5F8AAE96E90.jpg",
      urls: [
        "http://ccslydq.com/wap/Upload/news/51BC4D4D9918D18A920907F090972360.jpg",
        "http://ccslydq.com/wap/Upload/news/C91866C04C56D6E59EEAC3A144D52EE9.jpg",
        "http://ccslydq.com/wap/Upload/news/7FD2E60FD40BA86C3AE4E5F8AAE96E90.jpg"
      ],
    })
  }
})