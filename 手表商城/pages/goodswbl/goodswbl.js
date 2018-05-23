// pages/goodswbl/goodswbl.js
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
        title: "万宝龙 U0112609",
        pic: "http://productimg.xbiao.com/36/240_360/4042014780539249.jpg",
        price: 2938700,
      },
      {
        id: 2,
        title: "万宝龙 U0108736",
        pic: "http://productimg.xbiao.com/36/240_360/3323614609650839.jpg",
        price: 261400,
      },
      {
        id: 3,
        title: "万宝龙 U0111580",
        pic: "http://productimg.xbiao.com/36/240_360/3240614574020911.jpg",
        price: 224500,
      },
      {
        id: 4,
        title: "万宝龙 09668",
        pic: "http://productimg.xbiao.com/36/240_360/830814580352456.jpg",
        price: 311800,
      },
      {
        id: 5,
        title: "万宝龙 36969",
        pic: "http://productimg.xbiao.com/36/240_360/151313098617503.jpg",
        price: 888888,
      },
      {
        id: 6,
        title: "万宝龙 U0116508",
        pic: "http://productimg.xbiao.com/36/240_360/5840615048433546.jpg",
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
      url: '/pages/toFourth/toFourth'
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