// pages/goodsmd/goodsmd.js
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
        title: "美度 M8600.4.26.1",
        pic: "http://productimg.xbiao.com/14/240_360/51814576779779.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "美度 M027.407.16.010.00",
        pic: "http://productimg.xbiao.com/14/240_360/4442114636482988.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "美度 M8600.4.26.8",
        pic: "http://productimg.xbiao.com/14/240_360/49914576779894.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "美度 M005.614.36.051.22",
        pic: "http://productimg.xbiao.com/14/240_360/2041514576814364.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "美度 M005.430.11.061.00",
        pic: "http://productimg.xbiao.com/14/240_360/856514576806441.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "美度 M021.431.11.031.00",
        pic: "http://productimg.xbiao.com/14/240_360/3672114576851629.jpg",
        price: 328000,
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
      url: '/pages/deail/deail'
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