// pages/user/user.js
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log("获取用户信息成功!")
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onPullDownRefresh: function () {
    var that = this
    setTimeout(function () {
      wx.stopPullDownRefresh();
      console.log("stoppull")
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function (userInfo) {
        //更新数据
        console.log("获取用户信息成功!")
        that.setData({
          userInfo: userInfo
        })
      })
    }, 2000)
  },
  
  navigateToAddr: function () {
    wx.navigateTo({
      url: '../addr/addr'
    })
  },
  navigateToOrder: function () {
    
    wx.navigateTo({
      url: './order/order?typeId=0'
    })
  },
  navigateToOrder_pay: function () {
   
    wx.navigateTo({
      url: './order/order?typeId=1'
    })
  },
  navigateToOrder_fa: function () {

    wx.navigateTo({
      url: './order/order?typeId=2'
    })
  },
  navigateToOrder_get: function () {
    
    wx.navigateTo({
      url: './order/order?typeId=3'
    })
  },
  navigateToOrder_ad:function(){
    wx.navigateTo({
      url: '/pages/addr/addr',
    })
  }
})