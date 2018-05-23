// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "长春龙阳电器设备有限公司",
    address: "长春市绿园区开胜街1088号",
    Phone: "13354308248",
    call: "0431-87853888",
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
  calling1: function(){
   wx.makePhoneCall({
     phoneNumber: '13354308248',
     success : function(){
       console.log("拨打电话成功")
     },
     fail : function(){
       console.log("拨打电话失败")
     }
   })
  },
  calling2: function () {
    wx.makePhoneCall({
      phoneNumber: '0431-87853888',
      success: function () {
        console.log("拨打电话成功")
      },
      fail: function () {
        console.log("拨打电话失败")
      }
    })
  },
  openMap: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        wx.openLocation({
          latitude: 43.9482580000,
          longitude: 125.1634540000,
          scale: 28, // 缩放比例
          name: "龙阳电器设备有限公司",
          address: "长春市绿园区开胜街1088号"
        })
      }
    })
  }
})