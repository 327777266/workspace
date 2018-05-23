// pages/index/good/good.js
Page({
  data: {
    typelist: [
      {
        id: 0,
        name: "默认"
      },
      {
        id: 1,
        name: "价格"
      },
      {
        id: 2,
        name: "销量"
      },
      {
        id: 3,
        name: "人气"
      },
  
    
    ],
    goodlist: [
      {
        id: 1,
        title: "朗格 233.026",
        pic: "http://productimg.xbiao.com/58/240_360/211314568962191.jpg",
        price: 182000,
      },
      {
        id: 2,
        title: "朗格 238.032",
        pic: "http://productimg.xbiao.com/58/240_360/5406914845612013.jpg",
        price: 297000,
      },
      {
        id: 3,
        title: "朗格 712.050",
        pic: "http://productimg.xbiao.com/58/240_360/308814605286241.jpg",
        price: 3950000,
      },
      {
        id: 4,
        title: "朗格 201.027",
        pic: "http://productimg.xbiao.com/58/240_360/4640114685499897.jpg",
        price: 108000,
      },
      {
        id: 5,
        title: "汉米尔顿 卡其海军系列 H77805335",
        pic: "http://productimg.xbiao.com/58/240_360/1832814581093185.jpg",
        price: 320000,
      },
      {
        id: 6,
        title: "朗格 192.032",
        pic: "http://productimg.xbiao.com/58/240_360/5319814815357417.jpg",
        price: 316000,
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
      url: '/pages/toSixth/toSixth'
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