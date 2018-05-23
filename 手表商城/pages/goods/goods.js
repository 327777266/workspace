// pages/index/good/good.js
Page({
  data: {
    typelist: [
      {
        id: 0,
        name: "全部"
      },
      {
        id: 1,
        name: "百达翡丽"
      },
      {
        id: 2,
        name: "劳力士"
      },
      {
        id: 3,
        name: "朗格"
      },
      {
        id: 4,
        name: "欧米茄"
      },
    
    ],
    goodlist: [
      {
        id: 1,
        title: "百达翡丽 6104G-001",
        pic: "http://productimg.xbiao.com/59/240_360/974314619082909.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "劳力士蚝式恒动",
        pic: "http://productimg.xbiao.com/25/240_360/3909214579498188.jpg",
        price: 43300,
      },
      {
        id: 3,
        title: "劳力士 潜航者型 16610LV-93250",
        pic: "/image/11-11.jpg",
        price: 70000,
      },
      {
        id: 4,
        title: "朗格 233.026",
        pic: "http://productimg.xbiao.com/58/240_360/211314568962191.jpg",
        price: 182000,
      },
      {
        id: 5,
        title: "欧米茄 212.30.41.20.01.003",
        pic: "http://productimg.xbiao.com/23/240_360/1191114568913702.jpg",
        price: 10800,
      },
      {
        id: 6,
        title: "百达翡丽 5002P 铂金",
        pic: "http://productimg.xbiao.com/59/240_360/1035714567311753.jpg",
        price: 888888,
      }
    ],
 
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
   
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    
   
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  navigateToGood: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log("navigateToGood --> id:", id);
    wx.navigateTo({
      url: '/pages/toFifth/toFifth'
    })
  },
  searchGoodByTypeId: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      typeId: id
    })
    console.log("searchGoodByTypeId --> id:", id);
   
  
  },
  searchGood: function (e) {
    var id = this.data.typeId;
    var keyword = e.detail.value.keyword;
    console.log("SearchGood--> keyword:" + keyword);
   

  }
})