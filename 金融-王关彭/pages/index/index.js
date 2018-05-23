//index.js
//获取应用实例
const app = getApp()

Page({
  /**
  * 页面的初始数据
  */
  data: {
    //1. 轮播图片数据
    imgUrls: [
      'https://i03piccdn.sogoucdn.com/63be9bc6db3ab337',
      'https://i03piccdn.sogoucdn.com/d54926039a1e4083',
      'https://i03piccdn.sogoucdn.com/350a96fc07694d54'


    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1200,

    // 3.导航栏
    navs: [
      {
        image: '/images/home_play.png',
        text: '视频'
      },
      {
        image: '/images/home_play.png',
        text: '专栏'
      },
      {
        image: '/images/home_play.png',
        text: '定制'
      },
      {
        image: '/images/home_play.png',
        text: '服务'
      },
      {
        image: '/images/home_play.png',
        text: '加盟'
      }


    ],

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
  },
  Introduction: function () {
    wx.navigateTo({
      url: '/pages/Introduction/Introduction',
    })
  },
  Resources: function () {
    wx.navigateTo({
      url: '/pages/Resources/Resources',
    })
  },
  Service: function () {
    wx.navigateTo({
      url: '/pages/Service/Service',
    })
  },
  About: function () {
    wx.navigateTo({
      url: '/pages/About/About',
    })
  }
})
