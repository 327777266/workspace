//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img.zcool.cn/community/015d59590be943a8012145504e925f.jpg@2o.jpg',
      'http://img.zcool.cn/community/0158bd554bb455000001bf72c6ab45.jpg@1280w_1l_2o_100sh.png',
      'http://img.zcool.cn/community/01e7b059818a5e0000002129aa095f.jpg@2o.jpg'


    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1200,

   },

  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  all: function () {
    wx.navigateTo({
      url: '/pages/all/all',
    })
  },

  shilin: function () {
    wx.navigateTo({
      url: '/pages/shilin/shilin',
    })
  },

  jingkou: function () {
    wx.navigateTo({
      url: '/pages/jingkou/jingkou',
    })
  },

  lsyp: function () {
    wx.navigateTo({
      url: '/pages/lsyp/lsyp',
    })
  },

  tuangou: function () {
    wx.navigateTo({
      url: '/pages/tuangou/tuangou',
    })
  },

  xstj: function () {
    wx.navigateTo({
      url: '/pages/xstj/xstj',
    })
  },

  lianxi: function () {
    wx.navigateTo({
      url: '/pages/lianxi/lianxi',
    })
  },

   xs: function () {
    wx.navigateTo({
      url: '/pages/xs/xs',
    })
  },

   xinping: function () {
     wx.navigateTo({
       url: '/pages/xinping/xinping',
     })
   },

  pingtuan: function () {
     wx.navigateTo({
       url: '/pages/pingtuan/pingtuan',
     })
   },
  details: function () {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '0791-888888',
    })

  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }


})
