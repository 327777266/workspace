Page({


  /**
   * 页面的初始数据
   */
  data: {
    //1. 轮播图片数据
    imgUrls: [
      'https://www.bulgari.cn/media/wysiwyg/cms_page/alpencms/collection_page/1440x349.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525930567285&di=37e37b3ff7802b46c3bc052622266db8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0188b859afe2fca8012028a95bf3d0.png%402o.jpg',
      'https://www.longines.cn/media/wysiwyg/new-home/banner0-1.jpg'


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
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
suo: function (e) {
   wx.navigateTo({
     url: '/pages/goodsAll/goodsAll',
   })
 }, 
toFirst: function () {
  wx.navigateTo({
    url: '/pages/goodslls/goodslls',
  })
},
toSecond: function () {
  wx.navigateTo({
    url: '/pages/goodsswq/goodsswq',
  })
},
toThird: function () {
  wx.navigateTo({
    url: '/pages/goodsomj/goodsomj',
  })
},
toFourth: function () {
  wx.navigateTo({
    url: '/pages/goodswbl/goodswbl',
  })
},
toFifth: function () {
  wx.navigateTo({
    url: '/pages/goodsbdfl/goodsbdfl',
  })
},
toSixth: function () {
  wx.navigateTo({
    url: '/pages/goodslg/goodslg',
  })
},
toSeventh: function () {
  wx.navigateTo({
    url: '/pages/goodsdd/goodsdd',
  })
},
toEighth: function () {
  wx.navigateTo({
    url: '/pages/goodsams/goodsams',
  })
},






// toYi: function () {
//   wx.navigateTo({
//     url: '/pages/toYi/toYi',
//   })
// },
// toEr: function () {
//   wx.navigateTo({
//     url: '/pages/toEr/toEr',
//   })
// },
// toSan: function () {
//   wx.navigateTo({
//     url: '/pages/toSan/toSan',
//   })
// },
// toSi: function () {
//   wx.navigateTo({
//     url: '/pages/toSi/toSi',
//   })
// },
// toWu: function () {
//   wx.navigateTo({
//     url: '/pages/toWu/toWu',
//   })
// },
// toLiu: function () {
//   wx.navigateTo({
//     url: '/pages/toLiu/toLiu',
//   })
// }


//   ,
// More: function () {
//   wx.navigateTo({
//     url: '/pages/more/more',
//   })
// }



//   ,
// Buy: function () {
//   wx.navigateTo({
//     url: '/pages/Buy/Buy',
//   })
// },
// Riches: function () {
//   wx.navigateTo({
//     url: '/pages/Riches/Riches',
//   })
// },
// Fifth: function () {
//   wx.navigateTo({
//     url: '/pages/Fifth/Fifth',
//   })
// },
// Heaven: function () {
//   wx.navigateTo({
//     url: '/pages/Heaven/Heaven',
//   })
// },
// Conscience: function () {
//   wx.navigateTo({
//     url: '/pages/Conscience/Conscience',
//   })
// }

})
